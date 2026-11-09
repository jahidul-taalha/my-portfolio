import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import Reveal from "./Reveal";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MapPinIcon,
} from "./icons";

/**
 * Hero: the single <h1> on the page (name), role/headline, intro,
 * portrait, primary CTAs, and social icon links.
 */
export default function Hero() {
  const hasResume = personalInfo.resume !== null;

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden"
    >
      {/* Subtle accent glow — gives the hero a bit of personality without
          competing with content. Hidden from screen readers. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-5xl scroll-mt-24 items-center gap-12 px-5 pb-16 pt-16 sm:px-8 md:min-h-[calc(100vh-4rem)] md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-20">
        {/* Copy */}
        <Reveal>
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <MapPinIcon className="h-4 w-4" />
            {personalInfo.location}
          </p>

          {/* The one and only h1 */}
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {personalInfo.fullName}
            <span className="block text-muted-foreground sm:text-3xl lg:text-4xl">
              <span className="font-mono text-sm uppercase tracking-widest text-accent">
                a.k.a. {personalInfo.preferredName}
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium text-foreground sm:text-xl">
            {personalInfo.role}
          </p>
          <p className="mt-1 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            {personalInfo.headline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {personalInfo.intro}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>

            {/* TODO: when `personalInfo.resume` becomes "/resume.pdf",
                this switches from a disabled chip to a real download link. */}
            {hasResume ? (
              <a
                href={personalInfo.resume!}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <DownloadIcon className="h-4 w-4" />
                Download Resume
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="Resume coming soon"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-6 py-3 text-sm font-semibold text-muted-foreground/70"
              >
                <DownloadIcon className="h-4 w-4" />
                Download Resume
                <span className="font-mono text-[10px] uppercase tracking-wider">
                  soon
                </span>
              </span>
            )}
          </div>

          {/* Social icon links */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="rounded-full border border-border bg-surface p-2.5 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="rounded-full border border-border bg-surface p-2.5 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>

        {/* Portrait: rounded frame with an offset accent border for depth.
            priority + sizes since it's the LCP element. */}
        <Reveal delay={120} className="justify-self-center md:justify-self-end">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-accent/40 md:-inset-4"
            />
            <Image
              src={personalInfo.photo}
              alt={personalInfo.photoAlt}
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 768px) 80vw, 380px"
              className="relative h-64 w-64 rounded-[1.75rem] object-cover shadow-2xl sm:h-80 sm:w-80 md:h-96 md:w-96"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
