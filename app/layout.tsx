import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarModern from "./NavbarModern";
import Footer from "./Footer";
import GoToTopButton from "./components/GoToTopButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mezbahul Islam",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="project-background min-h-full flex flex-col scroll-smooth">
        <NavbarModern />
        <main className="project-background flex-1 pt-20">{children}</main>
        <Footer />
        <GoToTopButton />
      </body>
    </html>
  );
}
