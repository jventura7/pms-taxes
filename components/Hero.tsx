"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      data-theme="light"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#dfeeff] via-[#f3f7ff] to-white pt-24 text-stone-900"
    >
      <div
        className="absolute inset-0 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(175, 212, 255, 0.75), transparent 55%),
            radial-gradient(circle at 80% 20%, rgba(60, 130, 255, 0.55), transparent 45%),
            radial-gradient(circle at 60% 10%, rgba(40, 90, 255, 0.6), transparent 45%),
            radial-gradient(circle at 40% 80%, rgba(190, 222, 255, 0.45), transparent 45%),
            radial-gradient(circle at 90% 70%, rgba(130, 170, 255, 0.35), transparent 40%)
          `,
        }}
      />

      <div className="relative w-full px-4 sm:px-6 lg:px-10 py-20 lg:py-32">
        <div className="max-w-3xl space-y-8">
          <p className="uppercase tracking-[0.4em] text-xs text-stone-500">Professional Multiservices LLC</p>
          <h1 className="text-5xl sm:text-6xl font-semibold leading-tight serif-heading">{t.hero.title}</h1>
          <p className="text-lg text-stone-600">{t.hero.subtitle}</p>


          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-stone-900 text-white font-semibold hover:bg-black transition-colors"
            >
              {t.hero.cta}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-stone-400 text-stone-900 font-semibold hover:bg-white/70 transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="pt-12 border-t border-stone-200 text-sm text-stone-600">
            <p className="mb-4">{t.about.subtitle}</p>
            <div className="flex flex-wrap gap-10 text-stone-900">
              <div>
                <p className="text-4xl font-semibold">15+</p>
                <p className="text-xs tracking-[0.3em] uppercase">Years</p>
              </div>
              <div>
                <p className="text-4xl font-semibold">1000+</p>
                <p className="text-xs tracking-[0.3em] uppercase">Clients</p>
              </div>
              <div>
                <p className="text-4xl font-semibold">100%</p>
                <p className="text-xs tracking-[0.3em] uppercase">Trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
