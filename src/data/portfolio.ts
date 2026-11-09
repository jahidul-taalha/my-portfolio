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

/** External link. `null` = placeholder → disabled "Coming soon" button. */
export type LinkHref = string | null;

export interface NavItem {
  label: string;
  href: string;
}

export interface PersonalInfo {
  /** Deployed domain — used for metadataBase, canonical, OG and sitemap URLs. */
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
  /** Display format; the tel: link strips formatting automatically. */
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  /** Google Drive — opens in the browser. */
  resumeView: string;
  /** Google Drive direct download. */
  resumeDownload: string;
}

export interface AboutContent {
  /** TODO: replace with your real "how I started programming" story. */
  journey: string;
  enjoyBuilding: string;
  /** TODO: replace with your real hobbies and interests. */
  beyondCode: string;
  /** Quick-facts shown beside the copy (label/value pairs). */
  facts: { label: string; value: string }[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  /** URL segment: /projects/[slug] */
  slug: string;
  title: string;
  /** One-liner used on cards and in metadata. */
  shortDescription: string;
  /** Longer copy for the detail page. */
  description: string;
  /** Screenshot path — rendered only if the file exists in public/projects/. */
  image: string;
  techStack: string[];
  features: string[];
  /** TODO: replace `null` with the live demo URL */
  liveUrl: LinkHref;
  /** Client-side GitHub repo. TODO: replace `null` with the repo URL */
  githubClientUrl: LinkHref;
  /** TODO: write real challenge list items (placeholders below). */
  challenges: string[];
  /** TODO: write real improvement ideas (placeholders below). */
  futureImprovements: string[];
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
/* Navigation — "/#section" so links work from any page               */
/* ------------------------------------------------------------------ */

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

/* ------------------------------------------------------------------ */
/* Personal information                                               */
/* ------------------------------------------------------------------ */

export const personalInfo: PersonalInfo = {
  siteUrl: "https://jahidul-taalha-portfolio.vercel.app",
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
  email: "jahidulislamtaalha@gmail.com",
  phone: "+880 1577-553497",
  whatsapp: "https://wa.me/8801577553497",
  github: "https://github.com/jahidul-taalha",
  linkedin: "https://www.linkedin.com/in/md-jahidul-islam-742971304/",
  resumeView:
    "https://drive.google.com/file/d/1RXWwLlF3e0hwvm4_Nf5IBG9BcLom5FkI/view?usp=sharing",
  resumeDownload:
    "https://drive.google.com/uc?export=download&id=1RXWwLlF3e0hwvm4_Nf5IBG9BcLom5FkI",
};

/* ------------------------------------------------------------------ */
/* About — three parts: journey / enjoy building / beyond code        */
/* ------------------------------------------------------------------ */

export const aboutContent: AboutContent = {
  // TODO: write your own story of how you started programming.
  journey:
    "TODO: Replace this with your story — how you got into programming, what you learned first, and the moment you decided to pursue it seriously.",
  enjoyBuilding:
    "I enjoy building modern, responsive web applications and full-stack projects with React.js and Next.js on the frontend, and Node.js, Express.js, and MongoDB on the backend. Turning an idea or a design into a working, user-friendly product is the part I enjoy most — and I care about clean code, sensible UX, and shipping things that solve real problems.",
  // TODO: write your own hobbies and interests outside of coding.
  beyondCode:
    "TODO: Replace this with your hobbies and interests outside of code — what you do to recharge, what you're curious about, anything that shows the person behind the projects.",
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
/* Featured projects                                                   */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    slug: "hireloop",
    title: "Hireloop",
    shortDescription:
      "A full-stack job portal connecting job seekers and recruiters.",
    description:
      "A full-stack job portal connecting job seekers and recruiters. Hireloop gives each type of user — job seeker, recruiter, and admin — the tools they need, behind role-based authentication.",
    image: "/projects/hireloop.png",
    techStack: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
    features: [
      "Role-based authentication",
      "Job seeker and recruiter dashboards",
      "Recruiter job posting and management",
      "Admin access management",
    ],
    // TODO: replace null with the live demo URL
    liveUrl: null,
    // TODO: replace null with the client GitHub repo URL
    githubClientUrl: null,
    challenges: [
      // TODO: replace with your real challenges building Hireloop
      "TODO: Describe a real challenge you faced while building Hireloop (e.g. auth flows, role permissions, data modelling).",
    ],
    futureImprovements: [
      // TODO: replace with your real plans for Hireloop
      "TODO: Describe your real future plans for Hireloop (e.g. features, integrations, deployments).",
    ],
  },
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    shortDescription: "A Bangla-based product price information platform.",
    description:
      "A Bangla-based product price information platform. Bazar Dor lets people browse product categories, check current prices, and follow price history so they can make better buying decisions.",
    image: "/projects/bazar-dor.png",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    features: [
      "Product categories and listings",
      "Product details",
      "Price history and comparisons",
      "Price increase and decrease information",
    ],
    liveUrl: "https://bazar-com-seven.vercel.app/",
    // TODO: replace null with the client GitHub repo URL
    githubClientUrl: null,
    challenges: [
      // TODO: replace with your real challenges building Bazar Dor
      "TODO: Describe a real challenge you faced while building Bazar Dor (e.g. Bangla content, price data sourcing, comparisons).",
    ],
    futureImprovements: [
      // TODO: replace with your real plans for Bazar Dor
      "TODO: Describe your real future plans for Bazar Dor (e.g. more categories, alerts, user accounts).",
    ],
  },
  {
    slug: "booknook",
    title: "BookNook",
    shortDescription: "An online library management application.",
    description:
      "An online library management application. BookNook covers the core library workflow — browsing the catalogue, adding books, borrowing, and returning — end to end.",
    image: "/projects/booknook.png",
    techStack: ["Next.js", "Express.js", "MongoDB"],
    features: [
      "Browse available books",
      "Add new books",
      "Borrow books",
      "Manage and return borrowed books",
    ],
    liveUrl: "https://book-nook-client-six.vercel.app/",
    // TODO: replace null with the client GitHub repo URL
    githubClientUrl: null,
    challenges: [
      // TODO: replace with your real challenges building BookNook
      "TODO: Describe a real challenge you faced while building BookNook (e.g. borrow/return state, availability rules, API design).",
    ],
    futureImprovements: [
      // TODO: replace with your real plans for BookNook
      "TODO: Describe your real future plans for BookNook (e.g. search, due dates, member accounts).",
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog",
    shortDescription:
      "A fitness tracking web application developed as a practical project.",
    description:
      "A fitness tracking web application developed as a practical project.",
    image: "/projects/fitlog.png",
    // TODO: add the real tech stack for FitLog once finalized
    techStack: [],
    // TODO: add the real feature list for FitLog once finalized
    features: [],
    // TODO: replace null with the live demo URL
    liveUrl: null,
    // TODO: replace null with the client GitHub repo URL
    githubClientUrl: null,
    challenges: [
      // TODO: replace with your real challenges building FitLog
      "TODO: Describe a real challenge you faced while building FitLog.",
    ],
    futureImprovements: [
      // TODO: replace with your real plans for FitLog
      "TODO: Describe your real future plans for FitLog.",
    ],
  },
];

/** Look up a project by its URL slug (used by the dynamic route). */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Experience (academic tutoring — not software employment)           */
/* ------------------------------------------------------------------ */

export const experience: ExperienceItem = {
  role: "Private Tutor / Academic Tutor",
  context: "Private tutoring · 4+ years",
  summary:
    "Academic tutoring role — listed separately from my software development work.",
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
