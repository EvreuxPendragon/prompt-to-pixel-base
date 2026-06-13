import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SiteFooter } from "@/components/site-footer"

export function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
