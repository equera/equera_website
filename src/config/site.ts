export const SITE = {
  title: 'Equera - The AI Operating System for Experience-Led Travel',
  description:
    'The first platform making community-based tourism online bookable. A B2B SaaS connectivity platform bringing authentic, sustainable travel online.',
  url: 'https://equera.ai',
  ogImage: '/og-image.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/company/equeratravel',
    instagram: 'https://www.instagram.com/danielle_in_de',
  },
  contact: {
    phone: '+1 (919) 924-8000',
    address: '2093 Philadelphia Pike #4340, Claymont, DE 19703, USA',
    email: 'info@equera.ai',
  },
  company: {
    name: 'Equera, Inc.',
    year: 2026,
  },
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'The Problem', href: '/#problem' },
  { name: 'The Solution', href: '/#solution' },
  { name: 'Features', href: '/#features' },
  { name: 'Meet the Team', href: '/#team' },
] as const;

export const STATS = [
  {
    value: '$4M-$21M',
    description:
      'Amount that large travel agencies ($350M-$1B+) spend annually on sourcing',
  },
  {
    value: '30-45%',
    description:
      '% of time teams spend sourcing experiences (which only deliver 15-25% of revenue)',
  },
  {
    value: '75%',
    description:
      "% of travelers say they'd choose an experience that supports the local community, even if it costs more",
  },
] as const;

export const STATS_SOURCES =
  'Analysis & research: Phocuswright, Arival, ATTA Industry Snapshot, Intrepid Annual Report 2024, Audley Travel Companies House Filing 2024, Wakefield Research 2022';

export const LOGOS = [
  {
    src: '/images/logos/techstars.webp',
    alt: 'Techstars',
    class: 'h-10 lg:h-12 w-auto',
  },
  {
    src: '/images/logos/grace.webp',
    alt: 'Grace Accelerate Female Entrepreneurship',
    class: 'h-10 lg:h-12 w-auto',
  },
  {
    src: '/images/logos/aws-startups.webp',
    alt: 'AWS Startups',
    class: 'h-14 lg:h-16 w-auto',
  },
  {
    src: '/images/logos/braze-tech-equitable.webp',
    alt: 'Braze Tech for an Equitable Future',
    class: 'h-14 lg:h-16 w-auto',
  },
  {
    src: '/images/logos/shortlisted-2025.webp',
    alt: 'Shortlisted 2025',
    class: 'h-16 lg:h-20 w-auto',
  },
] as const;

export const FEATURES = [
  {
    title: 'One Unified Platform for Modern Travel Distribution',
    description:
      'distribute all product types - from homestays to packaged travel - across multiple sales channels, all from one platform',
  },
  {
    title: 'GenAI-Driven Product Intelligence',
    description:
      'unlock fragmented and hidden demand signals, to drive more revenue and compete independently',
  },
  {
    title: 'Centralized Reservation System',
    description:
      'unify and automate reservations across all sources to eliminate double bookings and unlock scalable growth',
  },
  {
    title: 'Offline Sustainability Insights, Brought Online',
    description:
      'leverage data at the destination level to plan smarter, promote authentically, and include communities in decision-making',
  },
  {
    title: 'Upskilling Playbooks for Operators',
    description:
      'empower your workforce with on-demand training in hospitality, customer experience, and language skills - anytime, anywhere',
  },
] as const;
