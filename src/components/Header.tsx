"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Orcamento", href: "#calculadora" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Detect scroll for navbar background transition
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href.replace("#", ""));
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
          : "bg-white/55 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-[var(--color-dark)] text-lg font-bold text-white">
            R
          </div>
          <div className="leading-tight">
            <span className="text-base font-bold tracking-tight text-[var(--color-dark)]">
              Rick Fretes
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-gray-400">
              Mudancas &amp; Transportes
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="group relative py-4 text-[13px] font-medium transition-colors"
                style={{
                  color: isActive ? "#2c4c74" : "#5c7fa3",
                }}
              >
                <span className="group-hover:text-[#2c4c74] transition-colors">
                  {link.label}
                </span>
                {/* Active indicator line */}
                <span
                  className="absolute bottom-2 left-0 right-0 h-[2px] transition-all duration-300"
                  style={{
                    backgroundColor: "#2c4c74",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
                {/* Hover indicator line */}
                {!isActive && (
                  <span className="absolute bottom-2 left-0 right-0 h-[2px] bg-[#2c4c74] opacity-0 transition-all duration-200 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100" />
                )}
              </a>
            );
          })}
          <a
            href="#calculadora"
            onClick={() => handleNavClick("#calculadora")}
            className="rounded bg-[var(--color-brand)] px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
          >
            Solicitar orcamento
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative block py-2.5 text-sm font-medium transition-colors"
                style={{
                  color: isActive ? "#2c4c74" : "#5c7fa3",
                }}
                onClick={() => handleNavClick(link.href)}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] bg-[#2c4c74] rounded-full" />
                )}
                <span className={isActive ? "pl-3" : ""}>{link.label}</span>
              </a>
            );
          })}
          <a
            href="#calculadora"
            className="mt-2 block rounded bg-[var(--color-brand)] px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => handleNavClick("#calculadora")}
          >
            Solicitar orcamento
          </a>
        </nav>
      )}
    </header>
  );
}
