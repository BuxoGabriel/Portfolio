import type { Metadata } from "next";
import "./globals.css";
import { fontBold } from "@/lib/fonts";
import ThemeContextProvider from "@/components/theme-context";
import Main from "@/components/main";

const APP_DESCRIPTION = "My portfolio website. Made using the latest technology, I made this website to present projects that I have made and show my capabilities as a full stack developer."

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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Gabriel Buxo Portfolio',
    'alternateName': 'Gabriel Buxo',
    'url': 'https://buxogabriel.vercel.app',
    'logo': 'https://buxogabriel.vercel.app/favicon'
  }

  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={fontBold.className}>
        <ThemeContextProvider>
          <Main>{children}</Main>
        </ThemeContextProvider>
      </body>
    </html>)
}
