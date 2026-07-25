"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reveal-on-scroll: fade/slide elements in as they enter the viewport, and
// back out when they leave, so the animation replays every time you scroll
// past a section instead of firing once and staying "seen" forever.
// Re-runs on every route change since the App Router keeps this component
// mounted across client-side navigations instead of remounting it.
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    if (revealEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
