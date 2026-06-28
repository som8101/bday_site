import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../config/siteConfig";

export const metadata: Metadata = {
  title: `Happy Birthday, ${siteConfig.names.girlfriend} ❤️`,
  description: "A cinematic love story and birthday surprise.",
};

export const viewport = {
  themeColor: "#fdf2f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
