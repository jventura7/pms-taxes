"use client";

import { useLanguage } from "@/lib/LanguageContext";

const featureIcons = [
  <svg key="fast" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>,
  <svg key="professional" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>,
  <svg key="honest" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>,
  <svg key="bilingual" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
    />
  </svg>,
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" data-theme="dark" className="bg-[#050914] py-24 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs text-white/60">{t.nav.about}</p>
          <h2 className="text-4xl font-semibold">{t.about.title}</h2>
          <p className="text-white/70 text-lg">{t.about.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.features.map((feature, index) => (
            <div key={index} className="space-y-3 border-t border-white/10 pt-6">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/80">
                {featureIcons[index]}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="panel rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h3 className="text-3xl font-semibold">{t.nav.contact === "Contact" ? "Ready to get started?" : "Listo para comenzar?"}</h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            {t.nav.contact === "Contact"
              ? "Let us help you with your tax preparation, business services, and more. Contact us today for a tailored consultation."
              : "Permitanos ayudarle con su preparacion de impuestos, servicios empresariales y mas. Contactenos hoy para una consulta personalizada."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17035309100"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-stone-400 text-stone-800 hover:bg-stone-900 hover:text-white transition-colors"
            >
              (703) 530-9100
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white hover:bg-black transition-colors"
            >
              {t.nav.contact === "Contact" ? "Send a message" : "Enviar un mensaje"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
