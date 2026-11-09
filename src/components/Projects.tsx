import type { ReactNode } from "react";
import { projects, type Project } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, ExternalLinkIcon, GithubIcon } from "./icons";

/**
 * Link button that renders a disabled "Coming soon" chip when the URL in
 * the data file is still a `null` placeholder — never a broken <a>.
 */
function ProjectLink({
  href,
  label,
  icon,
}: {
  href: string | null;
  label: string;
  icon: ReactNode;
}) {
  if (href === null) {
    return (
      <span
        aria-disabled="true"
        title={`${label} coming soon`}
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-xs font-semibold text-muted-foreground/70"
      >
        {icon}
        {label}
        <span className="font-mono text-[10px] uppercase tracking-wider">
          soon
        </span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {icon}
      {label}
      <ExternalLinkIcon className="h-3.5 w-3.5" />
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 60} className="h-full">
      <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>
          <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-muted-foreground/50" />
        </header>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech chips */}
        {project.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {/* Features (omitted when none were provided, e.g. FitLog) */}
        {project.features.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {project.note && (
          <p className="mt-4 text-sm italic text-muted-foreground/80">
            {project.note}
          </p>
        )}

        {/* Actions pinned to the bottom of the card */}
        <footer className="mt-auto flex flex-wrap gap-2 pt-6">
          <ProjectLink
            href={project.live}
            label="Live"
            icon={<ExternalLinkIcon className="h-3.5 w-3.5" />}
          />
          <ProjectLink
            href={project.repo}
            label="GitHub"
            icon={<GithubIcon className="h-3.5 w-3.5" />}
          />
        </footer>
      </article>
    </Reveal>
  );
}

/** Featured projects grid — all content comes from the data file. */
export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Featured projects"
      lede="A selection of things I've built — full-stack apps, data platforms, and practical tools."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
