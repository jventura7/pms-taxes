"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
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
              <Button asChild size="lg">
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
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">{t.hero.ctaSecondary}</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200/60">
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-500">
                    {t.nav.services === "Services" ? "Years" : "Años"}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">10,000+</div>
                  <div className="text-sm text-gray-500">
                    {t.nav.services === "Services" ? "Clients" : "Clientes"}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 flex items-center gap-1">
                    4.8
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500">Google</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image with Accent */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt={t.nav.services === "Services" ? "Modern office space" : "Espacio de oficina moderno"}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover"
                />
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
