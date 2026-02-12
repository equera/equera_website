export const SITE = {
  title: 'Equera - Radically changing the economics of local and community based tourism',
  description:
    'The first platform making community-based tourism online bookable. A B2B SaaS connectivity platform bringing authentic, sustainable travel online.',
  url: 'https://equera.ai',
  ogImage: '/og-image.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/company/equera',
    instagram: 'https://www.instagram.com/danielle_in_de',
  },
  contact: {
    phone: '+1 (984) 386-0748',
    address: '3089 Mavisbank Circle, Apex, NC, 27502, USA',
    email: 'contact@equera.ai',
  },
  company: {
    name: 'Equera, Inc.',
    year: 2026,
  },
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'The Problem', href: '#problem' },
  { name: 'The Solution', href: '#solution' },
  { name: 'Features', href: '#features' },
  { name: 'Meet the Founder', href: '#founder' },
] as const;

export const STATS = [
  {
    value: 90,
    suffix: '%',
    prefix: '',
    label: 'of travelers want to travel like locals',
    commitment: 'yet most community-based tourism remains offline',
  },
  {
    value: 448,
    suffix: 'B',
    prefix: '$',
    label: 'offline market of community-based tourism supply',
    commitment: 'that tour operators can\'t access',
  },
  {
    value: 53,
    suffix: '%',
    prefix: '',
    label: 'of travelers want to leave places better than they found them',
    commitment: "yet travel agents are drowning in greenwashed supply, with no way to verify true impact",
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
