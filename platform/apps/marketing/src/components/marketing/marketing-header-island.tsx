import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { animate } from "motion";

export function MarketingHeaderIsland() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const hero = document.getElementById("hero");

    if (!header || !hero) return;

    let hidden = false;
    let solid = false;
    let rafId = 0;

    const setHidden = (next: boolean) => {
      if (hidden === next) return;
      hidden = next;

      animate(
        header,
        { y: hidden ? "-110%" : "0%" },
        { duration: 0.28, easing: "ease-out" },
      );
    };

    const setSolidState = (next: boolean) => {
      if (solid === next) return;
      solid = next;
      setIsSolid(next);
    };

    const updateHeroState = (scroll: number) => {
      const threshold = hero.offsetTop + hero.offsetHeight - header.offsetHeight;
      setSolidState(scroll > threshold);
    };

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1,
    });

    lenis.on("scroll", ({ scroll, direction }) => {
      updateHeroState(scroll);

      if (scroll <= 8) {
        setHidden(false);
        return;
      }

      if (direction === 1) {
        setHidden(true);
      }

      if (direction === -1) {
        setHidden(false);
      }
    });

    const onResize = () => updateHeroState(window.scrollY);
    window.addEventListener("resize", onResize);

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    updateHeroState(window.scrollY);
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      lenis.destroy();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-40 border-b border-fuchsia-200 ${
        isSolid ? "bg-neutral-50" : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-5xl border-x border-fuchsia-200/70 px-4 sm:px-6">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-extrabold text-fuchsia-700">
              <img src="/logo.svg" alt="Form + Function logo" className="h-10 w-auto" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-fuchsia-900">Form + Function</span>
          </div>

          <nav className="ml-auto hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a className="transition hover:text-fuchsia-700" href="#services">
              Solution
            </a>
            <a className="transition hover:text-fuchsia-700" href="#platform">
              Platform
            </a>
            <a className="transition hover:text-fuchsia-700" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-fuchsia-700" href="#resources">
              Resources
            </a>
          </nav>

          <div className="ml-4 flex items-center gap-2">
            <button type="button" className="rounded-md border border-neutral-700/30 bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
              Log In
            </button>
            <button type="button" className="rounded-md border border-fuchsia-700 bg-fuchsia-600 px-3 py-1 text-xs font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
