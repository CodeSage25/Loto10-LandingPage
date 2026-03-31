"use client";

import { motion } from "framer-motion";
import { TrendingUp, Star, Crown, Zap } from "lucide-react";
import Link from "next/link";

// 📊 Données des gains (hors jackpot)
const regularGains = [
  {
    numbers: 3,
    multiplier: "×2",
    level: 1,
    color: "from-blue-50 to-blue-100",
    textColor: "text-blue-700",
    labelColor: "text-blue-500",
    borderColor: "border-blue-200 hover:border-blue-400",
    iconColor: "text-blue-400",
  },
  {
    numbers: 4,
    multiplier: "×3",
    level: 2,
    color: "from-indigo-50 to-indigo-100",
    textColor: "text-indigo-700",
    labelColor: "text-indigo-500",
    borderColor: "border-indigo-200 hover:border-indigo-400",
    iconColor: "text-indigo-400",
  },
  {
    numbers: 5,
    multiplier: "×10",
    level: 3,
    color: "from-violet-50 to-violet-100",
    textColor: "text-violet-700",
    labelColor: "text-violet-500",
    borderColor: "border-violet-200 hover:border-violet-400",
    iconColor: "text-violet-400",
  },
  {
    numbers: 6,
    multiplier: "×40",
    level: 4,
    color: "from-purple-50 to-purple-100",
    textColor: "text-purple-700",
    labelColor: "text-purple-500",
    borderColor: "border-purple-200 hover:border-purple-400",
    iconColor: "text-purple-400",
  },
  {
    numbers: 7,
    multiplier: "×200",
    level: 5,
    color: "from-brand-blue/10 to-brand-blue/20",
    textColor: "text-brand-blue",
    labelColor: "text-brand-blue/70",
    borderColor: "border-brand-blue/30 hover:border-brand-blue",
    iconColor: "text-brand-blue",
  },
  {
    numbers: 8,
    multiplier: "×1 000",
    level: 6,
    color: "from-brand-blue-dark to-brand-blue",
    textColor: "text-white",
    labelColor: "text-blue-200",
    borderColor: "border-brand-blue hover:border-brand-blue/80",
    iconColor: "text-brand-gold",
  },
  {
    numbers: 9,
    multiplier: "×10 000",
    level: 7,
    color: "from-brand-blue-dark via-brand-blue-dark to-brand-blue",
    textColor: "text-white",
    labelColor: "text-blue-300",
    borderColor: "border-brand-blue-dark hover:border-brand-gold/60",
    iconColor: "text-brand-gold",
  },
];

export default function TableauGains() {
  return (
    <section
      id="gains"
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🏷️ Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blue-dark mb-3">
            Tableau des Gains
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Plus vous alignez de numéros dans l&apos;ordre, plus votre mise est
            multipliée !
          </p>
        </motion.div>

        {/* 📊 Grille compacte — 2 col mobile → 3 col tablette → 7 col desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 md:gap-4 mb-6">
          {regularGains.map((gain, index) => (
            <motion.div
              key={gain.numbers}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className={`
                relative rounded-2xl overflow-hidden
                border-2 ${gain.borderColor}
                transition-all duration-300
                group
              `}
            >
              <div className={`bg-gradient-to-br ${gain.color} p-4 md:p-5`}>
                {/* Icône */}
                <div className="mb-2">
                  {gain.level >= 5 ? (
                    <Star
                      size={18}
                      className={`${gain.iconColor} group-hover:scale-125 transition-transform duration-300`}
                      fill="currentColor"
                    />
                  ) : (
                    <TrendingUp
                      size={18}
                      className={`${gain.iconColor} group-hover:scale-125 transition-transform duration-300`}
                    />
                  )}
                </div>

                {/* Label */}
                <div
                  className={`text-xs font-semibold ${gain.labelColor} mb-1`}
                >
                  {gain.numbers} numéros
                </div>

                {/* Multiplicateur */}
                <div
                  className={`text-xl md:text-2xl font-black ${gain.textColor} leading-tight`}
                >
                  {gain.multiplier}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🏆 Carte Jackpot — bandeau horizontal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-brand-gold to-amber-400 rounded-3xl ring-4 ring-brand-gold/30 shadow-2xl shadow-brand-gold/20"
        >
          {/* Déco */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Gauche : Icône + Label */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-blue-dark/20 rounded-2xl flex items-center justify-center animate-pulse">
                <Crown size={32} className="text-brand-blue-dark" />
              </div>
              <div>
                <div className="text-xs font-bold text-brand-blue-dark/60 uppercase tracking-wider">
                  10 numéros dans l&apos;ordre
                </div>
                <div className="text-sm text-brand-blue-dark/80 font-medium">
                  Le graal du LOTO 10
                </div>
              </div>
            </div>

            {/* Centre : Montant */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue-dark">
                10 000 000 F
              </div>
              <div className="mt-1 inline-flex items-center gap-1 bg-brand-blue-dark text-brand-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Zap size={12} />
                Jackpot partagé
              </div>
            </div>

            {/* Droite : CTA */}
            <Link
              href="https://iziloto.cm/lottery/games/dyce-games-loto10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-brand-blue-dark text-brand-gold font-bold text-sm px-6 py-3 rounded-xl hover:bg-brand-blue transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Tenter ma chance →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
