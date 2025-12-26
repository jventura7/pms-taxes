"use client";

import { useLanguage } from "@/lib/LanguageContext";

const serviceIcons = {
  tax: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
      />
    </svg>
  ),
  itin: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
      />
    </svg>
  ),
  business: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  additional: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
};

export default function Services() {
  const { t } = useLanguage();

  const services = [
    { key: "tax", icon: serviceIcons.tax, data: t.services.tax },
    { key: "itin", icon: serviceIcons.itin, data: t.services.itin },
    { key: "business", icon: serviceIcons.business, data: t.services.business },
    { key: "additional", icon: serviceIcons.additional, data: t.services.additional },
  ];

  return (
    <section id="services" data-theme="light" className="panel py-24">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-16">
        <div className="text-left space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs text-stone-500">Services</p>
          <h2 className="text-4xl font-semibold text-stone-900">{t.services.title}</h2>
          <p className="text-lg text-stone-600 max-w-2xl">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.key} className="space-y-5 border-b border-stone-200 pb-10">
              <div className="flex items-center gap-4 text-stone-600">
                <div className="w-14 h-14 rounded-full bg-stone-900/5 flex items-center justify-center text-stone-700">
                  {service.icon}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-stone-500">0{service.key === "tax" ? 1 : service.key === "itin" ? 2 : service.key === "business" ? 3 : 4}</p>
                  <h3 className="text-2xl font-semibold text-stone-900">{service.data.title}</h3>
                </div>
              </div>
              <p className="text-stone-600">{service.data.description}</p>
              <ul className="space-y-2 text-stone-700">
                {service.data.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center justify-between">
                    <span>{item}</span>
                    <span className="text-sm text-stone-400">→</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-stone-900 font-medium"
          >
            {t.nav.contact === "Contact" ? "Looking for help? Contact us" : "Buscas ayuda? Contactanos"}
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
