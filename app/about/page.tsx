"use client";

import { useLanguage } from "@/lib/LanguageContext";

const stats = [
  { value: "15+", label: { en: "Years of Experience", es: "Anos de Experiencia" } },
  { value: "10,000+", label: { en: "Clients Served", es: "Clientes Atendidos" } },
  { value: "4.8", label: { en: "Google Rating", es: "Calificacion en Google" } },
  { value: "100%", label: { en: "Bilingual Service", es: "Servicio Bilingue" } },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: { en: "Integrity", es: "Integridad" },
    description: {
      en: "We believe in honest, transparent service. No hidden fees, no surprises.",
      es: "Creemos en un servicio honesto y transparente. Sin cargos ocultos, sin sorpresas.",
    },
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: { en: "Efficiency", es: "Eficiencia" },
    description: {
      en: "Fast, accurate processing without compromising quality or attention to detail.",
      es: "Procesamiento rapido y preciso sin comprometer la calidad o la atencion al detalle.",
    },
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: { en: "Community", es: "Comunidad" },
    description: {
      en: "Proudly serving our local community with bilingual support in English and Spanish.",
      es: "Sirviendo con orgullo a nuestra comunidad local con soporte bilingue en ingles y espanol.",
    },
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: { en: "Expertise", es: "Experiencia" },
    description: {
      en: "Years of experience in tax preparation, business services, and financial solutions.",
      es: "Anos de experiencia en preparacion de impuestos, servicios empresariales y soluciones financieras.",
    },
  },
];

export default function AboutPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <>
      {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {isEnglish ? "About Professional Multiservices" : "Acerca de Professional Multiservices"}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {isEnglish
                  ? "For over 15 years, we've been the trusted partner for tax preparation, business services, and more. Our commitment to fast processing, professional service, and honest pricing has earned us the trust of thousands of clients."
                  : "Durante mas de 15 anos, hemos sido el socio de confianza para la preparacion de impuestos, servicios empresariales y mas. Nuestro compromiso con el procesamiento rapido, el servicio profesional y los precios honestos nos ha ganado la confianza de miles de clientes."}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-sky-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {isEnglish ? stat.label.en : stat.label.es}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {isEnglish ? "Our Story" : "Nuestra Historia"}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {isEnglish
                      ? "Professional Multiservices LLC was founded with a simple mission: to provide our community with reliable, affordable, and professional tax and business services."
                      : "Professional Multiservices LLC fue fundada con una mision simple: proporcionar a nuestra comunidad servicios fiscales y empresariales confiables, asequibles y profesionales."}
                  </p>
                  <p>
                    {isEnglish
                      ? "What started as a small tax preparation office has grown into a full-service business center, offering everything from tax filing and ITIN applications to bookkeeping, notarization, and more."
                      : "Lo que comenzo como una pequena oficina de preparacion de impuestos se ha convertido en un centro de negocios de servicio completo, ofreciendo desde declaracion de impuestos y solicitudes de ITIN hasta contabilidad, notarizacion y mas."}
                  </p>
                  <p>
                    {isEnglish
                      ? "We're proud to serve our diverse community with bilingual staff who understand the unique needs of our clients. Whether you speak English or Spanish, you'll receive the same excellent service."
                      : "Estamos orgullosos de servir a nuestra diversa comunidad con personal bilingue que entiende las necesidades unicas de nuestros clientes. Ya sea que hable ingles o espanol, recibira el mismo excelente servicio."}
                  </p>
                </div>
              </div>
              <div className="bg-sky-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  {isEnglish ? "Our Mission" : "Nuestra Mision"}
                </h3>
                <p className="text-sky-100 leading-relaxed">
                  {isEnglish
                    ? "To empower individuals and businesses in our community by providing accessible, professional, and trustworthy financial services. We believe everyone deserves expert help with their taxes and business needs, regardless of language or background."
                    : "Empoderar a individuos y empresas en nuestra comunidad proporcionando servicios financieros accesibles, profesionales y confiables. Creemos que todos merecen ayuda experta con sus impuestos y necesidades empresariales, independientemente del idioma o antecedentes."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {isEnglish ? "Our Values" : "Nuestros Valores"}
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                {isEnglish
                  ? "The principles that guide everything we do"
                  : "Los principios que guian todo lo que hacemos"}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-500 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {isEnglish ? value.title.en : value.title.es}
                  </h3>
                  <p className="text-gray-600">
                    {isEnglish ? value.description.en : value.description.es}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-white to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-sky-500 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {isEnglish ? "Ready to Work With Us?" : "Listo para Trabajar con Nosotros?"}
              </h2>
              <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
                {isEnglish
                  ? "Contact us today for a free consultation. We're here to help with all your tax and business needs."
                  : "Contactenos hoy para una consulta gratuita. Estamos aqui para ayudarle con todas sus necesidades fiscales y empresariales."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17035309100"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-sky-500 rounded-full font-semibold hover:bg-sky-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (703) 530-9100
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition-colors border border-sky-400"
                >
                  {isEnglish ? "Contact Us" : "Contactenos"}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
