import { skillGroups } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { SkillIcon } from "./skill-icons";

/**
 * Technical skills as icon cards grouped by stack area — honest, grouped,
 * with no proficiency percentages or "expert" claims. Icons are decorative;
 * every card shows the skill name as text.
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
          <Reveal key={group.title} delay={i * 80} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group flex items-center gap-2.5 rounded-xl border border-border bg-muted px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <SkillIcon name={skill} className="h-5 w-5" />
                    </span>
                    <span className="truncate">{skill}</span>
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
