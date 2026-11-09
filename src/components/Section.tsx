import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Consistent section shell: mono index label, heading, optional lede.
 * Keeps heading order correct (h2 per section, h3 inside).
 */
export default function Section({
  id,
  index,
  label,
  title,
  lede,
  children,
}: {
  id: string;
  /** Two-digit number shown in the mono eyebrow, e.g. "01". */
  index: string;
  label: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-16 sm:px-8 md:py-24"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          <span aria-hidden="true">{index}</span>
          <span className="mx-2 text-border" aria-hidden="true">
            /
          </span>
          {label}
        </p>
        <h2
          id={`${id}-heading`}
          className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {title}
        </h2>
        {lede ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lede}
          </p>
        ) : null}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
