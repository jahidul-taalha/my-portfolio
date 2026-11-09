import Image from "next/image";
import { projectImageExists } from "@/lib/project-image";

/**
 * Project visual shared by cards and detail pages (server component):
 * renders the screenshot when it exists in public/projects/, otherwise a
 * styled placeholder panel so nothing ever 404s or shows a broken image.
 */
export default function ProjectVisual({
  project,
  priority = false,
  sizes = "(max-width: 640px) 100vw, 50vw",
}: {
  project: { title: string; image: string };
  priority?: boolean;
  sizes?: string;
}) {
  if (projectImageExists(project.image)) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={1600}
        height={900}
        priority={priority}
        sizes={sizes}
        className="aspect-video w-full object-cover"
      />
    );
  }

  // Placeholder panel — clearly not a screenshot, keeps layout identical.
  return (
    <div
      aria-hidden="true"
      className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-accent-soft to-surface"
    >
      <span className="text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {project.title}
        <span className="mt-1 block text-[10px] text-muted-foreground/70">
          screenshot coming soon
        </span>
      </span>
    </div>
  );
}
