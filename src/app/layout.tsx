import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  alternates: { canonical: "/" },
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

/* Pre-paint init: mark JS availability (scopes .reveal animations) and
   apply the theme — system preference by default, stored choice wins —
   so there's no flash of the wrong theme or hidden-forever content. */
const themeInit = `(function(){var d=document.documentElement;d.classList.add("js");var s="light";try{if(window.matchMedia("(prefers-color-scheme: dark)").matches)s="dark";}catch(e){}try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")s=t;}catch(e){}d.classList.add(s);})();`;

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
        {/* Footer lives in the layout so project detail pages get it too. */}
        <Footer />
      </body>
    </html>
  );
}
