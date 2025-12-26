"use client";

import { useEffect, useRef } from "react";

interface GoogleReviewsProps {
  featurableId?: string;
}

export default function GoogleReviews({ featurableId }: GoogleReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!featurableId || !containerRef.current) return;

    // Load the Featurable script
    const script = document.createElement("script");
    script.src = "https://featurable.com/assets/v2/grid_default.min.js";
    script.defer = true;
    script.charset = "UTF-8";
    containerRef.current.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (containerRef.current) {
        const existingScript = containerRef.current.querySelector("script");
        if (existingScript) {
          containerRef.current.removeChild(existingScript);
        }
      }
    };
  }, [featurableId]);

  if (!featurableId) {
    return null;
  }

  return (
    <div ref={containerRef}>
      <div
        id={`featurable-${featurableId}`}
        data-featurable-async=""
      />
    </div>
  );
}
