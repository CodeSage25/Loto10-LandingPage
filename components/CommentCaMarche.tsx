"use client";

import { motion } from "framer-motion";
import { Target, Coins, Trophy } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Choisissez vos 10 numéros",
    description:
      "Sélectionnez 10 numéros parmi les options disponibles. Faites confiance à votre instinct !",
  },
  {
    icon: Coins,
    title: "Misez à partir de 100 F CFA",
    description:
      "Un jeu accessible à tous. Déposez via MTN Mobile Money ou Orange Money en quelques secondes.",
  },
  {
    icon: Trophy,
    title: "Gagnez si l'ordre correspond",
    description:
      "Plus vous trouvez de numéros dans l'ordre, plus vos gains sont élevés. Jusqu'à 10 000 000 F CFA",
  },
];

const exemples = [
  { ordre: "3 Ordre", gain: "× 2" },
  { ordre: "4 Ordre", gain: "× 3" },
  { ordre: "5 Ordre", gain: "× 10" },
  { ordre: "6 Ordre", gain: "× 40" },
  { ordre: "7 Ordre", gain: "× 200" },
  { ordre: "8 Ordre", gain: "× 1 000" },
  { ordre: "9 Ordre", gain: "× 10 000" },
  { ordre: "🏆 JACKPOT", gain: "10 000 000 F", isJackpot: true },
];

export default function CommentCaMarche() {
  return (
    <section id="comment-jouer" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blue-dark mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trois étapes simples pour tenter votre chance
          </p>
        </motion.div>

        {/* 🎯 Les 3 cartes avec background CSS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div
                className="relative rounded-2xl p-8 text-center overflow-hidden
                           hover:shadow-2xl transition-all duration-300 
                           border border-white/20 group h-full"
              >
                {/* 
                  🖼️ Background image via CSS
                  ⚠️ Si ton fichier a un espace : url('/images/Logo_Fond%20loto10.png')
                */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: "url('/images/Logo_Fond_loto10.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Overlay sombre */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-blue-dark/80 to-brand-blue/70" />

                {/* Contenu */}
                <div className="relative z-10">
                  {/* Numéro */}

                  {/* Icône */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 
                                rounded-2xl bg-brand-gold/20 text-brand-gold mb-5
                                group-hover:scale-110 group-hover:bg-brand-gold/30
                                transition-all duration-300"
                  >
                    <step.icon className="w-8 h-8" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-white/80 font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎯 Règle du jeu — Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-xs text-gray-400 mt-4">
            💡 Exemple : mise de 100 F au 7 Ordre = 100 × 200 ={" "}
            <span className="font-bold text-brand-blue">2 000 F CFA</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
