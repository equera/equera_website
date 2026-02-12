/**
 * Equera brand configuration
 * Source: Brand assets (color palette + typography style guide)
 * Primary color #FE5733 matches the logo.
 */

export const BRAND = {
  colors: {
    // Primary (logo) - #FE5733
    primary: '#FE5733',
    primaryHex: '#FE5733',

    // Secondary & supporting palette from brand guide
    black: '#000000',
    darkPurple: '#2A1D31', // Deep plum - used for all dark texts
    charcoalViolet: '#382743',
    bluePurple: '#927BFA',
    lavender: '#A490FF',
    lightGrey: '#ECECEC',
    offWhite: '#F8F9F9',
    white: '#FFFFFF',

    // Semantic aliases for implementation
    text: {
      dark: '#2A1D31',
      light: '#FFFFFF',
    },
  },

  typography: {
    // Inter: Label (Light), Title (Bold)
    label: {
      fontFamily: 'Inter',
      weight: 300, // Light
      size: 10,
    },
    title: {
      fontFamily: 'Inter',
      weight: 700, // Bold
      sizes: [40, 36],
    },
    // Lexend: Body Text, Page Number
    body: {
      fontFamily: 'Lexend',
      weight: 400, // Normal
      sizes: [14, 12, 9],
    },
    pageNumber: {
      fontFamily: 'Lexend',
      weight: 200, // Extra Light
      size: 7,
    },
    lineSpacing: {
      default: 'normal',
      concise: 0.8,
    },
  },

  fonts: {
    // Headings, labels: Inter
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    // Body: Lexend
    body: ['Lexend', 'Inter', 'system-ui', 'sans-serif'],
  },

  logo: {
    url: 'https://cdn.equera.ai/assets/equera-logo-orange.webp',
    alt: 'Equera Logo',
  },

  spacing: {
    section: {
      mobile: '4rem',
      desktop: '8rem',
    },
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    glow: '0 0 20px rgba(254, 87, 51, 0.3)',
  },

  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const;
