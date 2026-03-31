"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// 🔵 Icône Facebook en SVG (Lucide a retiré cette icône dans les versions récentes)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function SuivezNous() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 🏷️ Titre */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blue-dark mb-4">
            Suivez-nous !
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Rejoignez notre communauté sur Facebook
          </p>

          {/* 🔵 Bouton Facebook */}
          <Link
            href="https://www.facebook.com/people/IziLotocm/61585217354848/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <div
              className="flex items-center gap-4 px-8 py-5 
                          bg-[#1877F2] text-white rounded-2xl
                          shadow-lg hover:shadow-xl 
                          hover:shadow-blue-500/30
                          transition-all duration-300
                          group-hover:-translate-y-1
                          group-hover:scale-105"
            >
              {/* Icône Facebook */}
              <div
                className="w-14 h-14 rounded-full bg-white/20 
                            flex items-center justify-center
                            group-hover:bg-white/30 transition-colors"
              >
                <FacebookIcon className="w-7 h-7 text-white" />
              </div>

              {/* Texte */}
              <div className="text-left">
                <p className="font-bold text-lg">IziLoto Cameroun</p>
                <p className="text-white/80 text-sm">
                  Actualités, tirages en direct, promotions
                </p>
              </div>
            </div>
          </Link>

          {/* Texte d'accroche supplémentaire */}
          <p className="mt-8 text-sm text-gray-500">
            🔔 Activez les notifications pour ne manquer aucun tirage !
          </p>
        </motion.div>
      </div>
    </section>
  );
}
