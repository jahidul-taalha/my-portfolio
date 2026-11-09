import { skillGroups } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

/**
 * Technical skills as simple tag/chip groups — honest, grouped, with no
 * proficiency percentages or "expert" claims.
 */
export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      title="Technical toolkit"
      lede="Technologies I work with, grouped by where they live in the stack."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
