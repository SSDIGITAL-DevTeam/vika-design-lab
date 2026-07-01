# Plan: V3 pages.tsx implementation

File to create: components/v3/pages.tsx
File to update: components/v3/index.ts

## Summary
Create v3-styled inner pages (About, Services, Portfolio, Contact) and update the registry.

## Key styling patterns from v3 homepage:
- Dark bg-paper (#1A1714) / bg-paper-2 (#221E1A) backgrounds
- GoldLabel: `font-mono text-[10px] uppercase tracking-[0.25em] text-yellow`
- Headings: `font-display text-2xl font-semibold tracking-wide text-ink`
- Body: `text-sm leading-relaxed text-muted`
- Numbered items: `font-mono text-lg font-bold tracking-wider text-yellow/70`
- Gold CTA section: full `bg-yellow` with black text + `border-2 border-black` buttons
- Page hero: full-bleed image + gradient overlay (from-black/40 via-black/55 to-black/78)
