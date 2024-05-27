import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import "./globals.scss";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: "#e141c0",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "Servo |&S",
    default: "Servo | Services SuperApp Platform",
  },
  description:
    "Servo Landing Page",
  icons: [{ rel: "icon", url: favicon.src }],
  openGraph: {
    title: "Servo | Services SuperApp Platform",
    siteName: "Servo | Services SuperApp Platform",
    description:
      "Servo Landing Page",
    type: "website",
    locale: "hu_HU",
  },
  twitter: {
    title: "Servo | Services SuperApp Plnpmatform",
    description:
      "Servo is a user-friendly app that connects you with verified third-party home service providers for easy booking, secure payments, and real-time updates on all your home maintenance needs.",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Cookie />
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
