import { experience } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

/**
 * Experience — academic tutoring only, presented as teaching work and
 * explicitly kept separate from software development employment.
 */
export default function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      label="Experience"
      title="Teaching experience"
      lede="Years of tutoring that shaped how I communicate and break down complex ideas."
    >
      <Reveal>
        <article className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8">
          {/* Accent spine ties the card to the section's visual language */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-6 h-16 w-1 rounded-r-full bg-accent"
          />

          <div className="flex flex-wrap items-start justify-between gap-3 pl-4 sm:pl-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                {experience.role}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                {experience.context}
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:pl-6">
            {experience.summary}
          </p>

          <ul className="mt-5 grid gap-2.5 sm:pl-6 md:grid-cols-2">
            {experience.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-foreground/90"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                {point}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}
