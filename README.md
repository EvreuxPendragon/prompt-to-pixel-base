# From Prompt to Pixel — Base Project

This is the base project for the **"From Prompt to Pixel"** workshop by
**Christian Rivera**, made for Google's **Build with AI** event at
**GDG San Pedro Sula**.

It ships a small, warm-and-cozy bakery landing page ("Ceiba Bakery") — a sticky
translucent navigation, a hero section, and a footer — that we use as a starting
point to build more advanced screens during the workshop. The visual language is
documented in [`design.md`](./design.md), following Google Stitch's open
`DESIGN.md` format.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and build tooling
- **Tailwind CSS v4** — styling
- **shadcn/ui** — component primitives (built on **Radix UI**)
- **RemixIcon** (`@remixicon/react`) — icons
- **Lora** + **Nunito Sans** (Fontsource variable fonts) — typography
- **pnpm** — package manager

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

### Install dependencies

```bash
pnpm install
```

### Run the development environment

```bash
pnpm dev
```

The app runs at the URL Vite prints (default `http://localhost:5173`).
Press `d` to toggle dark mode.

### Build for production

```bash
pnpm build
```

The optimized output is generated in the `dist/` directory. To preview the
production build locally:

```bash
pnpm preview
```

## Other Scripts

```bash
pnpm lint        # run ESLint
pnpm typecheck   # type-check with the TypeScript compiler
pnpm format      # format files with Prettier
```

## Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add <component>
```

Components are placed in `src/components/ui` and can be imported via the `@` alias:

```tsx
import { Button } from "@/components/ui/button"
```
