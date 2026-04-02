import { PrismaClient } from '.prisma-cycle/client';
import { v4 as uuidv4 } from 'uuid';

const prisma: any = new PrismaClient();

const BUSINESS_UNITS = [
  { code: 'CBU', displayName: 'Consumer Business Unit' },
  { code: 'VBU', displayName: 'Vodacom Business Unit' },
  { code: 'TERMINALS', displayName: 'Terminals' },
];

async function main(): Promise<void> {
  console.log('🌱 Seeding cycle-service database...');

  for (const bu of BUSINESS_UNITS) {
    await prisma.cfgBusinessUnit.upsert({
      where: { code: bu.code },
      create: { id: uuidv4(), code: bu.code, displayName: bu.displayName },
      update: { displayName: bu.displayName },
    });
  }

  console.log(`  ✓ ${BUSINESS_UNITS.length} business units`);
  console.log('✅ Seeding complete');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
