import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
