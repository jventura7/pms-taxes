"use client";

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import { useLanguage } from "@/lib/LanguageContext";

interface GoogleReviewsProps {
  featurableId?: string;
}

export default function GoogleReviews({ featurableId }: GoogleReviewsProps) {
  const { t } = useLanguage();

  // If no Featurable ID is provided, show instructions
  if (!featurableId) {
    return (
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 text-center">
        <p className="text-gray-600 mb-2">
          {t.nav.contact === "Contact"
            ? "To display live Google reviews, configure your Featurable widget ID."
            : "Para mostrar resenas de Google en vivo, configure su ID de widget de Featurable."}
        </p>
        <a
          href="https://featurable.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:text-sky-600 font-medium"
        >
          {t.nav.contact === "Contact"
            ? "Get your free widget ID at Featurable.com"
            : "Obtenga su ID de widget gratis en Featurable.com"}
        </a>
      </div>
    );
  }

  return (
    <div className="google-reviews-wrapper">
      <ReactGoogleReviews
        layout="carousel"
        featurableId={featurableId}
        theme="light"
        maxCharacters={200}
        structuredData={true}
      />
    </div>
  );
}
