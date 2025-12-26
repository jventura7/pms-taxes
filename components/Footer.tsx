"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer data-theme="dark" className="bg-[#01030a] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-16 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4 max-w-lg">
            <Image
              src="/PMS-WEB-LOGO-1.gif"
              alt="Professional Multiservices LLC"
              width={200}
              height={80}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-white/70">{t.footer.description}</p>
          </div>
          <div className="flex gap-10 text-sm uppercase tracking-[0.3em]">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white/70 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-8 text-sm text-white/70">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.3em] text-xs text-white/50">{t.footer.contactInfo}</p>
            <a href="tel:+17035309100" className="text-lg text-white">
              (703) 530-9100
            </a>
            <a href="mailto:info@pms-taxes.com" className="block">
              info@pms-taxes.com
            </a>
          </div>
          <p>&copy; {currentYear} Professional Multiservices LLC. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
