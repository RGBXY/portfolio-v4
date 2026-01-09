import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Derren Amadeo | Creative Developer",
  description: "Portfolio web developer, lihat project dan pengalaman saya.",
  keywords: "web developer, creative developer, product engineer, portfolio, derren amadeo hermawan",
  authors: [{ name: "Derren Amadeo" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased bg-background`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
