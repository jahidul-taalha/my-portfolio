"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

/**
 * Light/dark toggle. The initial theme is applied pre-paint by the inline
 * script in layout.tsx (no flash); this button flips and persists it.
 *
 * Current theme is read from <html class> via useSyncExternalStore so the
 * DOM stays the single source of truth — no setState-in-effect.
 */

function subscribe(callback: () => void) {
  // Re-render whenever the html class attribute changes (our own toggle
  // or an external script).
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

// During SSR there is no DOM; hydration then syncs to the real value.
function getServerSnapshot() {
  return "light" as const;
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  function toggle() {
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable (private mode) — theme still applies this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      // Label reflects the action, not the current state.
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full border border-border bg-surface p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
