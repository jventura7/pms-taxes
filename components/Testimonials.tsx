"use client";

import { useLanguage } from "@/lib/LanguageContext";
import GoogleReviews from "./GoogleReviews";

// Set your Featurable widget ID here after creating one at https://featurable.com
// Example: const FEATURABLE_WIDGET_ID = "abc123def456";
const FEATURABLE_WIDGET_ID = ""; // Leave empty to use static testimonials

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" data-theme="light" className="panel py-24">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-12">
        <div className="space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs text-stone-500">{t.nav.testimonials}</p>
          <h2 className="text-4xl font-semibold text-stone-900">{t.testimonials.title}</h2>
          <p className="text-lg text-stone-600 max-w-2xl">{t.testimonials.subtitle}</p>
        </div>

        {FEATURABLE_WIDGET_ID ? (
          <GoogleReviews featurableId={FEATURABLE_WIDGET_ID} />
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial: { quote: string; author: string }, index: number) => (
              <div key={index} className="flex flex-col gap-6 border border-stone-200 rounded-2xl p-6 bg-white">
                <p className="text-stone-700 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center justify-between text-sm text-stone-500">
                  <span className="font-medium text-stone-900">{testimonial.author}</span>
                  <span>★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-left">
          <a
            href="https://www.google.com/search?q=Professional+Multiservices+LLC+Manassas+VA+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-900 font-medium"
          >
            {t.nav.contact === "Contact" ? "See all Google reviews" : "Ver todas las reseñas en Google"}
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
