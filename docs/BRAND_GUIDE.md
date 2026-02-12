# Equera Brand Guide

Reference for design and development. Source: brand assets (color palette + typography).

## Primary color (logo)

- **#FE5733** — Primary / logo orange. Use for primary CTAs, logo, key accents.

## Full color palette

| Role            | Hex       | Usage                    |
|-----------------|-----------|--------------------------|
| Black           | `#000000` | Black                    |
| Primary         | `#FE5733` | Logo, primary actions    |
| Dark purple     | `#2A1D31` | All dark text            |
| Charcoal violet | `#382743` | Secondary dark           |
| Blue purple     | `#927BFA` | Accent                   |
| Lavender        | `#A490FF` | Accent                   |
| Light grey      | `#ECECEC` | Borders / subtle bg      |
| Off-white       | `#F8F9F9` | Backgrounds              |
| White           | `#FFFFFF` | Light text, backgrounds |

## Typography

### Inter (labels + titles)

- **Label:** Inter, Light (300), 10px  
- **Title:** Inter, Bold (700), 40px / 36px  

### Lexend (body + UI)

- **Body text:** Lexend, Normal (400), 14px / 12px / 9px  
- **Page number:** Lexend, Extra Light (200), 7px  

### Text colors

- **Dark text:** `#2A1D31`  
- **Light text:** White  

### Line spacing

- Default for most text  
- Concise: `0.8` where content should be more vertically compact  

## Config usage

Brand values are centralized in **`src/config/brand.ts`** and used via Tailwind (e.g. `primary`, `brand-dark`, etc.) and in components. Update that file when the brand guide changes.
