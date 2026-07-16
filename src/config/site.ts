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
    value: '90%',
    description: '% of travelers that want to experience life like a local',
  },
  {
    value: '70%',
    description:
      "% of travelers that say they'd choose an experience that supports the local community, even if it costs more",
  },
  {
    value: '53%',
    description:
      "% of travelers care about the impact on people - the same amount that care about travel's impact on the planet",
  },
] as const;

export const STATS_SOURCES =
  'Analysis & Research: GetYourGuide 2023, Booking.com 2025';

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
