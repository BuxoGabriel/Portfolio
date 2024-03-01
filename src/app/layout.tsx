import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
