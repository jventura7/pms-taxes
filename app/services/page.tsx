"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "tax",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    ),
    title: { en: "Tax Preparation", es: "Preparación de Impuestos" },
    description: {
      en: "Professional tax preparation for individuals and businesses with electronic filing directly to the IRS.",
      es: "Preparación profesional de impuestos para individuos y empresas con presentación electrónica directamente al IRS.",
    },
    items: {
      en: [
        "Personal Tax Returns (1040)",
        "Business Tax Returns",
        "Federal & State Filing",
        "Tax Planning & Consultation",
        "Amended Returns",
        "Prior Year Returns",
      ],
      es: [
        "Declaraciones Personales (1040)",
        "Declaraciones Empresariales",
        "Declaraciones Federales y Estatales",
        "Planificación y Consulta Fiscal",
        "Declaraciones Enmendadas",
        "Declaraciones de Años Anteriores",
      ],
    },
  },
  {
    id: "itin",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: { en: "ITIN Services", es: "Servicios de ITIN" },
    description: {
      en: "Complete assistance with Individual Taxpayer Identification Number applications and renewals.",
      es: "Asistencia completa con solicitudes y renovaciones de Número de Identificación Personal del Contribuyente.",
    },
    items: {
      en: [
        "New ITIN Applications",
        "ITIN Renewals",
        "Document Certification",
        "W-7 Form Preparation",
        "Status Tracking",
        "Expedited Processing",
      ],
      es: [
        "Nuevas Solicitudes de ITIN",
        "Renovaciones de ITIN",
        "Certificación de Documentos",
        "Preparación del Formulario W-7",
        "Seguimiento de Estado",
        "Procesamiento Acelerado",
      ],
    },
  },
  {
    id: "business",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: { en: "Business Services", es: "Servicios Empresariales" },
    description: {
      en: "Comprehensive business solutions from formation to ongoing financial management.",
      es: "Soluciones empresariales integrales desde la formación hasta la gestión financiera continua.",
    },
    items: {
      en: [
        "Business Formation (LLC, Corp)",
        "EIN Applications",
        "Bookkeeping & Accounting",
        "Payroll Processing",
        "Financial Reporting",
        "Business Licenses",
      ],
      es: [
        "Formación de Empresas (LLC, Corp)",
        "Solicitudes de EIN",
        "Contabilidad y Teneduría",
        "Procesamiento de Nómina",
        "Informes Financieros",
        "Licencias Comerciales",
      ],
    },
  },
  {
    id: "notary",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: { en: "Notary Services", es: "Servicios de Notarización" },
    description: {
      en: "Professional notarization services for all your important documents.",
      es: "Servicios profesionales de notarización para todos sus documentos importantes.",
    },
    items: {
      en: [
        "Document Notarization",
        "Affidavits",
        "Power of Attorney",
        "Real Estate Documents",
        "Legal Documents",
        "Certified Copies",
      ],
      es: [
        "Notarización de Documentos",
        "Declaraciones Juradas",
        "Poder Notarial",
        "Documentos de Bienes Raíces",
        "Documentos Legales",
        "Copias Certificadas",
      ],
    },
  },
  {
    id: "translation",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: { en: "Translation Services", es: "Servicios de Traducción" },
    description: {
      en: "Professional document translation services between English and Spanish.",
      es: "Servicios profesionales de traducción de documentos entre inglés y español.",
    },
    items: {
      en: [
        "Document Translation",
        "Certified Translation",
        "Legal Documents",
        "Birth Certificates",
        "Academic Records",
        "Immigration Documents",
      ],
      es: [
        "Traducción de Documentos",
        "Traducción Certificada",
        "Documentos Legales",
        "Actas de Nacimiento",
        "Registros Académicos",
        "Documentos de Inmigración",
      ],
    },
  },
  {
    id: "additional",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: { en: "Additional Services", es: "Servicios Adicionales" },
    description: {
      en: "A variety of additional services to meet your personal and business needs.",
      es: "Una variedad de servicios adicionales para satisfacer sus necesidades personales y empresariales.",
    },
    items: {
      en: [
        "Vehicle Registration",
        "Travel Documents",
        "Passport Photos",
        "Money Orders",
        "Fax & Copies",
        "And More...",
      ],
      es: [
        "Registro de Vehículos",
        "Documentos de Viaje",
        "Fotos para Pasaporte",
        "Giros Postales",
        "Fax y Copias",
        "Y Más...",
      ],
    },
  },
];

export default function ServicesPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className= "shadow overflow-hidden">
            <div className="h-[340px] md:h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80"
                alt={isEnglish ? "Professional advisor" : "Asesor profesional"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-background px-8 md:px-12 py-10">
              <p className="uppercase tracking-[0.4em] text-xs text-cyan-600 mb-3">
                {isEnglish ? "Capabilities" : "Capacidades"}
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#111827] tracking-tight mb-4">
                {isEnglish ? "Our Services" : "Nuestros Servicios"}
              </h1>
              <p className="text-base md:text-lg text-[#4b5563] leading-relaxed">
                {isEnglish
                  ? "We work with individuals and businesses to solve industry-specific challenges—combining our expertise with a personal approach every step of the way."
                  : "Trabajamos con individuos y empresas para resolver desafíos específicos de la industria, combinando nuestra experiencia con un enfoque personal en cada paso."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-background border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={isEnglish ? service.title.en : service.title.es}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {isEnglish ? service.title.en : service.title.es}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    {isEnglish ? service.description.en : service.description.es}
                  </p>

                  {/* Service Items */}
                  <ul className="space-y-2">
                    {(isEnglish ? service.items.en : service.items.es)
                      .slice(0, 4)
                      .map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-primary shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    {(isEnglish ? service.items.en : service.items.es).length >
                      4 && (
                      <li className="text-primary text-sm font-medium pl-6">
                        +{" "}
                        {(isEnglish ? service.items.en : service.items.es)
                          .length - 4}{" "}
                        {isEnglish ? "more services" : "servicios más"}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              {isEnglish ? "Why Choose Us" : "Por Qué Elegirnos"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? "The Professional Difference" : "La Diferencia Profesional"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: { en: "Fast Processing", es: "Procesamiento Rápido" },
                description: { en: "Quick turnaround times", es: "Tiempos de respuesta rápidos" },
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                ),
                title: { en: "Bilingual Staff", es: "Personal Bilingüe" },
                description: { en: "English & Spanish", es: "Inglés y Español" },
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: { en: "Trusted Service", es: "Servicio Confiable" },
                description: { en: "15+ years experience", es: "15+ años de experiencia" },
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: { en: "Fair Pricing", es: "Precios Justos" },
                description: { en: "No hidden fees", es: "Sin cargos ocultos" },
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-background p-6 border border-gray-100 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {isEnglish ? item.title.en : item.title.es}
                </h3>
                <p className="text-gray-500 text-sm">
                  {isEnglish ? item.description.en : item.description.es}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background border border-gray-200 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {isEnglish ? "Transparent Pricing" : "Precios Transparentes"}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {isEnglish
                    ? "We believe in honest, upfront pricing with no hidden fees. Contact us for a free consultation and personalized quote based on your specific needs."
                    : "Creemos en precios honestos y directos sin cargos ocultos. Contáctenos para una consulta gratuita y cotización personalizada basada en sus necesidades específicas."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
                <Button asChild size="lg">
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
                    {isEnglish ? "Call Now" : "Llamar Ahora"}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    {isEnglish ? "Get a Quote" : "Obtener Cotización"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {isEnglish
                ? "Need Help Choosing a Service?"
                : "¿Necesita Ayuda para Elegir un Servicio?"}
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              {isEnglish
                ? "Our friendly, bilingual staff is here to help you find the right services for your needs. Contact us today for a free consultation."
                : "Nuestro personal amable y bilingüe está aquí para ayudarle a encontrar los servicios adecuados para sus necesidades. Contáctenos hoy para una consulta gratuita."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="secondary" size="lg">
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
                className="bg-white/15 hover:bg-white/25 text-white border border-white/20"
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
      </section>
    </>
  );
}
