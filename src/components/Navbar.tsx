"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { personalInfo, navItems } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "./icons";

/**
 * Sticky navbar: desktop anchor links + mobile slide-down menu.
 * The whole bar is a client component only because of the menu state;
 * it renders the same content for both breakpoints.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        {/* Wordmark: preferred name + role in mono for a personal touch */}
        <Link
          href="#top"
          className="group flex items-baseline gap-2 font-semibold tracking-tight text-foreground"
        >
          <span className="text-lg">
            {personalInfo.preferredName}
            <span className="text-accent">.</span>
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent sm:inline">
            {personalInfo.role}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full border border-border bg-surface p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background px-5 pb-4 pt-2 sm:px-8 md:hidden"
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
