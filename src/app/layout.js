import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cek Gudang Yuk!",
  description: "Devscale Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark text-foreground bg-zinc-800 min-h-screen`}
      >
        <Analytics />
        <HeroUIProvider defaulttheme="dark">{children}</HeroUIProvider>
      </body>
    </html>
  );
}
