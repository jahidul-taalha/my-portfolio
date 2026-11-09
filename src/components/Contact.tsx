import { personalInfo } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./icons";

/**
 * Contact — real mailto:/tel:/external links only. No fake form or
 * backend; email & phone are TODO placeholders until filled in the data file.
 */
export default function Contact() {
  const links = [
    {
      id: "email",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <MailIcon className="h-5 w-5" />,
      external: false,
    },
    {
      id: "phone",
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`,
      icon: <PhoneIcon className="h-5 w-5" />,
      external: false,
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/jahidul-taalha",
      href: personalInfo.github,
      icon: <GithubIcon className="h-5 w-5" />,
      external: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "md-jahidul-islam-742971304",
      href: personalInfo.linkedin,
      icon: <LinkedinIcon className="h-5 w-5" />,
      external: true,
    },
  ];

  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title="Let's connect"
      lede="Open to opportunities, collaboration, or just a friendly chat about web development."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link, i) => (
          <Reveal key={link.id} delay={i * 60} className="h-full">
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                {link.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {link.label}
                </span>
                <span className="mt-0.5 block truncate text-sm font-medium text-foreground">
                  {link.value}
                </span>
              </span>
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              {link.external && (
                <span className="sr-only">(opens in a new tab)</span>
              )}
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon className="h-4 w-4 text-accent" />
          Based in {personalInfo.location}.
        </p>
      </Reveal>
    </Section>
  );
}
