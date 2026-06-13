---
version: alpha
name: Ceiba Bakery
description: >-
  Warm, cozy, minimalist bakery theme inspired by Broma Bakery — cream
  backgrounds, deep-burgundy brand color, soft pink accents, and cocoa-brown
  text. Editorial serif headlines over a clean humanist sans.
colors:
  background: "#FBF9F5"
  foreground: "#302B28"
  card: "#FFFEFA"
  card-foreground: "#302B28"
  primary: "#6D0019"
  primary-foreground: "#FFFEFA"
  secondary: "#FFD8DB"
  secondary-foreground: "#620202"
  muted: "#F4F1EB"
  muted-foreground: "#7A716A"
  accent: "#FFC3C8"
  accent-foreground: "#620202"
  destructive: "#A60823"
  border: "#EBE5DC"
  input: "#EBE5DC"
  ring: "#6D0019"
typography:
  heading-1:
    fontFamily: "Lora Variable, serif"
    fontSize: "60px"
    fontWeight: 600
    lineHeight: "1.1"
  heading-2:
    fontFamily: "Lora Variable, serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "1.2"
  heading-3:
    fontFamily: "Lora Variable, serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "1.3"
  body:
    fontFamily: "Nunito Sans Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.625"
  caption:
    fontFamily: "Nunito Sans Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.5"
  eyebrow:
    fontFamily: "Nunito Sans Variable, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.15em"
    textTransform: "uppercase"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  "2xl": "80px"
rounded:
  sm: "8px"
  md: "12px"
  lg: "14px"
  xl: "20px"
  full: "9999px"
elevation:
  sm: "0 1px 2px rgba(48,43,40,0.06)"
  md: "0 8px 24px -16px rgba(48,43,40,0.25)"
  lg: "0 24px 60px -30px rgba(48,43,40,0.45)"
components:
  button:
    background: "{colors.primary}"
    foreground: "{colors.primary-foreground}"
    radius: "{rounded.full}"
  button-secondary:
    background: "{colors.secondary}"
    foreground: "{colors.secondary-foreground}"
    radius: "{rounded.full}"
  card:
    background: "{colors.card}"
    border: "{colors.border}"
    radius: "{rounded.xl}"
    shadow: "{elevation.md}"
  input:
    background: "{colors.card}"
    border: "{colors.input}"
    radius: "{rounded.lg}"
    ring: "{colors.ring}"
---

# Ceiba Bakery — Design System

A warm, cozy, minimalist design language inspired by
[Broma Bakery](https://bromabakery.com/). Colors are derived directly from
Broma's stylesheet: cream page backgrounds, a deep-burgundy brand color, soft
blush pinks for accents and buttons, and cocoa-brown text. The feeling is a
sunlit neighborhood kitchen — unhurried, hand-made, and inviting.

> Implementation note: tokens above are the source of truth. They are mapped to
> CSS custom properties in `src/index.css` (`:root` for light, `.dark` for dark)
> as OKLCH values and exposed to Tailwind v4 via `@theme inline`. Use semantic
> classes (`bg-background`, `text-foreground`, `bg-primary`, `bg-secondary`,
> `text-muted-foreground`, `border-border`) so light/dark stay in sync.

## 1. Overview — Brand & Style

- **Aesthetic**: warm, cozy, minimalist; editorial-magazine voice.
- **Atmosphere**: cream canvas, a single confident burgundy, blush-pink warmth,
  generous whitespace. Photography supplies the saturation; the UI stays calm.
- **Voice**: personal and inviting ("Baked fresh every morning", "Pull up a
  chair"). Confident, never corporate.
- **Differentiator**: the burgundy-and-blush pairing on cream, with pill-shaped
  buttons and serif headlines, reads unmistakably as an artisan bakery rather
  than a generic SaaS page.

## 2. Colors

Derived from Broma's `main.css`. HEX is the canonical token value; the OKLCH
column lists the value used in `src/index.css`.

### Light

| Token                  | Role                          | HEX       | OKLCH                      |
| ---------------------- | ----------------------------- | --------- | -------------------------- |
| `background`           | Page — warm cream             | `#FBF9F5` | `oklch(0.983 0.006 85)`    |
| `foreground`           | Text — cocoa brown            | `#302B28` | `oklch(0.293 0.009 53)`    |
| `card` / `popover`     | Raised surface — ivory        | `#FFFEFA` | `oklch(0.997 0.005 95)`    |
| `primary`              | Brand — deep burgundy         | `#6D0019` | `oklch(0.339 0.136 19)`    |
| `primary-foreground`   | Text on primary — cream       | `#FFFEFA` | `oklch(0.985 0.008 90)`    |
| `secondary`            | Soft pink fill (buttons)      | `#FFD8DB` | `oklch(0.916 0.044 13)`    |
| `secondary-foreground` | Text on pink — dark red       | `#620202` | `oklch(0.313 0.126 29)`    |
| `muted`                | Subtle fill — warm beige      | `#F4F1EB` | `oklch(0.962 0.007 84)`    |
| `muted-foreground`     | Secondary text — taupe        | `#7A716A` | `oklch(0.52 0.012 45)`     |
| `accent`               | Highlight — pale pink         | `#FFC3C8` | `oklch(0.872 0.069 13)`    |
| `accent-foreground`    | Text on accent — dark red     | `#620202` | `oklch(0.313 0.126 29)`    |
| `destructive`          | Errors — bright crimson       | `#A60823` | `oklch(0.461 0.182 22)`    |
| `border` / `input`     | Hairline — warm linen         | `#EBE5DC` | `oklch(0.915 0.008 60)`    |
| `ring`                 | Focus — burgundy              | `#6D0019` | `oklch(0.339 0.136 19)`    |

### Dark ("evening bakery")

Broma ships no dark mode; this is a brand-consistent cocoa-burgundy shell with a
lifted rose so the brand color still reads on dark.

| Token                  | OKLCH                      |
| ---------------------- | -------------------------- |
| `background`           | `oklch(0.20 0.014 28)`     |
| `foreground`           | `oklch(0.95 0.008 85)`     |
| `card` / `popover`     | `oklch(0.24 0.016 28)`     |
| `primary`              | `oklch(0.58 0.16 18)`      |
| `primary-foreground`   | `oklch(0.97 0.01 90)`      |
| `secondary`            | `oklch(0.30 0.04 14)`      |
| `secondary-foreground` | `oklch(0.90 0.04 13)`      |
| `muted` / `muted-fg`   | `oklch(0.27 0.016 28)` / `oklch(0.72 0.015 50)` |
| `accent` / `accent-fg` | `oklch(0.34 0.05 13)` / `oklch(0.92 0.03 13)` |
| `border` / `input`     | `oklch(1 0 0 / 12%)` / `oklch(1 0 0 / 15%)` |

## 3. Typography

Typography is unchanged from the project setup — a literary serif for display
paired with a clean humanist sans for everything else.

| Role        | Family                    | Size  | Weight | Notes                       |
| ----------- | ------------------------- | ----- | ------ | --------------------------- |
| `heading-1` | Lora Variable (serif)     | 60px  | 600    | `leading-[1.1]`, balanced.  |
| `heading-2` | Lora Variable (serif)     | 36px  | 600    | Section titles.             |
| `heading-3` | Lora Variable (serif)     | 22px  | 600    | Card titles.                |
| `body`      | Nunito Sans Variable      | 16px  | 400    | `leading-relaxed` (1.625).  |
| `caption`   | Nunito Sans Variable      | 13px  | 400    | `muted-foreground`.         |
| `eyebrow`   | Nunito Sans Variable      | 12px  | 600    | uppercase, `tracking-[0.15em]`. |

- Display headings may scale fluidly: `clamp(2.5rem, 5vw, 4rem)`.
- Fonts load via `@fontsource-variable/lora` and `@fontsource-variable/nunito-sans`;
  mapped to `--font-heading` and `--font-sans`. Apply `font-heading` on headings.
- Signature pattern: a small uppercase **eyebrow** above a serif **heading**.

## 4. Layout & Spacing

- **Spacing scale** (4px base): `xs 4` · `sm 8` · `md 16` · `lg 24` · `xl 48` · `2xl 80`.
- **Section rhythm**: large vertical breathing room (`py-20`+ / `2xl`) for an
  airy, unhurried feel.
- **Container**: max content width `72rem` (1152px), centered; side padding
  `px-6` (mobile) → `px-8` (desktop).
- **Grids**: card grids in 2–4 columns with even gutters (`gap-6`/`gap-8`) and
  consistent image aspect ratios.

## 5. Elevation & Depth

Soft, warm-tinted shadows only — never harsh high-contrast drops.

| Token | Value                                   | Use                       |
| ----- | --------------------------------------- | ------------------------- |
| `sm`  | `0 1px 2px rgba(48,43,40,0.06)`         | Inputs, subtle separation |
| `md`  | `0 8px 24px -16px rgba(48,43,40,0.25)`  | Cards, sticky header      |
| `lg`  | `0 24px 60px -30px rgba(48,43,40,0.45)` | Hero imagery, modals      |

Depth is also built with layered transparencies: the sticky header uses a
translucent `bg-background/70` + `backdrop-blur-md`; the hero sits over a soft
radial blush glow built from `--accent`.

## 6. Shapes

- **Radius token** `--radius: 0.875rem` (14px); scale: `sm 8` · `md 12` ·
  `lg 14` · `xl 20` · `full 9999`.
- **Buttons**: fully rounded **pills** (`rounded-full`), echoing Broma's ~25px
  pill buttons. Sentence/title case, `font-semibold` — not uppercase.
- **Cards / inputs**: soft `rounded-lg`/`rounded-xl` for a ceramic, tactile feel.
- **Borders**: 1px hairline in the warm `border` color — never heavy.

## 7. Components

- **Button — primary**: burgundy fill, cream text, pill; subtle hover darken and
  1px active lift. The main CTA on any view.
- **Button — secondary**: soft-pink fill, dark-red text, pill. Broma's signature
  button; used as the companion CTA (e.g. hero "View our menu").
- **Button — outline / ghost**: transparent with warm border (outline) or bare
  (ghost) for low-emphasis and icon actions (cart, avatar).
- **Sticky header**: logo left, centered nav, cart + avatar right. Transparent
  over the hero, transitioning to translucent blurred bar (`bg-background/70`,
  `backdrop-blur-md`, hairline border, `elevation.md`) once scrolled.
- **Card**: ivory surface on cream, hairline border, `elevation.md`, image at
  top with rounded corners, serif title, muted caption.
- **Input**: ivory fill, warm linen border, burgundy focus ring.
- **Eyebrow + heading**: small uppercase tracked label above a serif headline —
  the standard section header.
- **Imagery**: bright, naturally-lit food photography, consistent aspect ratios,
  minimal borders.

## 8. Do's and Don'ts

**Do**
- Keep cream/ivory dominant and let one burgundy CTA lead each view.
- Use soft pink for warmth and companion actions, sparingly.
- Pair an uppercase eyebrow with a Lora serif headline for section intros.
- Use semantic tokens so dark mode and future screens stay consistent.
- Keep motion gentle and short (150–250ms ease-out; 1–2px hover lifts).

**Don't**
- Don't use pure white (`#FFFFFF`) or pure black — they feel clinical here.
- Don't introduce cool grays or off-brand accent colors; every neutral leans warm.
- Don't make buttons square or uppercase — they should read as soft pills.
- Don't stack multiple competing CTAs of equal weight in one view.
- Don't use heavy, high-contrast shadows or flashy/bouncy animation.
