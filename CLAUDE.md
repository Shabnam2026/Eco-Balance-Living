# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

EcoBalance Cityscapes — a single-page marketing site for a Malaysian vertical-greenery / living-walls company. Originally scaffolded as a Google AI Studio app (see README); the AI Studio origin is why `GEMINI_API_KEY` is wired through the build even though the current UI does not call Gemini yet.

## Commands

```bash
npm install          # install deps
npm run dev          # vite dev server on 0.0.0.0:3000
npm run build        # production build to dist/
npm run preview      # serve built output
npm run lint         # tsc --noEmit (TYPE CHECK ONLY — no ESLint configured)
npm run clean        # rm -rf dist
```

No test framework is configured. `npm run lint` is strictly a TypeScript check — do not assume it catches style/unused-var issues.

## Architecture

**Single-file UI.** The entire page lives in `src/App.tsx` (~600 lines). It is one default-exported `App` component rendering the full marketing page top-to-bottom, with small private sub-components (`ValueCard`, `TrustLogo`, `ProjectCard`, `ProcessStep`, `FormInput`) defined below it in the same file. There is no routing, no state management library, no `components/` directory — when adding a new section, extend `App.tsx` and add a sub-component at the bottom following the existing pattern. Only split into separate files once the file becomes genuinely unwieldy.

**Styling — Tailwind v4 with a custom design-token theme.** Tailwind v4 is installed via `@tailwindcss/vite` (not PostCSS) and configured entirely in `src/index.css` using the `@theme` directive. The theme defines a Material-Design-style token palette: `surface`, `on-surface`, `primary`, `primary-container`, `on-primary-container`, `inverse-surface`, `surface-container-low`, etc. These tokens are what you see throughout the JSX as utilities like `bg-primary-container` and `text-on-surface`. **Prefer these token utilities over arbitrary hex values** — the JSX mixes both today, but new code should use tokens so the palette stays editable from one place. Custom utilities (`hero-overlay`, `glass-nav`, `btn-primary`, `btn-submit-hover`, `form-input-focus`) are declared in the `@layer utilities` block of `index.css`.

**Animation.** Uses the `motion` package (Framer Motion's successor) imported as `motion/react`, not `framer-motion`. Entrance animations use `initial`/`animate` props; the CTA modal uses `AnimatePresence` with a `motion.div` wrapper gated on `isModalOpen`.

**Path alias.** `@/*` resolves to the **project root** (not `src/`) — configured in both `vite.config.ts` and `tsconfig.json`. Keep the two in sync when changing it.

**Env / Gemini wiring.** `vite.config.ts` loads `GEMINI_API_KEY` from `.env.local` (gitignored; see `.env.example`) and injects it at build time via `define: { 'process.env.GEMINI_API_KEY': ... }`. Because this goes through `define`, the key is inlined into the client bundle — treat it as public when adding Gemini calls, and never put a real server-side secret behind this variable.

**HMR escape hatch.** `vite.config.ts` disables HMR when `DISABLE_HMR=true`. This exists because the AI Studio agent environment edits files rapidly and HMR causes flicker. Do not remove this toggle.

**Unused-but-installed deps.** `express`, `@types/express`, `dotenv`, and `tsx` are in `package.json` but the repo has no server code. They are leftovers from the AI Studio template — do not build server features around them without confirming the user actually wants a backend.
