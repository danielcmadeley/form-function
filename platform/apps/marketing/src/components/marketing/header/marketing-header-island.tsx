import { useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import { animate } from "motion"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/solution", label: "Solution" },
  { href: "/platform", label: "Platform" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
]

export function MarketingHeaderIsland() {
  const headerRef = useRef<HTMLElement | null>(null)
  const [isSolid, setIsSolid] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const header = headerRef.current
    const hero = document.getElementById("hero")

    if (!header || !hero) return

    let hidden = false
    let solid = false
    let rafId = 0

    const setHidden = (next: boolean) => {
      if (hidden === next) return
      hidden = next

      animate(
        header,
        { y: hidden ? "-110%" : "0%" },
        { duration: 0.28, easing: "ease-out" }
      )
    }

    const setSolidState = (next: boolean) => {
      if (solid === next) return
      solid = next
      setIsSolid(next)
    }

    const updateHeroState = (scroll: number) => {
      const threshold = hero.offsetTop + hero.offsetHeight - header.offsetHeight
      setSolidState(scroll > threshold)
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1,
    })

    lenis.on("scroll", ({ scroll, direction }) => {
      updateHeroState(scroll)

      if (scroll <= 8) {
        setHidden(false)
        return
      }

      if (direction === 1) {
        setHidden(true)
      }

      if (direction === -1) {
        setHidden(false)
      }
    })

    const onResize = () => updateHeroState(window.scrollY)
    window.addEventListener("resize", onResize)

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    updateHeroState(window.scrollY)
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", onResize)
      lenis.destroy()
    }
  }, [])

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-40 border-b border-fuchsia-200 transition-colors ${
          isSolid ? "bg-neutral-50" : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[calc(100%-100px)] border-x border-fuchsia-200/70 px-5 xl:max-w-5xl">
          <div className="mx-auto flex h-[58px] w-full items-center">
            <a href="/" className="flex items-center gap-3">
              <span className="text-xl font-extrabold text-fuchsia-700">
                <img src="/logo.svg" alt="Form + Function logo" className="h-10 w-auto" />
              </span>
              <span className="text-base font-semibold tracking-wide text-fuchsia-900">Form + Function</span>
            </a>

            <nav className="ml-auto hidden items-center gap-6 text-sm text-neutral-700 xl:flex">
              {navLinks.map((link) => (
                <a key={link.href} className="transition hover:text-fuchsia-700" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="ml-4 hidden items-center gap-2 xl:flex">
              <Button
                type="button"
                variant="outline"
                className="h-8 rounded-md border-neutral-700/30 bg-neutral-900 px-3 text-xs font-semibold text-white hover:bg-neutral-800"
              >
                Log In
              </Button>
              <Button
                type="button"
                className="h-8 rounded-md border border-fuchsia-700 bg-fuchsia-600 px-3 text-xs font-semibold text-white hover:bg-fuchsia-500"
              >
                Sign Up
              </Button>
            </div>

            <SheetTrigger
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="ml-auto h-10 w-10 rounded-md text-fuchsia-900 xl:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </SheetTrigger>
          </div>
        </div>
      </header>

      <SheetContent
        side="right"
        className="w-[88vw] max-w-sm border-l border-fuchsia-200/70 bg-neutral-50 px-6 py-6"
      >
        <SheetHeader className="p-0">
          <SheetTitle className="text-base font-semibold text-fuchsia-900">Navigation</SheetTitle>
          <SheetDescription className="text-sm text-fuchsia-900/70">
            Explore Form + Function
          </SheetDescription>
        </SheetHeader>

        <nav className="mt-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <SheetClose
              key={link.href}
              render={
                <Button
                  type="button"
                  variant="ghost"
                  className="rounded-md border border-fuchsia-200 bg-white px-4 py-3 text-sm font-medium text-fuchsia-900 transition hover:bg-fuchsia-50"
                  onClick={() => {
                    window.location.assign(link.href)
                  }}
                />
              }
            >
              {link.label}
            </SheetClose>
          ))}
        </nav>

        <div className="mt-6 grid gap-2">
          <Button
            type="button"
            variant="outline"
            className="h-10 rounded-md border-neutral-700/30 bg-neutral-900 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Log In
          </Button>
          <Button
            type="button"
            className="h-10 rounded-md border border-fuchsia-700 bg-fuchsia-600 text-sm font-semibold text-white hover:bg-fuchsia-500"
          >
            Sign Up
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
