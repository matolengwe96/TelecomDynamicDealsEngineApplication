import { PrismaClient } from '.prisma-catalog/client';
import { v4 as uuidv4 } from 'uuid';

const prisma: any = new PrismaClient();

// Channel codes match ChannelId enum in @dde/contracts
const CHANNELS = [
  { code: 0, name: 'Generic' },
  { code: 1, name: 'Direct' },
  { code: 2, name: 'D&F (Dealers & Franchise)' },
  { code: 3, name: 'National Chains' },
  { code: 4, name: 'Online' },
  { code: 5, name: 'Onyx' },
];

const TERMS = [
  { months: 12, displayName: '12 Months' },
  { months: 24, displayName: '24 Months' },
  { months: 36, displayName: '36 Months' },
  { months: 48, displayName: '48 Months' },
];

async function main(): Promise<void> {
  console.log('🌱 Seeding catalog-service database...');

  for (const ch of CHANNELS) {
    const existing = await prisma.channel.findUnique({ where: { code: ch.code } });
    if (!existing) {
      await prisma.channel.create({ data: { id: uuidv4(), ...ch, isActive: true } });
    }
  }
  console.log(`  ✓ ${CHANNELS.length} channels`);

  for (const t of TERMS) {
    const existing = await prisma.term.findUnique({ where: { months: t.months } });
    if (!existing) {
      await prisma.term.create({ data: { id: uuidv4(), ...t, isActive: true } });
    }
  }
  console.log(`  ✓ ${TERMS.length} terms`);
  console.log('✅ Seeding complete');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
