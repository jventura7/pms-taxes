"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    alt: {
      en: "Tax documents and calculator",
      es: "Documentos fiscales y calculadora",
    },
  },
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    alt: {
      en: "Business professional signing documents",
      es: "Profesional firmando documentos",
    },
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: { en: "Modern office space", es: "Espacio de oficina moderno" },
  },
  {
    url: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&q=80",
    alt: {
      en: "Financial planning meeting",
      es: "Reunión de planificación financiera",
    },
  },
  {
    url: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=800&q=80",
    alt: {
      en: "Calculator and financial reports",
      es: "Calculadora e informes financieros",
    },
  },
];

export default function Hero() {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentImageIndex];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-linear-to-br from-sky-300/50 via-transparent to-primary/15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {t.hero.title.split(" ").slice(0, 2).join(" ")}
              <span className="block text-primary italic">
                {t.hero.title.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="/contact">
                  {t.hero.cta}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/services">{t.hero.ctaSecondary}</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
          </div>

          {/* Right Column - Image Carousel with Accent */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image with Fade Transition */}
              <div className="relative z-10 overflow-hidden">
                <img
                  src={currentImage.url}
                  alt={
                    language === "en"
                      ? currentImage.alt.en
                      : currentImage.alt.es
                  }
                  className={`w-full h-75 sm:h-100 lg:h-120 object-cover transition-opacity duration-500 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentImageIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Decorative Blue Accent Block */}
              <div className="absolute -right-4 sm:-right-6 top-8 sm:top-12 w-24 sm:w-32 h-32 sm:h-48 bg-primary z-20" />

              {/* Bottom accent line */}
              <div className="absolute -bottom-3 left-8 right-16 h-1 bg-primary/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
        <Link
          href="#services"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            {t.nav.services === "Services" ? "Scroll" : "Desliza"}
          </span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
