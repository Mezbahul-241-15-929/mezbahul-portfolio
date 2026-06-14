import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarModern from "./NavbarModern";
import Footer from "./Footer";
import StaticBackground from "./StaticBackground";
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
      <body className="min-h-full flex flex-col bg-black scroll-smooth">
        <StaticBackground />
        <NavbarModern />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <GoToTopButton />
      </body>
    </html>
  );
}
