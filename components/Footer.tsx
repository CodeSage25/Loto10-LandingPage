"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// 📋 Liens rapides du footer
const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Comment Jouer", href: "/#comment-jouer" },
  { label: "Gains", href: "/#gains" },
  { label: "Loto Bonus", href: "/#loto-bonus" },
  { label: "FAQ", href: "/#faq" },
  { label: "Gagnants", href: "/gagnants" },
];

const legalLinks = [
  {
    label: "Jouer sur IziLoto.cm",
    href: "https://iziloto.cm/",
    external: true,
  },
  {
    label: "Page Facebook",
    href: "https://www.facebook.com/people/IziLotocm/61585217354848/",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-blue-dark to-[#080b2e] text-white">
      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ═══ Colonne 1 : Logo + description ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Image
              src="/images/Logo_Loto10.png"
              alt="Logo LOTO 10"
              width={160}
              height={55}
              className="h-14 w-auto mb-6"
            />
            <p className="text-white/70 leading-relaxed max-w-md mb-6">
              LOTO 10 est un jeu de loterie exclusif disponible sur IziLoto.cm.
              Tentez votre chance toutes les 30 minutes et gagnez jusqu&apos;à
              10 000 000 F CFA !
            </p>
            <p className="text-white/50 text-sm">
              Disponible exclusivement sur{" "}
              <Link
                href="https://iziloto.cm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-gold-light 
                           underline underline-offset-2 transition-colors"
              >
                iziloto.cm
              </Link>
            </p>
          </motion.div>

          {/* ═══ Colonne 2 : Liens rapides ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-bold text-lg mb-6 text-white">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold 
                               transition-colors duration-200 text-sm
                               flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ═══ Colonne 3 : Liens externes ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-lg mb-6 text-white">
              Liens utiles
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-brand-gold 
                               transition-colors duration-200 text-sm
                               flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold/50" />
                    {link.label}
                    {link.external && (
                      <span className="text-xs text-white/30">↗</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Logos paiement dans le footer */}
            <div className="mt-8">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
                Moyens de paiement
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/image_Mtn_momo.png"
                  alt="MTN Mobile Money"
                  width={80}
                  height={32}
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/images/orange_money.png"
                  alt="Orange Money"
                  width={80}
                  height={32}
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══ Barre de copyright ═══ */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center sm:text-left">
              © 2026. Tous droits réservés.
            </p>
            <p className="text-white/30 text-xs text-center sm:text-right">
              Jeu interdit aux moins de 21 ans. Jouez responsable.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
