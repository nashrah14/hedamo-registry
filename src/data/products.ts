import type { Product } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'BioWeave Flex',
    category: 'Textile',
    producer: 'Pacific Fibers Co.',
    status: 'Submitted',
    updatedAt: 'Jan 7, 2026',
    evidenceCount: 2,
    description: 'Biodegradable synthetic fiber alternative made from corn starch polymers. Suitable for activewear applications.',
    attributes: { material: 'Mixed Sources', recyclability: 'Class A (High)' },
    timeline: { listed: 'Jan 12, 2024', updated: 'Jan 7, 2026', review: 'Jan 12, 2027' },
    versions: [
      { v: '2.0', date: 'Jan 7, 2026', author: 'System Administrator', note: 'Updated sustainability metrics based on new lab results.' },
      { v: '1.0', date: 'Nov 7, 2025', author: 'Quality Manager', note: 'Initial disclosure submission.' }
    ]
  },
  {
    id: 'prod-002',
    name: 'CarbonCrete Block',
    category: 'Construction Material',
    producer: 'BioSynthetics Ltd.',
    status: 'Published',
    updatedAt: 'Dec 7, 2025',
    evidenceCount: 8,
    description: 'Carbon-negative concrete blocks utilizing captured CO2 in the curing process.',
    attributes: { material: 'Recycled Aggregate', recyclability: 'High' },
    timeline: { listed: 'Oct 01, 2024', updated: 'Dec 7, 2025', review: 'Oct 01, 2026' },
    versions: [{ v: '1.0', date: 'Dec 7, 2025', author: 'Eng. Sarah Chen', note: 'Final certification disclosure.' }]
  },
  {
    id: 'prod-003',
    name: 'EcoStruct Timber Panel 500',
    category: 'Construction Material',
    producer: 'Nordic Wood Processors',
    status: 'Published',
    updatedAt: 'Jan 5, 2026',
    evidenceCount: 4,
    description: 'Cross-laminated timber panels sourced from FSC-certified Nordic forests.',
    attributes: { material: 'Solid Wood', recyclability: 'Biodegradable' },
    timeline: { listed: 'Jan 05, 2025', updated: 'Jan 5, 2026', review: 'Jan 05, 2027' },
    versions: [{ v: '1.0', date: 'Jan 5, 2026', author: 'Forestry Lead', note: 'Annual sustainability update.' }]
  },
  {
    id: 'prod-004',
    name: 'HempFiber Insulation',
    category: 'Construction Material',
    producer: 'Nordic Wood Processors',
    status: 'Submitted',
    updatedAt: 'Jan 6, 2026',
    evidenceCount: 3,
    description: 'Natural hemp-based thermal insulation with superior moisture regulation.',
    attributes: { material: 'Industrial Hemp', recyclability: 'Compostable' },
    timeline: { listed: 'Jan 06, 2026', updated: 'Jan 6, 2026', review: 'Jan 06, 2027' },
    versions: [{ v: '1.0', date: 'Jan 6, 2026', author: 'Product Manager', note: 'New product entry.' }]
  },
  {
    id: 'prod-005',
    name: 'RePack Container System',
    category: 'Packaging',
    producer: 'Acme Sustainable Materials',
    status: 'Published',
    updatedAt: 'Dec 26, 2025',
    evidenceCount: 6,
    description: 'Reusable shipping container system designed for 50+ cycles.',
    attributes: { material: 'Polypropylene', recyclability: 'Closed Loop' },
    timeline: { listed: 'Aug 15, 2024', updated: 'Dec 26, 2025', review: 'Aug 15, 2026' },
    versions: [{ v: '1.1', date: 'Dec 26, 2025', author: 'Logistics Head', note: 'Durability test results added.' }]
  }
];