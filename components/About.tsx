"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featureIcons = [
  <svg
    key="fast"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>,
  <svg
    key="professional"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>,
  <svg
    key="honest"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>,
  <svg
    key="bilingual"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
    />
  </svg>,
];

const stats = [
  { value: "20+", labelEn: "Years Experience", labelEs: "Años de Experiencia" },
  {
    value: "10,000+",
    labelEn: "Clients Served",
    labelEs: "Clientes Atendidos",
  },
  {
    value: "4.8",
    labelEn: "Google Rating",
    labelEs: "Calificación Google",
    isStar: true,
  },
  { value: "100%", labelEn: "Bilingual Service", labelEs: "Servicio Bilingüe" },
];

export default function About() {
  const { t } = useLanguage();
  const isEnglish = t.nav.contact === "Contact";

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-linear-to-b from-sky-100/40 via-transparent to-sky-50/30" />
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-linear-to-br from-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
            {isEnglish ? "About Us" : "Sobre Nosotros"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            {t.about.subtitle}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group text-center p-6 bg-white/60 backdrop-blur-sm border border-white/80 hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 flex items-center justify-center gap-1">
                {stat.value}
                {stat.isStar && (
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {isEnglish ? stat.labelEn : stat.labelEs}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/70 backdrop-blur-sm border border-gray-200/80 hover:bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-primary/20 to-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {featureIcons[index]}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-primary via-sky-500 to-primary" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-size-[24px_24px]" />

          <div className="relative p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {isEnglish ? "Ready to Get Started?" : "¿Listo para Comenzar?"}
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              {isEnglish
                ? "Let us help you with your tax preparation, business services, and more. Contact us today for a free consultation."
                : "Permítanos ayudarle con su preparación de impuestos, servicios empresariales y más. Contáctenos hoy para una consulta gratuita."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                <Link href="tel:+17035309100">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (703) 530-9100
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm"
              >
                <Link href="/contact">
                  {isEnglish ? "Send a Message" : "Enviar un Mensaje"}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
