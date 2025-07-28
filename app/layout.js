import "aos/dist/aos.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sanwariya Career Technology",
  keywords: ["Sanwariya", "Career", "Technology", "Internships", "Education"],
  authors: [{ name: "Sanwariya Career Technology" }],
  creator: "Sanwariya Career Technology",
  publisher: "Sanwariya Career Technology",
  openGraph: {
    title: "Sanwariya Career Technology",
    description:
      "Empowering students with career-focused internships and education.",
    url: "https://sanwariyacareertechnology.com",
    siteName: "Sanwariya Career Technology",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Sanwariya Career Technology OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanwariya Career Technology",
    description:
      "Empowering students with career-focused internships and education.",
    images: ["/images/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    title: "Sanwariya Career Technology",
    statusBarStyle: "default",
  },
  manifest: "/favicon-for-app/manifest.json",
  icons: {
    icon: "/favicon-for-app/favicon.ico",
    apple: "/favicon-for-app/apple-icon.png",
    shortcut: "/favicon-16x16.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
