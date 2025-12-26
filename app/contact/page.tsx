"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

  return (
    <>
      {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {isEnglish ? "Contact Us" : "Contactenos"}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {isEnglish
                  ? "We're here to help with all your tax and business needs. Reach out today for a free consultation."
                  : "Estamos aqui para ayudarle con todas sus necesidades fiscales y empresariales. Contactenos hoy para una consulta gratuita."}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {isEnglish ? "Get in Touch" : "Ponerse en Contacto"}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {isEnglish
                      ? "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                      : "Tiene preguntas? Nos encantaria saber de usted. Envienos un mensaje y le responderemos lo antes posible."}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-sky-500"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {isEnglish ? "Phone" : "Telefono"}
                    </h3>
                    <a
                      href="tel:+17035309100"
                      className="text-sky-500 hover:text-sky-600 text-xl font-medium"
                    >
                      (703) 530-9100
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      {isEnglish ? "Call us anytime during business hours" : "Llamenos durante el horario de atencion"}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-sky-500"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {isEnglish ? "Email" : "Correo Electronico"}
                    </h3>
                    <a
                      href="mailto:info@pms-taxes.com"
                      className="text-sky-500 hover:text-sky-600 text-xl font-medium"
                    >
                      info@pms-taxes.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      {isEnglish ? "We'll respond within 24 hours" : "Responderemos dentro de 24 horas"}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-sky-500"
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
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {isEnglish ? "Business Hours" : "Horario de Atencion"}
                    </h3>
                    <div className="text-gray-600">
                      <p>{isEnglish ? "Monday - Friday: 9:00 AM - 6:00 PM" : "Lunes - Viernes: 9:00 AM - 6:00 PM"}</p>
                      <p>{isEnglish ? "Saturday: 10:00 AM - 3:00 PM" : "Sabado: 10:00 AM - 3:00 PM"}</p>
                      <p className="text-gray-500">{isEnglish ? "Sunday: Closed" : "Domingo: Cerrado"}</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-sky-500"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {isEnglish ? "Location" : "Ubicacion"}
                    </h3>
                    <p className="text-gray-600">
                      9818 Liberia Ave<br />
                      Manassas, VA 20110
                    </p>
                    <a
                      href="https://www.google.com/maps/search/9818+Liberia+Ave+Manassas+VA+20110"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 text-sm font-medium inline-flex items-center gap-1 mt-1"
                    >
                      {isEnglish ? "Get Directions" : "Obtener Direcciones"}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {isEnglish ? "Send Us a Message" : "Envienos un Mensaje"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {isEnglish ? "Your Name" : "Su Nombre"} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-colors outline-none bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {isEnglish ? "Phone Number" : "Numero de Telefono"}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-colors outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {isEnglish ? "Your Email" : "Su Correo Electronico"} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-colors outline-none bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {isEnglish ? "Service Interested In" : "Servicio de Interes"}
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-colors outline-none bg-white"
                    >
                      <option value="">{isEnglish ? "Select a service" : "Seleccione un servicio"}</option>
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
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {isEnglish ? "Your Message" : "Su Mensaje"} *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-colors outline-none resize-none bg-white"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full py-4">
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
        </section>

        {/* Map Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isEnglish ? "Find Us" : "Encuentrenos"}
              </h2>
              <p className="text-gray-600">
                {isEnglish ? "Visit our office in Manassas, Virginia" : "Visite nuestra oficina en Manassas, Virginia"}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden h-96 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.5!2d-77.4686!3d38.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65d8a5e85e7c1%3A0x1234567890abcdef!2s9818%20Liberia%20Ave%2C%20Manassas%2C%20VA%2020110!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </section>
    </>
  );
}
