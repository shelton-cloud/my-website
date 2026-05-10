---
name: Creative Technologist System
colors:
  surface: '#0c1322'
  surface-dim: '#0c1322'
  surface-bright: '#323949'
  surface-container-lowest: '#070e1d'
  surface-container-low: '#141b2b'
  surface-container: '#191f2f'
  surface-container-high: '#232a3a'
  surface-container-highest: '#2e3545'
  on-surface: '#dce2f7'
  on-surface-variant: '#c3c6d5'
  inverse-surface: '#dce2f7'
  inverse-on-surface: '#293040'
  outline: '#8d909e'
  outline-variant: '#434653'
  surface-tint: '#b2c5ff'
  primary: '#b2c5ff'
  on-primary: '#002c72'
  primary-container: '#4270d8'
  on-primary-container: '#fffcff'
  inverse-primary: '#2559c0'
  secondary: '#ffb786'
  on-secondary: '#502400'
  secondary-container: '#af5700'
  on-secondary-container: '#fff2eb'
  tertiary: '#dfb7ff'
  on-tertiary: '#4a017e'
  tertiary-container: '#9459c8'
  on-tertiary-container: '#fffbff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001847'
  on-primary-fixed-variant: '#0040a0'
  secondary-fixed: '#ffdcc6'
  secondary-fixed-dim: '#ffb786'
  on-secondary-fixed: '#311400'
  on-secondary-fixed-variant: '#723600'
  tertiary-fixed: '#f1daff'
  tertiary-fixed-dim: '#dfb7ff'
  on-tertiary-fixed: '#2d004f'
  on-tertiary-fixed-variant: '#632696'
  background: '#0c1322'
  on-background: '#dce2f7'
  surface-variant: '#2e3545'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 32px
---

## Brand & Style

This design system establishes a visual language for a "creative technologist"—a persona that sits at the intersection of rigorous engineering and avant-garde design. The aesthetic is anchored in **High-End Minimalism** with subtle **Glassmorphism** accents to convey depth and technical sophistication. 

The goal is to evoke a sense of intellectual precision and premium craftsmanship. By leveraging dark mode as the default, the system highlights content through high-contrast accents and generous whitespace (negative space), ensuring the user's focus remains on the work. The interface should feel like a high-performance tool: efficient, quiet, yet undeniably powerful.

## Colors

The palette is built on a foundation of "Deep Charcoal" (#111827) to provide a rich, infinite background that reduces eye strain and makes chromatic colors pop. The primary accent, "Electric Indigo" (#4270D8), serves as the main interactive signal, while "Sunset Orange" (#F48C3B) is used sparingly for high-priority calls to action or status indicators.

"Soft White" (#FCFCFC) is reserved strictly for primary typography and essential UI borders, ensuring maximum legibility without the harshness of pure white. Gradients should be used minimally, primarily as soft "glow" effects behind key components to simulate light emitting from a screen.

## Typography

This design system utilizes a dual-font strategy to balance character with utility. **Space Grotesk** is the voice of the brand, used for headlines and technical labels; its geometric quirks reflect a modern, tech-forward personality. **Inter** handles the heavy lifting for body copy and long-form text, providing exceptional readability and a neutral, systematic feel.

Headlines should utilize tight letter-spacing and aggressive line-heights to create impactful, "poster-like" blocks of text. Labels are always uppercase with increased tracking to evoke the feeling of metadata or terminal outputs.

## Layout & Spacing

The layout follows a **Fixed Grid** model centered within the viewport, ensuring that the high-end editorial feel is maintained across large displays. A 12-column grid is used for desktop, with generous 32px gutters to prevent content density from feeling overwhelming.

Spacing follows a strict 8px rhythmic baseline. Vertical margins between sections are intentionally oversized (80px+) to create a "gallery" effect, allowing each project or content block to breathe independently. Alignment should be primarily left-heavy to mimic technical documentation, but with large-scale imagery breaking the grid to add visual interest.

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **Glassmorphism** rather than traditional shadows. In a dark environment, surfaces closer to the user are rendered in slightly lighter shades of charcoal or with a semi-transparent blur effect.

1.  **Level 0 (Background):** The base #111827 surface.
2.  **Level 1 (Cards/Sections):** A slightly lighter tint with a 1px "Soft White" stroke at 10% opacity.
3.  **Level 2 (Overlays/Modals):** A semi-transparent background (80% opacity) with a 20px backdrop-filter blur.
4.  **Accent Depth:** Interactive elements may feature a soft "outer glow" using the Primary Indigo color with a 30px blur and low opacity (15%) to simulate a digital screen.

## Shapes

The shape language is refined and consistent. A **Rounded (Level 2)** approach is used to soften the technical nature of the typography. Standard UI components like cards and input fields use a 0.5rem (8px) radius. Larger containers or hero sections may scale up to 1.5rem (24px) to create a distinct frame for imagery. 

Buttons that act as primary triggers should remain slightly more rounded than secondary containers to indicate touchability, while decorative elements like "tags" or "chips" use a full pill-shape.

## Components

### Buttons
Primary buttons are solid Electric Indigo with Soft White text, using a 0.5rem radius. Hover states should trigger a subtle primary-colored glow. Secondary buttons are "ghost" style: a 1px Soft White border at 20% opacity, which becomes 100% opaque on hover.

### Cards
Cards are the primary container for portfolio pieces. They feature a Level 1 elevation (subtle tint) and no shadow. Images within cards should have a slight zoom-scale transition on hover to indicate interactivity.

### Chips / Tags
Used for skills or categories, tags use the "label-sm" typography. They are pill-shaped with a dark background and a thin stroke of the Tertiary Purple or Secondary Orange to categorize work types.

### Input Fields
Inputs are minimalist, defined by a bottom-border only (2px) in Soft White (20% opacity). Upon focus, the border transitions to Electric Indigo and a small label-sm floats above the field.

### Progress Indicators
For a "creative technologist," use slim, horizontal bars for skill levels or scroll progress, utilizing the Sunset Orange for high visibility against the dark background.