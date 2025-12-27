"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      isEnglish
        ? "Thank you for your message! We will get back to you soon."
        : "Gracias por su mensaje! Nos pondremos en contacto pronto."
    );
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const services = isEnglish
    ? [
        "Tax Preparation",
        "ITIN Application",
        "Business Services",
        "Bookkeeping",
        "Notarization",
        "Other",
      ]
    : [
        "Preparacion de Impuestos",
        "Solicitud de ITIN",
        "Servicios Empresariales",
        "Contabilidad",
        "Notarizacion",
        "Otro",
      ];

  const contactInfo = [
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
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      titleEn: "Phone",
      titleEs: "Teléfono",
      content: "(703) 530-9100",
      href: "tel:+17035309100",
      subtitleEn: "Call us anytime during business hours",
      subtitleEs: "Llámenos durante el horario de atención",
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
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      titleEn: "Email",
      titleEs: "Correo Electrónico",
      content: "info@pms-taxes.com",
      href: "mailto:info@pms-taxes.com",
      subtitleEn: "We'll respond within 24 hours",
      subtitleEs: "Responderemos dentro de 24 horas",
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
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      titleEn: "Location",
      titleEs: "Ubicación",
      content: "9818 Liberia Ave, Manassas, VA 20110",
      href: "https://www.google.com/maps/search/9818+Liberia+Ave+Manassas+VA+20110",
      subtitleEn: "Get Directions",
      subtitleEs: "Obtener Direcciones",
      isExternal: true,
    },
  ];

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
              {isEnglish ? "Get in Touch" : "Contáctenos"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {isEnglish ? "Contact " : "Contacte a "}
              <span className="text-primary">Professional Multiservices</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {isEnglish
                ? "We're here to help with all your tax and business needs. Reach out today for a free consultation."
                : "Estamos aquí para ayudarle con todas sus necesidades fiscales y empresariales. Contáctenos hoy para una consulta gratuita."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary via-sky-500 to-primary" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-size-[24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.isExternal ? "_blank" : undefined}
                rel={info.isExternal ? "noopener noreferrer" : undefined}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {isEnglish ? info.titleEn : info.titleEs}
                    </h3>
                    <p className="text-white/90 font-medium">{info.content}</p>
                    <p className="text-white/70 text-sm mt-1 flex items-center gap-1">
                      {isEnglish ? info.subtitleEn : info.subtitleEs}
                      {info.isExternal && (
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-linear-to-b from-sky-50/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Info & Hours */}
            <div>
              <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
                {isEnglish ? "Visit Us" : "Visítenos"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {isEnglish ? "Our Office" : "Nuestra Oficina"}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {isEnglish
                  ? "Located in the heart of Manassas, Virginia, our office is easily accessible and ready to serve you. Walk-ins are welcome during business hours."
                  : "Ubicados en el corazón de Manassas, Virginia, nuestra oficina es fácilmente accesible y está lista para servirle. Las visitas sin cita son bienvenidas durante el horario de atención."}
              </p>

              {/* Business Hours Card */}
              <div className="relative mb-8">
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {isEnglish ? "Business Hours" : "Horario de Atención"}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {isEnglish ? "Monday - Friday" : "Lunes - Viernes"}
                      </span>
                      <span className="font-medium text-gray-900">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {isEnglish ? "Saturday" : "Sábado"}
                      </span>
                      <span className="font-medium text-gray-900">
                        10:00 AM - 3:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {isEnglish ? "Sunday" : "Domingo"}
                      </span>
                      <span className="text-gray-500">
                        {isEnglish ? "Closed" : "Cerrado"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
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
                <Button asChild variant="secondary" size="lg">
                  <a
                    href="https://www.google.com/maps/search/9818+Liberia+Ave+Manassas+VA+20110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {isEnglish ? "Get Directions" : "Obtener Direcciones"}
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isEnglish ? "Send Us a Message" : "Envíenos un Mensaje"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {isEnglish
                    ? "Fill out the form below and we'll get back to you shortly."
                    : "Complete el formulario a continuación y nos pondremos en contacto pronto."}
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        {isEnglish ? "Your Name" : "Su Nombre"} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        {isEnglish ? "Phone Number" : "Número de Teléfono"}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {isEnglish ? "Your Email" : "Su Correo Electrónico"} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {isEnglish
                        ? "Service Interested In"
                        : "Servicio de Interés"}
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white"
                    >
                      <option value="">
                        {isEnglish
                          ? "Select a service"
                          : "Seleccione un servicio"}
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {isEnglish ? "Your Message" : "Su Mensaje"} *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none bg-white"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    {isEnglish ? "Send Message" : "Enviar Mensaje"}
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
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-linear-to-t from-sky-100/40 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              {isEnglish ? "Our Location" : "Nuestra Ubicación"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? "Find Us" : "Encuéntrenos"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {isEnglish
                ? "Visit our office in Manassas, Virginia. We're conveniently located with easy parking access."
                : "Visite nuestra oficina en Manassas, Virginia. Estamos convenientemente ubicados con fácil acceso de estacionamiento."}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-primary/10 to-sky-500/10 blur-2xl" />
            <div className="relative overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.5!2d-77.4686!3d38.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65d8a5e85e7c1%3A0x1234567890abcdef!2s9818%20Liberia%20Ave%2C%20Manassas%2C%20VA%2020110!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
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
                {isEnglish ? "Ready to Get Started?" : "¿Listo para Comenzar?"}
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
                {isEnglish
                  ? "Don't wait - contact us today for a free consultation and let us help you with your tax and business needs."
                  : "No espere - contáctenos hoy para una consulta gratuita y permítanos ayudarle con sus necesidades fiscales y empresariales."}
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
                  <a href="mailto:info@pms-taxes.com">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {isEnglish ? "Email Us" : "Enviar Correo"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
