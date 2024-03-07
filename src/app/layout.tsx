import type { Metadata } from "next";
import "./globals.css";
import { fontBold } from "@/lib/fonts";

const APP_DESCRIPTION = "Fullstack developer with over a decade of programming experience."

export const metadata: Metadata = {
  title: "Gabriel Buxo Portfolio",
  description: APP_DESCRIPTION,
  metadataBase: new URL('https://buxogabriel.vercel.app/'),
  openGraph: {
    type: "website",
    url:"/",
    description: APP_DESCRIPTION,
    siteName: "Gabriel Buxo Portfolio",
    images: []
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={fontBold.className}>{children}</body>
    </html>
  );
}
