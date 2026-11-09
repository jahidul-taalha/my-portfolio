import { aboutContent } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

/** About — three parts (journey / enjoy building / beyond code) + quick facts. */
export default function About() {
  const parts = [
    { id: "journey", title: "My journey", text: aboutContent.journey },
    {
      id: "enjoy",
      title: "What I enjoy building",
      text: aboutContent.enjoyBuilding,
    },
    { id: "beyond", title: "Beyond code", text: aboutContent.beyondCode },
  ];

  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="Aspiring developer, practical builder"
      lede="A little background on who I am and how I work."
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-8">
          {parts.map((part) => (
            <div key={part.id}>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {part.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {part.text}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Quick facts — compact, scannable, no invented metrics. */}
        <Reveal delay={100}>
          <dl className="divide-y divide-border rounded-2xl border border-border bg-surface">
            {aboutContent.facts.map((fact) => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
