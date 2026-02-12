# Equera Website

A modern, performant website for Equera built with Astro, React, and Tailwind CSS.

## Features

- 🚀 Built with Astro for optimal performance and SEO
- 🎨 Modern, responsive design with Tailwind CSS
- ✨ Smooth animations with GSAP and Framer Motion
- 📱 Fully responsive and mobile-optimized
- 🔍 SEO optimized with meta tags and structured data
- 📝 Contact form with validation
- ⚡ Fast loading times with minimal JavaScript

## Tech Stack

- **Astro** - Static site generator
- **React** - For interactive components
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Advanced animations
- **Framer Motion** - React animations
- **Lenis** - Smooth scrolling
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

This will generate a static site in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Project Structure

```
/
├── public/
│   ├── images/          # Static images
│   └── robots.txt       # Robots file
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── config/          # Site configuration
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
└── package.json
```

## Contact Form

The contact form is currently set up with client-side validation. To enable form submission, update the `ContactForm.tsx` component with your API endpoint.

## Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **Self-hosted**: Upload the `dist` folder to your web server

## License

© 2026 Equera, Inc. All rights reserved.
