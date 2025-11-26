import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amit Kumar | Portfolio",
  description: "Minimal & professional portfolio built using Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
