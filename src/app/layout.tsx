import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/ui/PageTransition";
import SectionObserver from "@/components/ui/SectionObserver";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Zawed Akhter | Frontend Developer , React.js Developer",
  
  description:
    "Frontend Developer skilled in ypeScript ,React.js, DevOps like Lunix,Git $ GitHub , Docker . Open to software engineering opportunities.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "DevOps Engineer",
    "Software Engineer Portfolio",
    "java & Python Basic"
  ],
  authors: [{ name: "Zawed Akhter" }],
  openGraph: {
    title: "Zawed Akhter | Frontend Developer & Devops Engineer",
    description:
      "Building scalable, high-performance web applications with modern technologies.",
    // url: "https://personal-portfolio-psi-one-64.vercel.app/",
    siteName: "Zawed Portfolio",
    images: [
      {
        url: "/images/hero-boy.png",
        width: 1200,
        height: 630,
        alt: "Zawed Akhter Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ScrollProgress />
          <SectionObserver />
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
