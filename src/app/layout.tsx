import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { personalInfo } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* SEO: title/description/Open Graph built from the single data file. */
export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.fullName} — ${personalInfo.role}`,
    template: `%s — ${personalInfo.fullName}`,
  },
  description: personalInfo.headline,
  keywords: [
    personalInfo.role,
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Full Stack Developer",
    "Bangladesh",
  ],
  openGraph: {
    type: "profile",
    title: `${personalInfo.fullName} — ${personalInfo.role}`,
    description: personalInfo.headline,
    url: personalInfo.siteUrl,
    images: [{ url: personalInfo.photo, width: 1254, height: 1254 }],
    locale: "en_US",
    firstName: personalInfo.preferredName,
    lastName: personalInfo.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.fullName} — ${personalInfo.role}`,
    description: personalInfo.headline,
    images: [personalInfo.photo],
  },
};

/* Theme init: runs before paint so there's no flash of the wrong theme.
   Follows system preference by default, then honors a stored choice. */
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.classList.add(t);}else{document.documentElement.classList.add(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");}}catch(e){document.documentElement.classList.add("light");}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior keeps Next.js in sync with our smooth-scroll CSS
    // during client navigations (per Next 16 docs).
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Static pre-paint theme script (framework-owned, not user content). */}
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        {/* The page provides <main id="main"> as the skip-link target. */}
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
