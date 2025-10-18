import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naman Jain - Frontend Developer",
  description:
    "Frontend developer with 2.5+ years of experience in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Naman Jain", url: "https://naman-portfolio.com" }],
  openGraph: {
    type: "website",
    url: "https://naman-portfolio.com",
    title: "Naman Jain - Frontend Developer",
    description: "Building beautiful web experiences with React & Next.js",
    images: [
      {
        url: "https://naman-portfolio.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
