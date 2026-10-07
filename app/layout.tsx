import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Free Internship Programs in Indore`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "free internship",
    "Indore internship",
    "web development",
    "AI ML",
    "blockchain",
    "digital marketing",
    "career technology",
    "student internship",
    "skill development",
    "Sanwariya Career Technology",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} — Free Internship Programs`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-img.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Free Internship Programs`,
    description: siteConfig.description,
    images: ["/logo-img.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  icons: {
    icon: "/favicon.ico",
    apple: "/web-app-manifest-192x192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo-img.png`,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.zip,
                addressCountry: siteConfig.address.country,
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.phone,
                contactType: "Admissions",
                email: siteConfig.email,
              },
              foundingDate: siteConfig.foundingDate,
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
