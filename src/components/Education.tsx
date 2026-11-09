import { education } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

/**
 * Education — degree and institution only. No dates or CGPA are shown
 * because none were provided.
 */
export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="Education"
      title="Education"
    >
      <Reveal>
        <article className="flex items-start gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          {/* Graduation-cap-style monogram instead of an invented logo */}
          <div
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft font-mono text-lg font-bold text-accent"
          >
            {education.institution.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">
              {education.degree}
            </h3>
            <p className="mt-1 text-base text-muted-foreground">
              {education.field}
            </p>
            <p className="mt-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
              {education.institution}
            </p>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
