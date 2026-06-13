import * as React from "react"
import {
  RiCake3Line,
  RiShoppingBag3Line,
  RiUser3Line,
} from "@remixicon/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Visit", href: "#visit" },
]

/**
 * Sticky top navigation. Starts transparent and fades into a translucent,
 * blurred bar once the user scrolls past the hero's top edge.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 shadow-[0_8px_24px_-16px_rgba(60,43,32,0.25)] backdrop-blur-md supports-[backdrop-filter]:bg-background/55"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        {/* Logo — left */}
        <a href="#" className="flex shrink-0 items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <RiCake3Line className="size-5" />
          </span>
          <span className="font-heading text-lg leading-none font-semibold tracking-tight">
            Ceiba Bakery
          </span>
        </a>

        {/* Menu — center */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions — right */}
        <div className="flex shrink-0 items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Shopping cart"
          >
            <RiShoppingBag3Line className="size-5" />
          </Button>
          <button
            type="button"
            aria-label="Account"
            className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            <Avatar>
              <AvatarImage
                src="https://i.pravatar.cc/80?img=47"
                alt="Your account"
              />
              <AvatarFallback>
                <RiUser3Line className="size-4" />
              </AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>
    </header>
  )
}
