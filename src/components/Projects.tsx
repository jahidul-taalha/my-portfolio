import Link from "next/link";
import { projects, type Project } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";
import { ArrowUpRightIcon } from "./icons";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 60} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/60">
        {/* Screenshot (or placeholder panel when the file is missing) */}
        <ProjectVisual project={project} />

        <div className="flex flex-1 flex-col p-6">
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
            {project.shortDescription}
          </p>

          {/* Tech chips */}
          {project.techStack.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {/* Action pinned to the bottom of the card */}
          <footer className="mt-auto pt-6">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              View Details
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </footer>
        </div>
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
      lede="A selection of things I've built — full-stack apps, data platforms, and practical tools. Open any card for the full breakdown."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
