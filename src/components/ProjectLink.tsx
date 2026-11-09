import type { ReactNode } from "react";
import { ExternalLinkIcon } from "./icons";

/**
 * External project link (Live / GitHub) that renders a disabled
 * "Coming soon" chip when the URL in the data file is still a `null`
 * placeholder — never a broken <a>.
 */
export default function ProjectLink({
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
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
