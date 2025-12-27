"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  {
    value: "15+",
    label: { en: "Years of Experience", es: "Años de Experiencia" },
  },
  {
    value: "10,000+",
    label: { en: "Clients Served", es: "Clientes Atendidos" },
  },
  {
    value: "4.8",
    label: { en: "Google Rating", es: "Calificación en Google" },
    isStar: true,
  },
  {
    value: "100%",
    label: { en: "Bilingual Service", es: "Servicio Bilingüe" },
  },
];

const values = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: { en: "Integrity", es: "Integridad" },
    description: {
      en: "Honest, transparent service with no hidden fees or surprises.",
      es: "Servicio honesto y transparente sin cargos ocultos ni sorpresas.",
    },
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: { en: "Efficiency", es: "Eficiencia" },
    description: {
      en: "Fast, accurate processing without compromising quality.",
      es: "Procesamiento rápido y preciso sin comprometer la calidad.",
    },
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: { en: "Community", es: "Comunidad" },
    description: {
      en: "Proudly serving with bilingual support in English and Spanish.",
      es: "Sirviendo con orgullo con soporte bilingüe en inglés y español.",
    },
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: { en: "Expertise", es: "Experiencia" },
    description: {
      en: "Years of experience in tax preparation and business services.",
      es: "Años de experiencia en preparación de impuestos y servicios empresariales.",
    },
  },
];

export default function AboutPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-linear-to-br from-sky-200/40 via-transparent to-primary/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-sky-100/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              {isEnglish ? "About Us" : "Sobre Nosotros"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {isEnglish ? "About " : "Acerca de "}
              <span className="text-primary">Professional Multiservices</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {isEnglish
                ? "For over 15 years, we've been the trusted partner for tax preparation, business services, and more in the Manassas community."
                : "Durante más de 15 años, hemos sido el socio de confianza para la preparación de impuestos y servicios empresariales en la comunidad de Manassas."}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary via-sky-500 to-primary" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-size-[24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2 transition-transform group-hover:scale-105 flex items-center justify-center gap-2">
                  {stat.value}
                  {stat.isStar && (
                    <svg
                      className="w-8 h-8 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                </div>
                <div className="text-white/80 font-medium text-sm sm:text-base">
                  {isEnglish ? stat.label.en : stat.label.es}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-linear-to-b from-sky-50/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              {isEnglish ? "Our Journey" : "Nuestro Camino"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? "Our Story" : "Nuestra Historia"}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-linear-to-r from-primary/10 to-sky-500/10 blur-2xl" />
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt={
                    isEnglish
                      ? "Professional handshake"
                      : "Apretón de manos profesional"
                  }
                  className="w-full h-100 object-cover shadow-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-linear-to-br from-primary to-sky-500" />
              </div>
            </div>

            {/* Timeline Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                {[
                  {
                    year: "2009",
                    titleEn: "The Beginning",
                    titleEs: "El Comienzo",
                    descEn:
                      "Professional Multiservices LLC was founded with a simple mission: to provide our community with reliable, affordable, and professional tax and business services.",
                    descEs:
                      "Professional Multiservices LLC fue fundada con una misión simple: proporcionar a nuestra comunidad servicios fiscales y empresariales confiables, asequibles y profesionales.",
                  },
                  {
                    year: "2015",
                    titleEn: "Expanding Services",
                    titleEs: "Expandiendo Servicios",
                    descEn:
                      "What started as a small tax preparation office grew into a full-service business center, offering everything from ITIN applications to bookkeeping and notarization.",
                    descEs:
                      "Lo que comenzó como una pequeña oficina de preparación de impuestos se convirtió en un centro de negocios completo.",
                  },
                  {
                    year: "Today",
                    titleEn: "Community Leader",
                    titleEs: "Líder Comunitario",
                    descEn:
                      "We're proud to serve our diverse community with bilingual staff who understand the unique needs of our clients.",
                    descEs:
                      "Estamos orgullosos de servir a nuestra diversa comunidad con personal bilingüe que entiende las necesidades únicas de nuestros clientes.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-primary/20"
                  >
                    <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-linear-to-br from-primary to-sky-500" />
                    <span className="inline-block text-primary font-bold text-sm mb-1">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {isEnglish ? item.titleEn : item.titleEs}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {isEnglish ? item.descEn : item.descEs}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="mt-20 relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-sky-500 opacity-20 blur-xl" />
            <div className="relative bg-linear-to-r from-primary via-sky-500 to-primary p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm mb-6">
                  <svg
                    className="w-7 h-7"
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
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {isEnglish ? "Our Mission" : "Nuestra Misión"}
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  {isEnglish
                    ? "To empower individuals and businesses in our community by providing accessible, professional, and trustworthy financial services. We believe everyone deserves expert help with their taxes and business needs."
                    : "Empoderar a individuos y empresas en nuestra comunidad proporcionando servicios financieros accesibles, profesionales y confiables. Creemos que todos merecen ayuda experta con sus impuestos y necesidades empresariales."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-linear-to-t from-sky-100/40 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              {isEnglish ? "What We Believe" : "Lo Que Creemos"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? "Our Values" : "Nuestros Valores"}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              {isEnglish
                ? "The principles that guide everything we do"
                : "Los principios que guían todo lo que hacemos"}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white/70 backdrop-blur-sm border border-gray-200/80 hover:bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-sky-500/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {isEnglish ? value.title.en : value.title.es}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {isEnglish ? value.description.en : value.description.es}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Office Image Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-sky-500/20 blur-2xl opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt={
                  isEnglish ? "Our team at work" : "Nuestro equipo trabajando"
                }
                className="relative w-full h-100 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary" />
            </div>

            <div>
              <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
                {isEnglish ? "Why Choose Us" : "Por Qué Elegirnos"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {isEnglish ? "Your Trusted Partner" : "Su Socio de Confianza"}
              </h2>
              <div className="space-y-4">
                {[
                  {
                    en: "Fully bilingual staff fluent in English and Spanish",
                    es: "Personal completamente bilingüe en inglés y español",
                  },
                  {
                    en: "Convenient location in the heart of Manassas",
                    es: "Ubicación conveniente en el corazón de Manassas",
                  },
                  {
                    en: "Transparent pricing with no hidden fees",
                    es: "Precios transparentes sin cargos ocultos",
                  },
                  {
                    en: "Year-round support, not just during tax season",
                    es: "Soporte durante todo el año, no solo en temporada de impuestos",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      {isEnglish ? item.en : item.es}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-primary via-sky-500 to-primary" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="relative px-8 py-16 md:py-20 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {isEnglish
                  ? "Ready to Work With Us?"
                  : "¿Listo para Trabajar con Nosotros?"}
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
                {isEnglish
                  ? "Contact us today for a free consultation. We're here to help."
                  : "Contáctenos hoy para una consulta gratuita. Estamos aquí para ayudarle."}
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
                    {isEnglish ? "Contact Us" : "Contáctenos"}
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
    </>
  );
}
