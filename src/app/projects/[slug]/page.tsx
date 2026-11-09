import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/portfolio";
import ProjectVisual from "@/components/ProjectVisual";
import ProjectLink from "@/components/ProjectLink";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRightIcon,
  ExternalLinkIcon,
  GithubIcon,
} from "@/components/icons";

/** Prerender every known project page at build time. */
export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — Project`,
      description: project.shortDescription,
      url: `/projects/${project.slug}`,
    },
  };
}

/** Clearly-marked placeholder for content the owner still needs to write. */
function TodoNote({ what }: { what: string }) {
  return (
    <p className="rounded-xl border border-dashed border-border bg-muted px-4 py-3 font-mono text-xs text-muted-foreground">
      TODO: {what}
    </p>
  );
}

function TodoList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-xl border border-dashed border-border bg-muted px-4 py-3 text-sm text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8">
      <Reveal>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        {/* The one h1 on this page */}
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.shortDescription}
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-10">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <ProjectVisual
            project={project}
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_1fr]">
        {/* Main column */}
        <div className="space-y-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Overview
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Features
            </h2>
            {project.features.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-4">
                <TodoNote what={`add the feature list for ${project.title}`} />
              </div>
            )}
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Challenges
            </h2>
            <div className="mt-4">
              <TodoList items={project.challenges} />
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Future improvements
            </h2>
            <div className="mt-4">
              <TodoList items={project.futureImprovements} />
            </div>
          </Reveal>
        </div>

        {/* Side column: tech + links */}
        <div className="space-y-8">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Tech stack
            </h2>
            {project.techStack.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-accent-soft px-3 py-1.5 font-mono text-[11px] text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-4">
                <TodoNote what={`add the tech stack for ${project.title}`} />
              </div>
            )}
          </Reveal>

          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Links
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <ProjectLink
                href={project.liveUrl}
                label="Live Project"
                icon={<ExternalLinkIcon className="h-3.5 w-3.5" />}
              />
              <ProjectLink
                href={project.githubClientUrl}
                label="GitHub Repository"
                icon={<GithubIcon className="h-3.5 w-3.5" />}
              />
            </div>
          </Reveal>

          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUpRightIcon className="h-4 w-4" />
              See all projects
            </Link>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
