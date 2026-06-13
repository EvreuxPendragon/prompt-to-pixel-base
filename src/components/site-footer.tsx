import {
  RiCake3Line,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiPinterestLine,
} from "@remixicon/react"

const FOOTER_LINKS = [
  {
    title: "Bakery",
    links: ["Menu", "Daily specials", "Custom cakes", "Catering"],
  },
  {
    title: "Visit",
    links: ["Find us", "Hours", "Reservations", "Gift cards"],
  },
  {
    title: "About",
    links: ["Our story", "Careers", "Press", "Contact"],
  },
]

const SOCIALS = [
  { label: "Instagram", icon: RiInstagramLine },
  { label: "Facebook", icon: RiFacebookCircleLine },
  { label: "Pinterest", icon: RiPinterestLine },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <RiCake3Line className="size-5" />
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight">
                Ceiba Bakery
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Honest bread and sweet things, baked by hand in small batches
              every single morning.
            </p>
            <div className="mt-2 flex items-center gap-2">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground uppercase">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Ceiba Bakery. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
