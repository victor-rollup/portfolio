---
name: Obsidian Engineering
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#89ceff'
  on-secondary: '#00344d'
  secondary-container: '#00a2e6'
  on-secondary-container: '#00344e'
  tertiary: '#56e5a9'
  on-tertiary: '#003824'
  tertiary-container: '#30c88f'
  on-tertiary-container: '#004e34'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-md: 3rem
  margin-lg: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the craft, precision, and architectural discipline of high-tier frontend systems engineering. Designed for an elite technical portfolio, it balances high-density information architecture with executive-level aesthetic polish. The visual language rejects gratuitous gimmicks, opting for an engineered atmosphere that merges developer utility with modern product elegance.

The aesthetic fuses technical minimalism with refined glassmorphism and subtle IDE/terminal cues:
- **Atmospheric Depth:** Deep-space dark mode with layered charcoal substrates, evoking high-performance development environments and modern infrastructure dashboards.
- **Engineered Restraint:** Hairline geometric dividers, sub-pixel grid lines, micro-monospaced indicators, and structural clarity.
- **Target Audience:** Engineering VPs, CTOs, technical founders, and design systems architects looking for top-of-market frontend leadership and craftsmanship.
- **Emotional Response:** Authoritative, high-clarity, meticulously composed, dependable, and forward-looking.

## Colors

The palette is engineered for a dark-first environment, utilizing tiered slate neutrals to structure depth while reserving high-vibrancy spectral tones for state signaling, code synthetics, and interactive anchors.

### Base Surface Architecture
- **Canvas Base:** `#0b0f19` — Foundational background for the main viewport.
- **Surface Elevation 1 (Card/Section):** `#0f172a` — Structural card layers and segmented layouts.
- **Surface Elevation 2 (Elevated Panels):** `#1e293b` — Floating controls, code windows, and popovers.
- **Surface Elevation 3 (Interactive Active):** `#334155` — Hover fills, selected items, and pill bases.

### Typography & Content Neutrals
- **Text Primary:** `#f8fafc` — Dominant headers, active labels, high-visibility data points.
- **Text Secondary / Muted:** `#94a3b8` — Body text, descriptive summaries, secondary labels.
- **Text Tertiary / Ghost:** `#64748b` — Micro labels, metadata, timestamps, line numbers.

### Accents & Semantic Signals
- **Electric Cyan (`#38bdf8` / `#0ea5e9`):** Represents interactive focus, primary metrics, system telemetry, and active navigation.
- **Emerald Green (`#10b981`):** Represents operational stability, production deployment statuses, git merges, and performance scores.
- **Hairline Structural Borders:** `rgba(30, 41, 59, 0.8)` and `rgba(51, 65, 85, 0.5)` for crisp division without visual clutter.

## Typography

The typographic hierarchy implements a high-clarity dual-font architecture:
- **Inter** handles primary structural communication, headings, and long-form technical narratives with optical kerning and tightened negative tracking on display scales.
- **JetBrains Mono** governs functional technical details, architecture badges, execution times, metrics, terminal outputs, and system metadata.

### Implementation Directives
- **Micro-labels and Overlines:** Always set in `label-mono`, rendered in uppercase with positive letter spacing (`0.06em`) to establish crisp section markers.
- **Numeric Figures:** Numbers in metrics and telemetry must render with tabular figures (`font-variant-numeric: tabular-nums`) to prevent layout shift during updates or count-up states.
- **Hierarchy Anchoring:** Never pair two monospaced styles directly vertically; balance monospaced contextual tags against primary sans-serif display text.

## Layout & Spacing

The layout is grounded in a 12-column responsive fluid grid with maximum content containment set at `1280px` for wide displays, keeping visual density balanced without spanning out of legible bounds.

### Responsive Breakpoints & Adapters
- **Desktop (1024px+):** 12 columns, `gutter-lg` (2rem), `margin-lg` (5rem). High-density modular cards, multi-column code comparisons, and dual-pane architecture diagrams.
- **Tablet (640px - 1023px):** 8 columns, `gutter` (1.5rem), `margin-md` (3rem). Metrics grids fold into 2-up configurations, complex split layouts reflow into stacked sequences.
- **Mobile (< 640px):** 4 columns, `gutter-sm` (1rem), `margin` (1.5rem). Horizontal scroll carousels for tech stack badges and single-column project cards.

### Spacing Principles
- Vertical rhythm strictly adheres to multiples of 4px and 8px.
- Section boundaries employ high breathing room (`space-xl` and above) to offset the dense internal composition of terminal screens and telemetry cards.

## Elevation & Depth

Visual hierarchy uses tonal surface layering combined with optical glassmorphism and laser-crisp hairline borders. Traditional drop shadows are replaced by localized ambient radiosity and edge refraction.

### Depth Hierarchy
- **Level 0 (Base Canvas):** `#0b0f19` pure opaque plane.
- **Level 1 (Card & Section Backdrops):** Background set to `rgba(15, 23, 42, 0.75)` with `backdrop-filter: blur(12px)` and a continuous hairline border of `1px solid rgba(51, 65, 85, 0.45)`.
- **Level 2 (Active Panels & Modals):** Background set to `rgba(30, 41, 59, 0.85)` with `backdrop-filter: blur(16px)` and border `1px solid rgba(56, 189, 248, 0.25)`.
- **Level 3 (Interactive Glows & Overlays):** Ambient cyan box glow: `0px 8px 32px -4px rgba(14, 165, 233, 0.12)`. Applied strictly on focused controls, active code tabs, and highlighted performance badges.

### Border Rules
Avoid pure white or thick borders. Borders must remain at `1px` thickness, leveraging translucent slate tones (`rgba(148, 163, 184, 0.1)`) to preserve clean lines without distracting from content.

## Shapes

The design system uses a sharp-to-soft curvature strategy (`roundedness: 1`), conveying engineered precision. Sharp corners feel utilitarian and severe, while oversized radii feel too playful; a controlled micro-curve provides an architectural feel.

### Curvature Tokens
- **Standard UI Elements & Inputs:** `0.25rem` (4px).
- **Cards, Code Containers, Terminals:** `rounded-lg` (`0.5rem` / 8px).
- **Overlays, Drawers, Flyout Menus:** `rounded-xl` (`0.75rem` / 12px).
- **Status Badges & Architecture Chips:** Strictly pill-radius or `4px` depending on contextual density (pills for status dots, micro-radii for tech spec labels).

## Components

### Buttons
- **Primary:** Background `linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)`, text `#0b0f19` (high-contrast deep charcoal, bold weight), border `1px solid rgba(255, 255, 255, 0.2)`. Hover: ambient cyan glow `0 0 16px rgba(56, 189, 248, 0.4)`.
- **Secondary / Ghost:** Background `rgba(15, 23, 42, 0.6)`, text `#f8fafc`, border `1px solid rgba(51, 65, 85, 0.7)`. Hover: border `#38bdf8`, background `rgba(30, 41, 59, 0.8)`.
- **Icon / Action:** `32x32px` square with `4px` radius, hairline border, mono icon in center.

### Tech Stack Chips & Badges
- **Architecture Badges:** Monospaced typography (`code-sm`), padding `0.25rem 0.625rem`, background `rgba(30, 41, 59, 0.5)`, text `#94a3b8`, border `1px solid rgba(51, 65, 85, 0.4)`.
- **Status Badges:** Integrates a pulsing live dot indicator (`6px`). Emerald `#10b981` indicates production deployments or zero-downtime achievements; Cyan indicates active experimental builds.

### Developer Metric Cards
- Surface `rgba(15, 23, 42, 0.65)`, backdrop blur `12px`, hairline perimeter.
- Top label: `label-mono` in uppercase muted slate (`#64748b`).
- Value: `headline-lg` in `#f8fafc` using tabular figures, accompanied by a micro-subtext highlighting benchmarking gains (e.g., `-42% bundle size`).
- Corner adornment: Sub-pixel crosshair markings (`+`) in `rgba(148, 163, 184, 0.2)` at card intersections to evoke blueprint and CAD precision.

### Terminal & Code Blocks
- Window chrome features three monochromatic or muted dots (`#334155`) with the active filename centered in `code-sm`.
- Syntax styling uses `#38bdf8` (methods/keys), `#10b981` (strings/values), and `#94a3b8` (operators/syntax).
- Copy-to-clipboard trigger docks in the top-right corner with instant visual feedback via an emerald checkmark.

### Input Fields & Controls
- **Text Inputs:** Background `#0b0f19`, border `1px solid rgba(51, 65, 85, 0.6)`, text `#f8fafc`, placeholder `#64748b`. Focus ring: `1px solid #38bdf8` with `0 0 0 1px #38bdf8`.
- **Checkboxes & Radios:** Sharp technical boxes (`2px` border radius), `#0f172a` base, `#38bdf8` fill on checked state with micro-check or centered dot.

### Lists & Activity Feeds
- Git-commit style timeline with vertical hairline connection rail (`rgba(51, 65, 85, 0.5)`).
- Nodes represented by hollow or filled `8px` hex or circular dots color-coded by milestone impact.