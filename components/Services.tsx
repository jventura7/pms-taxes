"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface ServiceLink {
  name: string;
  href?: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  links: ServiceLink[];
  tags: string[];
}

const ArrowIcon = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export default function Services() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("tax");

  const serviceCategories: ServiceCategory[] = [
    {
      id: "tax",
      title: t.services.tax.title,
      description: t.services.tax.description,
      links: t.services.tax.items.map((item) => ({ name: item })),
      tags: t.services.tax.items.slice(0, 4),
    },
    {
      id: "itin",
      title: t.services.itin.title,
      description: t.services.itin.description,
      links: t.services.itin.items.map((item) => ({ name: item })),
      tags: t.services.itin.items.slice(0, 4),
    },
    {
      id: "business",
      title: t.services.business.title,
      description: t.services.business.description,
      links: t.services.business.items.map((item) => ({ name: item })),
      tags: t.services.business.items.slice(0, 4),
    },
    {
      id: "additional",
      title: t.services.additional.title,
      description: t.services.additional.description,
      links: t.services.additional.items.map((item) => ({ name: item })),
      tags: t.services.additional.items.slice(0, 4),
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            {t.services.subtitle}
          </p>
        </div>

        {/* Main Content - Sidebar + Visual */}
        <div className="flex flex-col gap-2 lg:flex-row overflow-hidden ">
          {/* Sidebar */}
          <div className="lg:w-[40%] bg-[#f7f6f5] p-6 lg:p-8">
            {/* Accordion Items */}
            <div className="space-y-1">
              {serviceCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <div key={category.id} className="relative">
                    {/* Category Header */}
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className="w-full text-left py-4 focus:outline-none group"
                    >
                      <div className="flex items-center gap-3">
                        {/* Dot Indicator */}
                        <div className="relative w-3 h-3 shrink-0">
                          <div
                            className={`absolute inset-0 rounded-full bg-primary transition-opacity duration-300 ${
                              isActive ? "opacity-5" : "opacity-0"
                            }`}
                            style={{ transform: "scale(2.5)" }}
                          />
                          <div
                            className={`absolute inset-0 rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-primary"
                                : "bg-gray-300 group-hover:bg-gray-400"
                            }`}
                          />
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            isActive
                              ? "text-primary"
                              : "text-gray-800 group-hover:text-gray-900"
                          }`}
                        >
                          {category.title}
                        </h3>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-6 pb-4">
                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {category.description}
                        </p>

                        {/* Service Links */}
                        <div className="space-y-2">
                          {category.links.map((link, index) => (
                            <a
                              key={index}
                              href={link.href || "#contact"}
                              className="group/link flex items-center justify-between py-2 text-gray-500 hover:text-gray-800 transition-colors"
                            >
                              <span className="text-sm">{link.name}</span>
                              <div className="opacity-0 group-hover/link:opacity-100 transition-opacity transform translate-x-0 group-hover/link:translate-x-1">
                                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                  <ArrowIcon />
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Browse All Link */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 group"
              >
                <span className="text-sm font-medium text-gray-700 border-b-2 border-gray-200 pb-0.5 group-hover:border-gray-400 transition-colors">
                  {t.nav.contact === "Contact"
                    ? "Get a free consultation"
                    : "Obtenga una consulta gratuita"}
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                  <ArrowIcon />
                </div>
              </a>
            </div>
          </div>

          {/* Visual Section */}
          <div className="lg:w-[60%] relative min-h-100 lg:min-h-150 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
                }}
              />
            </div>

            {/* Floating Card */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full max-w-md transform scale-100 lg:scale-110">
                <div className="backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 p-1">
                  <div className="bg-gray-900/90 backdrop-blur-xl rounded-lg p-6 space-y-4">
                    {/* Header Card */}
                    <div className="bg-gray-800/80 rounded-lg p-4">
                      <h4 className="text-white text-sm font-semibold mb-1">
                        {t.nav.contact === "Contact"
                          ? "Professional Tax Services"
                          : "Servicios Fiscales Profesionales"}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {t.nav.contact === "Contact"
                          ? "Expert guidance for individuals and businesses"
                          : "Orientación experta para individuos y empresas"}
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800/80 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">
                          {t.nav.contact === "Contact"
                            ? "Clients Served"
                            : "Clientes Atendidos"}
                        </p>
                        <p className="text-white text-lg font-bold">500+</p>
                      </div>
                      <div className="bg-gray-800/80 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">
                          {t.nav.contact === "Contact"
                            ? "Years Experience"
                            : "Años de Experiencia"}
                        </p>
                        <p className="text-white text-lg font-bold">20+</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="bg-gray-800/80 rounded-lg p-4">
                      <p className="text-gray-400 text-xs mb-2">
                        {t.nav.contact === "Contact"
                          ? "Highlights"
                          : "Destacados"}
                      </p>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {t.nav.contact === "Contact"
                          ? "Bilingual services in English and Spanish. Personalized attention for every client's unique tax situation."
                          : "Servicios bilingües en inglés y español. Atención personalizada para la situación fiscal única de cada cliente."}
                      </p>
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800/80 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">
                          {t.nav.contact === "Contact"
                            ? "Satisfaction Rate"
                            : "Tasa de Satisfacción"}
                        </p>
                        <p className="text-white text-lg font-bold">98%</p>
                      </div>
                      <div className="bg-gray-800/80 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">
                          {t.nav.contact === "Contact"
                            ? "Returns Filed"
                            : "Declaraciones Presentadas"}
                        </p>
                        <p className="text-white text-lg font-bold">10K+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
