import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Multiservices LLC | Tax & Business Services",
  description:
    "Professional tax preparation, ITIN services, bookkeeping, payroll, notarization, and more. Serving our community with honesty and dedication. Bilingual services in English and Spanish.",
  keywords: [
    "tax preparation",
    "ITIN",
    "bookkeeping",
    "payroll",
    "notary",
    "business services",
    "tax services Virginia",
    "preparacion de impuestos",
  ],
  openGraph: {
    title: "Professional Multiservices LLC | Tax & Business Services",
    description:
      "Professional tax preparation, ITIN services, bookkeeping, payroll, notarization, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
