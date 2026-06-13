import { RiArrowRightLine, RiLeafLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft warm glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 70% 20%, color-mix(in oklch, var(--accent) 70%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
            <RiLeafLine className="size-3.5 text-primary" />
            Baked fresh every morning
          </span>

          <h1 className="font-heading text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl md:text-6xl">
            A little corner of warmth &amp; fresh bread
          </h1>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Ceiba Bakery is a small neighborhood kitchen where slow mornings,
            good butter, and the smell of cinnamon are always on the menu. Pull
            up a chair and stay a while.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg" data-icon="inline-end">
              Order online
              <RiArrowRightLine />
            </Button>
            <Button variant="secondary" size="lg">
              View our menu
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-none border border-border shadow-[0_24px_60px_-30px_rgba(60,43,32,0.45)]">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
              alt="Freshly baked bread and pastries on a wooden table"
              className="size-full object-cover"
            />
          </div>
          {/* Little floating tag */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-none border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="font-heading text-2xl font-semibold text-primary">
              7am
            </p>
            <p className="text-xs text-muted-foreground">Doors open daily</p>
          </div>
        </div>
      </div>
    </section>
  )
}
