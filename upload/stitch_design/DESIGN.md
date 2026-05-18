---
name: Tech-African Soul
colors:
  surface: '#0f1415'
  surface-dim: '#0f1415'
  surface-bright: '#353a3b'
  surface-container-lowest: '#0a0f10'
  surface-container-low: '#181c1d'
  surface-container: '#1c2021'
  surface-container-high: '#262b2c'
  surface-container-highest: '#313637'
  on-surface: '#dfe3e4'
  on-surface-variant: '#c3c7cc'
  inverse-surface: '#dfe3e4'
  inverse-on-surface: '#2c3132'
  outline: '#8d9196'
  outline-variant: '#43474c'
  surface-tint: '#b0cae0'
  primary: '#b0cae0'
  on-primary: '#1a3345'
  primary-container: '#1c3547'
  on-primary-container: '#859eb3'
  inverse-primary: '#496175'
  secondary: '#67d8d0'
  on-secondary: '#003734'
  secondary-container: '#20a19a'
  on-secondary-container: '#00302d'
  tertiary: '#7dd6ce'
  on-tertiary: '#003734'
  tertiary-container: '#003a37'
  on-tertiary-container: '#4fa9a3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cce6fd'
  primary-fixed-dim: '#b0cae0'
  on-primary-fixed: '#021e2f'
  on-primary-fixed-variant: '#31495c'
  secondary-fixed: '#85f5ec'
  secondary-fixed-dim: '#67d8d0'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504c'
  tertiary-fixed: '#99f2ea'
  tertiary-fixed-dim: '#7dd6ce'
  on-tertiary-fixed: '#00201e'
  on-tertiary-fixed-variant: '#00504c'
  background: '#0f1415'
  on-background: '#dfe3e4'
  surface-variant: '#313637'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-h1:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
  headline-h2:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-h3:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
  code-sm:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
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
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system embodies a "Tech-African Soul"—a fusion of high-performance AI engineering and the vibrant, forward-looking energy of the African continent. The aesthetic is premium, authoritative, and sophisticated, leaning heavily into a dark-mode-first experience that prioritizes clarity and visual impact.

The style is a hybrid of **Minimalism** and **Corporate Modern**, enriched by experimental textures. It avoids clichés, instead using abstract neural network patterns and low-poly silhouettes of the African continent to represent data-driven intelligence. The UI should feel like a high-end command center: precise, responsive, and deeply reliable, evoking a sense of pride and technological sovereignty.

## Colors

This design system utilizes a high-contrast, navy-dominant palette to establish a premium "dark mode" atmosphere. 

- **Primary Navy (#1C3547):** The foundation. Used for all primary backgrounds, deep-layered containers, and high-level headings. It provides a stable, "infinite" canvas for data visualization.
- **Accent Teal (#1A9E97):** The "Pulse." This is the primary action color, used for buttons, interactive highlights, and active states.
- **Dark Teal (#0D7A74):** Reserved for hover states and secondary action depths, ensuring transitions remain grounded.
- **Light Teal (#B2DFDB):** Used sparingly for soft backgrounds in light-mode contexts or as a translucent "glow" effect behind neural graphics.
- **Light Gray (#F0F4F5) & Pure White:** Used exclusively for high-readability text and subtle section dividers to maintain a crisp, clean aesthetic against the dark primary navy.

## Typography

The typography strategy pairs expressive, avant-garde headings with ultra-readable body text and technical labels.

- **Headings (Syne):** The choice of Syne, particularly in its Extra Bold (800) weight, provides a distinctive, structural look that feels both architectural and futuristic. 
- **Body (DM Sans):** DM Sans provides a low-contrast, geometric clarity that balances the intensity of the headings. A generous line height of 1.7 ensures high readability for long-form data reports or insights.
- **Technical Accents (Space Mono):** Used for metadata, labels, and code snippets. This introduces a "developer-first" feel, signaling the precision of the underlying AI.

All large display titles should utilize slight negative letter-spacing to maintain a tight, professional rhythm.

## Layout & Spacing

The layout is built on a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The system uses a strict 8px spacing scale to ensure mathematical harmony across all components.

- **Premium Breathing Room:** To maintain a high-end feel, the design prioritizes large outer margins (64px+) and generous vertical padding between sections (80px+). 
- **Content Density:** While the overall layout is spacious, internal component spacing (within cards or lists) should remain tight (12px - 24px) to signal efficiency and data density.
- **Reflow:** On mobile, large display typography scales down significantly (as defined in the tokens) to prevent word breaks, while gutters shrink to 16px to maximize screen real estate.

## Elevation & Depth

Visual hierarchy in this dark-themed system is achieved through **Tonal Layering** and **Teal Luminosity** rather than traditional heavy shadows.

- **Surface Tiers:** The base background is the Primary Navy. Elevated containers (cards, modals) should use a slightly lighter shade of navy or a 4% white overlay to create separation.
- **Teal Glow:** Interactive elements or "AI-active" states utilize a soft, 20px - 40px diffusion of Teal (#1A9E97) with 15% opacity to simulate a glowing neural node.
- **Neural Patterns:** Background depth is enhanced by ultra-low opacity (3-5%) low-poly silhouettes or dot-grid neural patterns that appear fixed as the user scrolls, creating a "parallax glass" effect.
- **Outlines:** Use 1px borders in Light Teal at 10% opacity for cards to define boundaries without breaking the dark-mode immersion.

## Shapes

The design system uses **Rounded (level 2)** corners to soften the technical edge of the typography and color palette. 

- **Standard Radius:** 0.5rem (8px) for buttons, input fields, and small cards.
- **Large Radius:** 1rem (16px) for main content containers and feature sections.
- **Pill Shapes:** Reserved exclusively for tags, chips, and status indicators (e.g., "Active AI Model") to differentiate them from actionable buttons.

This moderate roundedness ensures the UI feels modern and approachable without losing the professional "engineered" feel of a tech startup.

## Components

### Buttons
- **Primary:** Solid Accent Teal (#1A9E97) with Pure White text. Use Syne (700) for button labels to maintain the brand voice.
- **Secondary:** Outlined with Accent Teal, transparent background. Text is Accent Teal.
- **Ghost:** No background or border, Teal text. Used for less frequent actions like "Cancel."

### Cards
- Background is a step lighter than the primary navy.
- Subtle 1px Teal-tinted border (10% opacity).
- On hover, the border opacity increases to 40% and a subtle Teal "outer glow" shadow is applied.

### Input Fields
- Dark backgrounds (Primary Navy or slightly darker).
- Bottom-border only or very subtle 1px outline.
- Active state: Border becomes solid Accent Teal with a 2px thickness.
- Labels: Use Space Mono in Uppercase for a technical "terminal" feel.

### Lists & Chips
- **Lists:** Separated by low-opacity teal dividers (5%).
- **Chips:** Pill-shaped with Light Teal (#B2DFDB) backgrounds at 10% opacity and Teal (#1A9E97) text.

### Progress Indicators
- Use Accent Teal for progress bars, styled with a slight "glow" effect to represent data flow and AI processing power.