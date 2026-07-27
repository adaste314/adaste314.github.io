# Design

Visual system for adamstepansky.com. Register: brand (portfolio). Voice: precise, engineered, quietly confident — an engineer's index, not a brochure.

## Theme

Dark. The site reads like a well-lit instrument panel: near-black green ground, hairline structure, green used as a signal color rather than a glow; professional, not terminal-themed. No glassmorphism, no ambient pulsing.

## Color

Identity palette (preserved from v1 — do not drift):

| Token | Value | Role |
|---|---|---|
| `--bg` | `#06140f` | Page ground (green-black) |
| `--bg-raised` | `#0a1e16` | Raised panels, sticky nav fill |
| `--line` | `rgba(134, 239, 172, 0.16)` | Hairline rules, borders, grid |
| `--line-strong` | `rgba(134, 239, 172, 0.38)` | Hover/active borders |
| `--ink` | `#e7f6ed` | Headings, primary text |
| `--ink-body` | `#c9e4d4` | Body text (≥4.5:1 on bg) |
| `--ink-muted` | `#8fb8a1` | Metadata, captions (large/mono only) |
| `--green` | `#22c55e` | Primary accent, status markers |
| `--green-deep` | `#16a34a` | Filled buttons |
| `--green-bright` | `#86efac` | Mono labels, links, highlights |

Strategy: Restrained-committed. Green is a *signal* (status dots, labels, one filled CTA); the surface itself stays dark and structural.

## Typography

- **Single family: Archivo** (Google Fonts) with committed weight contrast — 800 display, 700 headings, 600 labels, 400 body. No monospace: terminal styling was dialed out for a professional read (user decision, 2026-07).
- Body 16–17px, line-height 1.65 (light-on-dark needs air). Max measure 68ch. Display tracking −0.025em.
- Scale: fluid clamp, ratio ≥1.25. Hero name clamp(2.6rem, 7vw, 5rem).

## Layout

- Single column, max-width 1060px, left-aligned content (no centered-everything).
- Structure carried by horizontal hairline rules between sections and a two-column grid: section heading column + content column. Collapses to stacked on mobile.
- **Projects are a manifest, not a card grid**: full-width rows with title, description, tech metadata, and a live/status column, separated by hairlines. Hover = row lifts tint + arrow slide.
- Sharp geometry: border-radius 0–6px max. No pill buttons except small status chips.

## Components

- **Status chip**: 12.5px/600, dot + text (`● Live`, `● In progress`), hairline border, no fill glow.
- **Primary CTA**: filled `--green-deep`, ink white, radius 4px. Secondary: hairline border, `--green-bright` text.
- **Skill tokens**: inline text separated by `·` — not pill clouds.
- **Nav**: sticky, hairline bottom border, blur backdrop at 0.85 fill.

## Motion

One orchestrated hero entrance (staggered rise+fade of name lines, ~600ms, ease-out-quint). Project rows: single reveal on first scroll into view (no un-reveal). Hovers: 150–200ms transform/color. Everything gated behind `prefers-reduced-motion: reduce` → instant/opacity-only. Nothing loops or pulses.

## Bans (project-specific)

Glassy cards, blurred photo glows, pulsing keyframes, gradient text, identical card grids, per-section uppercase eyebrows, side-stripe borders.
