import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

const BUILT_IN_ROLES = [
  { name: 'SUPER_ADMIN', description: 'Full platform access' },
  { name: 'CBU_TRADE_MARKETING', description: 'CBU Trade Marketing team — manages cycles and deals' },
  { name: 'VB_TRADE_MARKETING', description: 'VB Trade Marketing — OEM negotiations' },
  { name: 'TERMINALS', description: 'Terminals team — reads deal config and submits CTD' },
  { name: 'APPROVER_L1', description: 'Level 1 approver (deals < 20% efficiency)' },
  { name: 'APPROVER_L2', description: 'Level 2 approver (deals 10–20% efficiency)' },
  { name: 'APPROVER_L3', description: 'Level 3 approver (deals < 10% efficiency)' },
  { name: 'EXECUTIVE_APPROVER', description: 'Executive approver for multi-BU deals' },
  { name: 'VIEWER', description: 'Read-only access' },
];

const PERMISSIONS = [
  // Cycles
  { resource: 'cycle', action: 'create' },
  { resource: 'cycle', action: 'read' },
  { resource: 'cycle', action: 'update' },
  { resource: 'cycle', action: 'status:advance' },
  // Trade list
  { resource: 'tradelist', action: 'upload' },
  { resource: 'tradelist', action: 'read' },
  { resource: 'tradelist', action: 'commit' },
  // OEM negotiations
  { resource: 'oem', action: 'read' },
  { resource: 'oem', action: 'update-ctd' },
  { resource: 'oem', action: 'confirm' },
  { resource: 'oem', action: 'request-changes' },
  // Headlines
  { resource: 'headline', action: 'read' },
  { resource: 'headline', action: 'generate' },
  { resource: 'headline', action: 'publish' },
  // Approvals
  { resource: 'approval', action: 'read' },
  { resource: 'approval', action: 'approve' },
  { resource: 'approval', action: 'reject' },
  // Catalog
  { resource: 'catalog', action: 'read' },
  { resource: 'catalog', action: 'write' },
  // Admin
  { resource: 'user', action: 'create' },
  { resource: 'user', action: 'read' },
  { resource: 'user', action: 'update' },
  { resource: 'role', action: 'create' },
  { resource: 'role', action: 'read' },
  { resource: 'role', action: 'assign' },
];

async function main(): Promise<void> {
  console.log('🌱 Seeding auth-service database...');

  // Upsert permissions
  const permissionMap = new Map<string, string>();
  for (const p of PERMISSIONS) {
    const key = `${p.resource}:${p.action}`;
    const permission = await prisma.permission.upsert({
      where: { resource_action: { resource: p.resource, action: p.action } },
      create: { id: uuidv4(), resource: p.resource, action: p.action },
      update: {},
    });
    permissionMap.set(key, permission.id);
  }
  console.log(`  ✓ ${PERMISSIONS.length} permissions`);

  // Upsert roles
  const roleMap = new Map<string, string>();
  for (const r of BUILT_IN_ROLES) {
    const role = await prisma.role.upsert({
      where: { name: r.name },
      create: { id: uuidv4(), name: r.name, description: r.description },
      update: { description: r.description },
    });
    roleMap.set(r.name, role.id);
  }
  console.log(`  ✓ ${BUILT_IN_ROLES.length} roles`);

  // Assign all permissions to SUPER_ADMIN
  const superAdminId = roleMap.get('SUPER_ADMIN')!;
  for (const [, permId] of permissionMap) {
    await prisma.rolePermission.upsert({
      where: { roleId_permissionId: { roleId: superAdminId, permissionId: permId } },
      create: { roleId: superAdminId, permissionId: permId },
      update: {},
    });
  }

  // CBU_TRADE_MARKETING permissions
  const cbuPerms = ['cycle:create', 'cycle:read', 'cycle:update', 'cycle:status:advance', 'tradelist:upload', 'tradelist:read', 'tradelist:commit', 'headline:read', 'headline:generate', 'catalog:read'];
  await assignPerms(roleMap.get('CBU_TRADE_MARKETING')!, cbuPerms, permissionMap);

  // VB_TRADE_MARKETING
  const vbPerms = ['oem:read', 'oem:update-ctd', 'oem:confirm', 'oem:request-changes', 'catalog:read'];
  await assignPerms(roleMap.get('VB_TRADE_MARKETING')!, vbPerms, permissionMap);

  // TERMINALS (read-only + CTD submit)
  const termPerms = ['cycle:read', 'oem:read', 'oem:update-ctd', 'catalog:read'];
  await assignPerms(roleMap.get('TERMINALS')!, termPerms, permissionMap);

  // APPROVER_L1/L2/L3
  const approverPerms = ['approval:read', 'approval:approve', 'approval:reject', 'headline:read', 'catalog:read'];
  for (const role of ['APPROVER_L1', 'APPROVER_L2', 'APPROVER_L3']) {
    await assignPerms(roleMap.get(role)!, approverPerms, permissionMap);
  }

  // EXECUTIVE_APPROVER
  const execPerms = ['approval:read', 'approval:approve', 'approval:reject', 'headline:read', 'headline:publish', 'catalog:read'];
  await assignPerms(roleMap.get('EXECUTIVE_APPROVER')!, execPerms, permissionMap);

  // VIEWER — read everything
  const viewerPerms = ['cycle:read', 'tradelist:read', 'oem:read', 'headline:read', 'approval:read', 'catalog:read', 'user:read', 'role:read'];
  await assignPerms(roleMap.get('VIEWER')!, viewerPerms, permissionMap);

  // Create default super-admin user
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? 'admin@dde.local';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? 'Admin@DDE1!';

  let adminUser = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!adminUser) {
    const passwordHash = await bcrypt.hash(adminPassword, 12);
    adminUser = await prisma.user.create({
      data: {
        id: uuidv4(),
        email: adminEmail,
        passwordHash,
        firstName: 'System',
        lastName: 'Admin',
        isActive: true,
      },
    });
    console.log(`  ✓ Admin user created: ${adminEmail}`);
  } else {
    console.log(`  ⚠ Admin user already exists, ensuring role assignment: ${adminEmail}`);
  }

  // Always ensure SUPER_ADMIN role is assigned (idempotent)
  await prisma.userRole.upsert({
    where: { userId_roleId: { userId: adminUser.id, roleId: superAdminId } },
    create: { userId: adminUser.id, roleId: superAdminId, grantedBy: null },
    update: {},
  });

  console.log('✅ Seeding complete');
}

async function assignPerms(roleId: string, keys: string[], permMap: Map<string, string>): Promise<void> {
  for (const key of keys) {
    const permId = permMap.get(key);
    if (!permId) continue;
    await prisma.rolePermission.upsert({
      where: { roleId_permissionId: { roleId, permissionId: permId } },
      create: { roleId, permissionId: permId },
      update: {},
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
