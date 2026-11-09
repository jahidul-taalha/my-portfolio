/**
 * Single source of truth for every piece of portfolio content.
 *
 * Edit this file to update copy, links, skills, and projects —
 * components read from here and never hardcode personal info.
 *
 * Convention: placeholder values are marked with a `// TODO` comment.
 * Placeholder *links* use `null` so the UI can render a disabled
 * "Coming soon" button instead of a broken anchor. Swap `null` for a
 * real URL string and the link turns on automatically.
 */

/** External project link. `null` = placeholder → disabled "Coming soon" button. */
export type LinkHref = string | null;

export interface NavItem {
  label: string;
  href: string;
}

export interface PersonalInfo {
  /** TODO: replace with the real deployed domain (used for Open Graph URLs). */
  siteUrl: string;
  fullName: string;
  preferredName: string;
  location: string;
  role: string;
  headline: string;
  intro: string;
  photo: string;
  photoAlt: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  /** TODO: replace `null` with "/resume.pdf" once the file is added to /public */
  resume: LinkHref;
}

export interface AboutContent {
  paragraphs: string[];
  /** Quick-facts shown beside the copy (label/value pairs). */
  facts: { label: string; value: string }[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  /** Omit features when none were provided (kept empty for FitLog). */
  features: string[];
  /** Optional note shown when there is no feature list (FitLog). */
  note?: string;
  /** TODO: replace `null` with the live demo URL */
  live: LinkHref;
  /** TODO: replace `null` with the GitHub repo URL */
  repo: LinkHref;
}

export interface ExperienceItem {
  role: string;
  context: string;
  summary: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
}

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Personal information                                               */
/* ------------------------------------------------------------------ */

export const personalInfo: PersonalInfo = {
  // TODO: replace with your real domain once deployed (e.g. "https://example.com")
  siteUrl: "https://example.com",
  fullName: "MD. JAHIDUL ISLAM",
  preferredName: "Taalha",
  location: "Sylhet, Bangladesh",
  role: "Full Stack Web Developer",
  headline:
    "Full Stack Web Developer | React.js & Next.js | Building Modern Web Applications",
  intro:
    "I build responsive, modern web applications with React.js and Next.js on the frontend, and Node.js, Express.js, and MongoDB on the backend. I'm currently pursuing a Diploma in Computer Science & Technology and enjoy turning ideas into practical, user-friendly products.",
  photo: "/hero-profile.jpeg",
  photoAlt: "Portrait of MD. Jahidul Islam (Taalha), Full Stack Web Developer",
  // TODO: replace with your real email address
  email: "your-email@example.com",
  // TODO: replace with your real phone number
  phone: "+880 XXXX-XXXXXX",
  github: "https://github.com/jahidul-taalha",
  linkedin: "https://www.linkedin.com/in/md-jahidul-islam-742971304/",
  // TODO: replace null with "/resume.pdf"
  resume: null,
};

/* ------------------------------------------------------------------ */
/* About                                                              */
/* ------------------------------------------------------------------ */

export const aboutContent: AboutContent = {
  paragraphs: [
    "I am an aspiring developer passionate about creating modern, responsive, and user-friendly web applications. I enjoy transforming ideas and designs into functional digital experiences using React.js and Next.js, and I build the backend side with Node.js, Express.js, and MongoDB.",
    "I believe in continuous learning, practical problem-solving, and building projects that solve real-world problems. Alongside my studies, four years of tutoring have sharpened my communication and explanation skills — I use those skills every day to break down complex topics and ship clean, understandable code.",
  ],
  facts: [
    { label: "Based in", value: "Sylhet, Bangladesh" },
    { label: "Focus", value: "React.js · Next.js · Node.js" },
    { label: "Studying", value: "Diploma in CST, Sylhet Polytechnic Institute" },
    { label: "Also", value: "4+ years of tutoring experience" },
  ],
};

/* ------------------------------------------------------------------ */
/* Technical skills                                                   */
/* ------------------------------------------------------------------ */

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "Better Auth"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "REST APIs"],
  },
];

/* ------------------------------------------------------------------ */
/* Featured projects                                                  */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: "hireloop",
    title: "Hireloop",
    description:
      "A full-stack job portal connecting job seekers and recruiters.",
    tech: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
    features: [
      "Role-based authentication",
      "Job seeker and recruiter dashboards",
      "Recruiter job posting and management",
      "Admin access management",
    ],
    // TODO: replace null with the live demo URL
    live: null,
    // TODO: replace null with the GitHub repo URL
    repo: null,
  },
  {
    id: "bazar-dor",
    title: "Bazar Dor",
    description: "A Bangla-based product price information platform.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    features: [
      "Product categories and listings",
      "Product details",
      "Price history and comparisons",
      "Price increase and decrease information",
    ],
    live: "https://bazar-com-seven.vercel.app/",
    // TODO: replace null with the GitHub repo URL
    repo: null,
  },
  {
    id: "booknook",
    title: "BookNook",
    description: "An online library management application.",
    tech: ["Next.js", "Express.js", "MongoDB"],
    features: [
      "Browse available books",
      "Add new books",
      "Borrow books",
      "Manage and return borrowed books",
    ],
    live: "https://book-nook-client-six.vercel.app/",
    // TODO: replace null with the GitHub repo URL
    repo: null,
  },
  {
    id: "fitlog",
    title: "FitLog",
    description:
      "A fitness tracking web application developed as a practical project.",
    tech: [],
    features: [],
    // Tech-agnostic note: no stack or feature list was provided for this one.
    note: "Details and feature list to be added once finalized.",
    // TODO: replace null with the live demo URL
    live: null,
    // TODO: replace null with the GitHub repo URL
    repo: null,
  },
];

/* ------------------------------------------------------------------ */
/* Experience (academic tutoring — not software employment)           */
/* ------------------------------------------------------------------ */

export const experience: ExperienceItem = {
  role: "Private Tutor / Academic Tutor",
  context: "Private tutoring · 4+ years",
  summary:
    "Teaching experience kept separate from my software development work — no software employment history is claimed here.",
  points: [
    "4+ years of tutoring experience",
    "Teaching Bangla and English-medium students",
    "Strong communication and explanation skills",
    "Ability to simplify complex concepts",
  ],
};

/* ------------------------------------------------------------------ */
/* Education                                                          */
/* ------------------------------------------------------------------ */

export const education: EducationItem = {
  degree: "Diploma in Engineering",
  field: "Computer Science & Technology (CST)",
  institution: "Sylhet Polytechnic Institute",
};
