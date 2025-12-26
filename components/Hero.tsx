"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100 pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Professional Multiservices LLC
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-sky-500 hover:bg-sky-600 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <svg
                className="w-5 h-5 ml-2"
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
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-sky-300 rounded-full transition-all duration-200"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-6">
              {t.about.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500">15+</div>
                <div className="text-sm text-gray-600">
                  {t.nav.services === "Services" ? "Years Experience" : "Anos de Experiencia"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500">1000+</div>
                <div className="text-sm text-gray-600">
                  {t.nav.services === "Services" ? "Happy Clients" : "Clientes Satisfechos"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500">100%</div>
                <div className="text-sm text-gray-600">
                  {t.nav.services === "Services" ? "Satisfaction" : "Satisfaccion"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-gray-400 hover:text-sky-500 transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
