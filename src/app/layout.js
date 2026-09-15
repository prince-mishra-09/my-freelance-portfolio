import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  metadataBase: new URL('https://xwaked.com'),
  title: "Xwaked — Websites That Make Businesses Look Worth Choosing",
  description: "I design and develop modern websites for clinics, professional firms, showrooms, premium brands and growing businesses — designed to build trust and generate enquiries.",
  openGraph: {
    title: "Xwaked — Websites That Make Businesses Look Worth Choosing",
    description: "I design and develop modern websites for clinics, professional firms, showrooms, premium brands and growing businesses — designed to build trust and generate enquiries.",
    url: 'https://xwaked.com',
    siteName: 'Xwaked Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Xwaked — Websites That Make Businesses Look Worth Choosing",
    description: "I design and develop modern websites for clinics, professional firms, showrooms, premium brands and growing businesses — designed to build trust and generate enquiries.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
