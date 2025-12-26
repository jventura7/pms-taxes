"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your backend or email service
    console.log("Form submitted:", formData);
    alert(
      t.nav.contact === "Contact"
        ? "Thank you for your message! We will get back to you soon."
        : "Gracias por su mensaje! Nos pondremos en contacto pronto."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" data-theme="light" className="bg-[#fdf8ec] py-24">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-16">
        <div className="space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs text-stone-500">{t.contact.title}</p>
          <h2 className="text-4xl font-semibold text-stone-900">{t.contact.subtitle}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-stone-700">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">{t.contact.phone}</p>
              <a href="tel:+17035309100" className="text-3xl font-semibold text-stone-900">
                (703) 530-9100
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">{t.contact.email}</p>
              <a href="mailto:info@pms-taxes.com" className="text-lg text-stone-900">
                info@pms-taxes.com
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">{t.contact.hours}</p>
              <p className="whitespace-pre-line text-stone-700">{t.contact.hoursValue}</p>
            </div>
            <div className="rounded-3xl overflow-hidden h-64 bg-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.8!2d-77.1!3d38.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDUxJzAwLjAiTiA3N8KwMDYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
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

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-stone-200 rounded-2xl px-4 py-3 focus:border-stone-900 focus:outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-stone-200 rounded-2xl px-4 py-3 focus:border-stone-900 focus:outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-stone-200 rounded-2xl px-4 py-3 focus:border-stone-900 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-stone-200 rounded-2xl px-4 py-3 focus:border-stone-900 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-stone-900 text-white py-3 font-semibold hover:bg-black transition-colors"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
