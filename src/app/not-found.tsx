import Link from "next/link";

/** 404 — handles notFound() from any segment plus unmatched URLs. */
export default function NotFound() {
  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        The page you are looking for doesn&apos;t exist or the project slug is
        wrong.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
        >
          Back home
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          View projects
        </Link>
      </div>
    </main>
  );
}
