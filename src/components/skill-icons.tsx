/**
 * Simple inline SVG skill marks (zero dependencies) with a clean
 * text-initial fallback for any skill that has no icon yet.
 * All marks are aria-hidden; the skill name is always visible text.
 */

import type { ReactElement } from "react";

type IconProps = { className?: string };

function stroke(className?: string) {
  return {
    className: className ?? "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
}

function filled(className?: string) {
  return {
    className: className ?? "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "currentColor" as const,
    "aria-hidden": true,
  };
}

const icons: Record<string, (p: IconProps) => ReactElement> = {
  HTML5: ({ className }) => (
    <svg {...filled(className)}>
      <path d="M3.5 2h17l-1.55 17.5L12 22l-6.95-2.5L3.5 2Zm4.1 5.4h8.8l.2-2H6.9l.2 2h6.85l-.5 5.4-3.05 1-3.05-1-.2-2.2H5.6l.35 3.75L12 18.1l6.05-1.75.9-9.95H7.6l-.15-1.5" />
    </svg>
  ),
  CSS3: ({ className }) => (
    <svg {...filled(className)}>
      <path d="M3.5 2h17l-1.55 17.5L12 22l-6.95-2.5L3.5 2Zm4.2 5.4h8.9l.2-2H6.9l.2 2h7.3l-.45 4.9-3.05 1-3.05-1-.2-2.2H5.65l.35 3.9L12 18.1l5.85-1.65.7-7.65.15-1.75-.15-1.65H7.7l-.15-1.45" />
    </svg>
  ),
  JavaScript: ({ className }) => (
    <svg {...filled(className)}>
      <path d="M3 3h18v18H3V3Zm9.6 14.6c0 1.76-1.04 2.57-2.55 2.57-1.36 0-2.13-.71-2.54-1.58l1.43-.86c.26.46.51.85 1.09.85.56 0 .91-.22.91-1.07V11.2h1.66v6.4Zm4.06 2.57c-1.6 0-2.63-.76-3.14-1.77l1.43-.82c.37.61.87 1.06 1.71 1.06.72 0 1.17-.36 1.17-.86 0-.6-.47-.81-1.26-1.16l-.43-.19c-1.26-.54-2.1-1.21-2.1-2.65 0-1.33 1.01-2.34 2.58-2.34 1.11 0 1.92.39 2.5 1.42l-1.37.88c-.35-.63-.73-.88-1.28-.88-.58 0-.95.37-.95.88 0 .61.38.86 1.26 1.24l.43.19c1.47.63 2.32 1.29 2.32 2.74 0 1.57-1.23 2.43-2.89 2.43Z" />
    </svg>
  ),
  TypeScript: ({ className }) => (
    <svg {...filled(className)}>
      <path d="M3 3h18v18H3V3Zm10.66 9.34v-1.5H7.2v1.5h2.28V19h1.7v-6.16h2.48Zm.72 5.84c.42.37 1.03.66 1.9.66 1.63 0 2.73-.87 2.73-2.28 0-1.15-.64-1.78-1.84-2.21l-.58-.2c-.65-.23-.9-.37-.9-.68 0-.27.25-.47.67-.47.41 0 .68.16.94.48l1.05-1.03a2.6 2.6 0 0 0-1.94-.76c-1.52 0-2.53.85-2.53 2.08 0 1.1.64 1.73 1.66 2.14l.58.23c.72.3 1.11.46 1.11.84 0 .34-.32.57-.83.57-.58 0-.94-.25-1.22-.64l-1.14 1.09Z" />
    </svg>
  ),
  "React.js": ({ className }) => (
    <svg {...stroke(className)} strokeWidth={1.3}>
      <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" transform="rotate(60 12 12)" />
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.7"
        transform="rotate(120 12 12)"
      />
    </svg>
  ),
  "Next.js": ({ className }) => (
    <svg {...stroke(className)} strokeWidth={1.4}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8.6 16V8l7.2 9.2M15.4 8v5" />
    </svg>
  ),
  "Tailwind CSS": ({ className }) => (
    <svg {...filled(className)}>
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.86 14.52 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.14 14.48 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.86 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.14 9.48 12 7 12Z" />
    </svg>
  ),
  "Node.js": ({ className }) => (
    <svg {...stroke(className)} strokeWidth={1.4}>
      <path d="M12 2.6 20.4 7.3v9.4L12 21.4 3.6 16.7V7.3L12 2.6Z" />
      <path d="M9 15.2c0 .9.9 1.5 2.4 1.5 1.6 0 2.6-.7 2.6-1.8 0-1-.7-1.5-2.3-1.8l-.9-.2c-1.1-.2-1.6-.6-1.6-1.3 0-.8.7-1.3 1.9-1.3 1.1 0 1.8.4 2.1 1.3" />
    </svg>
  ),
  "Express.js": ({ className }) => (
    <svg {...stroke(className)} strokeWidth={1.5}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M7 15V9.5l3 3 3-3V15M17 9.5V15" />
    </svg>
  ),
  MongoDB: ({ className }) => (
    <svg {...filled(className)}>
      <path d="M12 2.5c1.9 2.3 5.2 6.2 5.2 10.3 0 3.4-2.3 6.1-4.7 6.9l-.5 1.8-.5-1.8c-2.4-.8-4.7-3.5-4.7-6.9 0-4.1 3.3-8 5.2-10.3Zm0 2.4C10.4 7.3 7.6 10.4 7.6 13c0 2.4 1.6 4.3 3.4 5V6.9h1.9v11.1c1.9-.7 3.5-2.6 3.5-5 0-2.6-2.8-5.7-4.4-8.1Z" />
    </svg>
  ),
  "Better Auth": ({ className }) => (
    <svg {...stroke(className)}>
      <path d="M12 3 5 5.7v5.1c0 4.3 2.9 8.3 7 9.5 4.1-1.2 7-5.2 7-9.5V5.7L12 3Z" />
      <circle cx="12" cy="10.5" r="1.8" />
      <path d="M12 12.3v3" />
    </svg>
  ),
  Git: ({ className }) => (
    <svg {...stroke(className)} strokeWidth={1.5}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <circle cx="17.5" cy="9" r="2.4" />
      <path d="M6 8.4v7.2M8.3 6.8c3.5.3 6.4 1 7.7 1.9M17.5 11.4c-.5 2.8-2.5 5.4-5.8 6" />
    </svg>
  ),
  GitHub: ({ className }) => (
    <svg {...filled(className)}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.74 0c2.2-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  ),
  "VS Code": ({ className }) => (
    <svg {...filled(className)}>
      <path d="M17.1 2.2 21.6 4.4c.4.2.6.6.6 1v13.2c0 .4-.2.8-.6 1l-4.5 2.2c-.4.2-.8.2-1.1 0L8.2 15.5l-3.4 2.6c-.3.3-.8.1-.8-.4V6.3c0-.2.1-.4.2-.6L15.8 2c.4-.2.9-.2 1.3.2Zm-.2 3.6L9.9 10.6 6 7.7v8.6l3.9-2.9 7 4.8V5.8Z" />
    </svg>
  ),
  Postman: ({ className }) => (
    <svg {...stroke(className)} strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="m8.5 15.5 7-7M10.2 8.7l5.1 5.1" />
      <path d="M14.8 15.9c.7.7 1.7.8 2.5.3" />
    </svg>
  ),
  "REST APIs": ({ className }) => (
    <svg {...stroke(className)}>
      <path d="M9 4.5C6.8 4.5 6 5.7 6 7.4v1.4c0 1.2-.8 2.2-2 2.2 1.2 0 2 1 2 2.2v1.4c0 1.7.8 2.9 3 2.9M15 4.5c2.2 0 3 1.2 3 2.9v1.4c0 1.2.8 2.2 2 2.2-1.2 0-2 1-2 2.2v1.4c0 1.7-.8 2.9-3 2.9" />
    </svg>
  ),
};

/** First letters of a skill name — the fallback when no icon exists. */
function initials(name: string): string {
  const words = name.split(/[\s.]+/).filter(Boolean);
  return (words.length > 1 ? words.map((w) => w[0]).join("") : name.slice(0, 2))
    .toUpperCase();
}

/** Decorative skill mark; the skill name is always rendered separately. */
export function SkillIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name];
  if (Icon) return <Icon className={className} />;

  return (
    <span
      aria-hidden="true"
      className={`flex items-center justify-center font-mono font-semibold ${
        className ?? "h-5 w-5"
      } text-[11px] leading-none`}
    >
      {initials(name)}
    </span>
  );
}
