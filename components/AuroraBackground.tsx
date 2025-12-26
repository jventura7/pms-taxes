"use client";

import { ReactNode } from "react";

interface AuroraBackgroundProps {
  children?: ReactNode;
  animated?: boolean;
  theme?: "light" | "dark";
  palette?: "warm" | "cool";
  className?: string;
}

export default function AuroraBackground({
  children,
  animated = true,
  theme = "dark",
  palette = "warm",
  className = "",
}: AuroraBackgroundProps) {
  const paletteClass = palette === "cool" ? "aurora-cool" : "aurora-warm";
  const backgroundColor = theme === "light" ? "bg-[#f7f9ff]" : "bg-[#0d0d1a]";

  return (
    <div
      data-theme={theme}
      className={`relative min-h-screen overflow-hidden ${backgroundColor} ${paletteClass} ${className}`}
    >
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none select-none ${
          animated ? "aurora-animated" : ""
        }`}
      >
        <div className="aurora-blob blob-one" />
        <div className="aurora-blob blob-two" />
        <div className="aurora-blob blob-three" />
        <div className="aurora-blob blob-four" />
      </div>
      <div className="relative z-10">{children}</div>
      <style jsx>{`
        .aurora-blob {
          position: absolute;
          border-radius: 999px;
          filter: blur(180px);
          opacity: 0.45;
          will-change: transform;
        }
        .blob-one {
          width: clamp(320px, 40vw, 580px);
          height: clamp(320px, 40vw, 580px);
          top: -10%;
          left: -5%;
          background: rgba(255, 107, 53, 0.5);
        }
        .blob-two {
          width: clamp(280px, 35vw, 500px);
          height: clamp(280px, 35vw, 500px);
          top: 15%;
          right: 5%;
          background: rgba(214, 42, 208, 0.4);
        }
        .blob-three {
          width: clamp(240px, 30vw, 450px);
          height: clamp(240px, 30vw, 450px);
          bottom: 10%;
          left: 30%;
          background: rgba(123, 44, 191, 0.35);
        }
        .blob-four {
          width: clamp(200px, 25vw, 320px);
          height: clamp(200px, 25vw, 320px);
          bottom: 5%;
          right: -5%;
          background: rgba(58, 12, 163, 0.3);
        }
        .aurora-animated .aurora-blob {
          animation: floatPulse 22s ease-in-out infinite;
        }
        .aurora-animated .blob-two {
          animation-delay: 6s;
        }
        .aurora-animated .blob-three {
          animation-delay: 12s;
        }
        .aurora-animated .blob-four {
          animation-delay: 3s;
        }
        .aurora-cool .blob-one {
          background: rgba(79, 156, 249, 0.45);
        }
        .aurora-cool .blob-two {
          background: rgba(73, 232, 244, 0.4);
        }
        .aurora-cool .blob-three {
          background: rgba(91, 119, 255, 0.32);
        }
        .aurora-cool .blob-four {
          background: rgba(19, 61, 154, 0.35);
        }
        @keyframes floatPulse {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -4%, 0) scale(1.07);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
