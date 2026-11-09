import { personalInfo, navItems } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

/** Footer: copyright, quick anchors, and social icon links. */
export default function Footer() {
  // Dynamic year so the footer never goes stale.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold tracking-tight text-foreground">
            {personalInfo.fullName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {personalInfo.role} · {personalInfo.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-5xl px-5 py-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:px-8">
          © {year} {personalInfo.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
