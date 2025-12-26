"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const megaContent = {
  what: {
    featureLinks: ["Events", "Insights", "Contact"],
    expertise: [
      ["Transformation", "Strategy", "Operations", "Sustainability"],
      ["Finance", "Digital", "Commercial", "People"],
      ["Communication", "Leadership", "Projects"],
    ],
    industries: [
      "Renewable energy",
      "Public sector",
      "Healthcare",
      "Transport & logistics",
      "Consumer goods",
      "Private equity",
      "Financial services",
      "Life science",
      "Industrial goods",
    ],
    collections: [
      { title: "Sustainability reimagined", label: "Article series" },
      { title: "Navigating AI", label: "Featured playbook" },
    ],
    partners: ["The Tech Collective", "Is It A Bird", "Implement Learning Institute"],
  },
  who: {
    featureLinks: ["Leadership", "Culture", "Community"],
    expertise: [
      ["Our people", "Leadership team", "Advisory council"],
      ["Values", "Inclusion", "Volunteer initiatives"],
    ],
    industries: ["Careers", "Scholarships", "Mentorship", "Alumni network"],
    collections: [
      { title: "Life at PMS", label: "Stories" },
      { title: "Voices", label: "Podcast" },
    ],
    partners: ["PMS Foundation", "Community grants", "Scholar network"],
  },
  join: {
    featureLinks: ["Opportunities", "Development", "Events"],
    expertise: [
      ["Consulting roles", "Specialists", "Internships"],
      ["Benefits", "Learning path", "Mentorship"],
    ],
    industries: ["Open roles", "Graduate program", "Remote positions", "Talent community"],
    collections: [
      { title: "Inside PMS", label: "Recruitment blog" },
      { title: "Future Leaders", label: "Graduate hub" },
    ],
    partners: ["Recruiting team", "Referral program", "Campus visits"],
  },
};

type MegaTab = keyof typeof megaContent;

export default function Header() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<MegaTab>("what");
  const [sectionTheme, setSectionTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMegaOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-theme]"));
    if (!sections.length) return;

    const detectTheme = () => {
      const offset = 120;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          const theme = section.dataset.theme;
          if (theme === "light" || theme === "dark") {
            setSectionTheme(theme);
          }
          return;
        }
      }
    };

    detectTheme();
    window.addEventListener("scroll", detectTheme, { passive: true });
    window.addEventListener("resize", detectTheme);

    return () => {
      window.removeEventListener("scroll", detectTheme);
      window.removeEventListener("resize", detectTheme);
    };
  }, []);

  const navItems = [
    { type: "mega" as const, label: "What we do", tab: "what" as MegaTab },
    { type: "mega" as const, label: "Who we are", tab: "who" as MegaTab },
    { type: "mega" as const, label: "Join us", tab: "join" as MegaTab },
  ];

  const openMega = (tab: MegaTab) => {
    setActiveTab(tab);
    setIsMegaOpen(true);
  };

  const isDarkContext = sectionTheme === "dark";
  const headerBg = isMegaOpen
    ? "bg-white"
    : isDarkContext
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md";
  const headerText = isMegaOpen
    ? "text-stone-900"
    : isDarkContext
      ? "text-white"
      : "text-stone-900";
  const headerBorder = isMegaOpen
    ? "border-stone-300"
    : isDarkContext
      ? "border-white/30"
      : "border-stone-200";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg} ${headerText}`}>
        {/* Full-width container so the underline and nav stretch edge to edge like the reference */}
        <div className="px-4 sm:px-6 lg:px-10">
          <div className={`flex items-center justify-between h-20 border-b ${headerBorder}`}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/PMS-WEB-LOGO-1.gif"
                alt="Professional Multiservices LLC"
                width={180}
                height={74}
                priority
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop navigation switches color with the header theme */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`font-medium transition-colors ${
                      isMegaOpen
                        ? "text-stone-900 hover:text-stone-600"
                        : isDarkContext
                          ? "text-white hover:text-white/80"
                          : "text-stone-900 hover:text-stone-600"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onMouseEnter={() => openMega(item.tab)}
                    onFocus={() => openMega(item.tab)}
                    onClick={() => openMega(item.tab)}
                    className={`pb-2 font-medium uppercase tracking-wide text-sm border-b-2 transition-colors ${
                      isMegaOpen && activeTab === item.tab
                        ? "border-stone-900 text-stone-900"
                        : isMegaOpen
                          ? "border-transparent text-stone-600 hover:text-stone-900"
                          : isDarkContext
                            ? "border-transparent text-white hover:text-white/80"
                            : "border-transparent text-stone-900 hover:text-stone-600"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isMegaOpen
                  ? "text-stone-900 hover:bg-stone-200"
                  : isDarkContext
                    ? "text-white hover:bg-white/10"
                    : "text-stone-900 hover:bg-stone-200"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className={`md:hidden py-4 border-t ${
                isMegaOpen
                  ? "border-stone-200 text-stone-900"
                  : isDarkContext
                    ? "border-white/20 text-white"
                    : "border-stone-200 text-stone-900"
              }`}
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                        isMegaOpen
                          ? "hover:bg-stone-100"
                          : isDarkContext
                            ? "hover:bg-white/10"
                            : "hover:bg-stone-100"
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => {
                        openMega(item.tab);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left font-medium py-2 px-4 rounded-lg transition-colors ${
                        isMegaOpen
                          ? "hover:bg-stone-100"
                          : isDarkContext
                            ? "hover:bg-white/10"
                            : "hover:bg-stone-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Half-screen mega panel */}
      <div
        className={`fixed inset-y-0 right-0 z-40 transition-all duration-300 ease-out ${
          isMegaOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        aria-hidden={!isMegaOpen}
      >
        <div
          className="hidden md:block absolute inset-y-0 right-full w-screen bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMegaOpen(false)}
        />
        <div className="relative h-full w-screen md:w-[min(560px,50vw)] bg-white text-stone-900 border-l border-stone-200 shadow-2xl overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-300">
            <div className="flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
              {(["what", "who", "join"] as MegaTab[]).map((tab) => (
                <button
                  key={tab}
                  onMouseEnter={() => openMega(tab)}
                  onFocus={() => openMega(tab)}
                  onClick={() => openMega(tab)}
                  className={`pb-1 border-b-2 transition-colors ${
                    activeTab === tab ? "border-stone-900 text-stone-900" : "border-transparent hover:text-stone-900"
                  }`}
                >
                  {tab === "what" ? "What we do" : tab === "who" ? "Who we are" : "Join us"}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMegaOpen(false)}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-500"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 sm:px-10 py-8 space-y-10">
            <div className="space-y-6">
              <ul className="space-y-2 text-lg font-medium text-stone-900">
                {megaContent[activeTab].featureLinks.map((link) => (
                  <li key={link} className="flex items-center justify-between">
                    <span>{link}</span>
                    <span className="text-xs text-stone-400">○</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Expertise areas</p>
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  {megaContent[activeTab].expertise.map((group, index) => (
                    <div key={index} className="space-y-2">
                      <p className="font-semibold">{group[0]}</p>
                      <ul className="space-y-1 text-sm text-stone-700">
                        {group.slice(1).map((item) => (
                          <li key={item} className="leading-6">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-stone-300 pt-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Featured industries</p>
                <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-stone-700">
                  {megaContent[activeTab].industries.map((industry) => (
                    <li key={industry} className="leading-6">
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Collections</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {megaContent[activeTab].collections.map((collection) => (
                    <div
                      key={collection.title}
                      className="bg-stone-900 text-white p-6 rounded-2xl flex flex-col gap-6 hover:bg-stone-800 transition-colors"
                    >
                      <div>
                        <p className="text-sm text-stone-300">{collection.label}</p>
                        <p className="text-lg font-semibold">{collection.title}</p>
                      </div>
                      <span className="text-right text-xl">&#8594;</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2 border-t border-stone-300 pt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Friends & family</p>
                <ul className="space-y-2 text-sm">
                  {megaContent[activeTab].partners.map((partner) => (
                    <li key={partner} className="flex items-center justify-between hover:text-stone-900">
                      <span>{partner}</span>
                      <span>&#8594;</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
