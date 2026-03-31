"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// 📋 Les liens de navigation — centralisés pour faciliter les modifications
const navLinks = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Comment Jouer", href: "/#comment-jouer" },
  { label: "Gains", href: "/#gains" },
  { label: "Loto Bonus", href: "/#loto-bonus" },
  { label: "FAQ", href: "/#faq" },
  { label: "Gagnants", href: "/gagnants" },
];

export default function Header() {
  // 📱 État pour le menu mobile (ouvert/fermé)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 🎨 État pour le fond du header au scroll
  const [scrolled, setScrolled] = useState(false);

  // 👂 Écouter le scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      // Si on a scrollé de plus de 20px, on active le fond blanc + ombre
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // 🧹 Nettoyage : on retire l'écouteur quand le composant est démonté
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ← GAUCHE : Logo cliquable */}
          <Link
            href="/#accueil"
            // target="_blank"
            // rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/images/Logo_Loto10.png"
              alt="Logo LOTO 10"
              width={140}
              height={50}
              className="h-12 w-auto"
              priority // Charge en priorité car visible immédiatement
            />
          </Link>

          {/* ← CENTRE : Menu horizontal (desktop uniquement) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-brand-blue-dark 
                           hover:text-brand-gold transition-colors duration-200
                           rounded-lg hover:bg-brand-gold/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* → DROITE : Bouton S'inscrire (desktop) + Burger (mobile) */}
          <div className="flex items-center space-x-4">
            {/* Bouton S'inscrire — visible uniquement en desktop */}
            <Link
              href="https://iziloto.cm/register"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-6 py-2.5 
                         bg-brand-gold text-brand-blue-dark font-bold text-sm
                         rounded-full hover:bg-brand-gold-light 
                         transition-all duration-200 hover:shadow-lg
                         hover:shadow-brand-gold/30 hover:scale-105"
            >
              S&apos;inscrire
            </Link>

            {/* 📱 Bouton burger — visible uniquement en mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-brand-blue 
                         hover:bg-gray-100 transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 MENU MOBILE — s'affiche quand mobileMenuOpen est true */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-base font-semibold 
                           text-brand-blue-dark hover:text-brand-gold 
                           hover:bg-brand-gold/10 rounded-lg
                           transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Bouton S'inscrire en mobile */}
            <Link
              href="https://iziloto.cm/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="block mt-4 text-center px-6 py-3 
                         bg-brand-gold text-brand-blue-dark font-bold
                         rounded-full hover:bg-brand-gold-light 
                         transition-all duration-200"
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
