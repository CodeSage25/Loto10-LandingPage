"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const lotoBonusGames = [
  {
    image: "/images/Logo_Loto_3-10.png",
    name: "Loto 3/10",
    rule: "Choisis 3 numéros de 1 à 10 dans l'ordre",
    gain: "Mise × 4",
    multiplier: 4,
  },
  {
    image: "/images/Logo_Loto_4-10.png",
    name: "Loto 4/10",
    rule: "Choisis 4 numéros de 1 à 10 dans l'ordre",
    gain: "Mise × 15",
    multiplier: 15,
  },
  {
    image: "/images/Logo_Loto_5-10.png",
    name: "Loto 5/10",
    rule: "Choisis 5 numéros de 1 à 10 dans l'ordre",
    gain: "Mise × 75",
    multiplier: 75,
  },
  {
    image: "/images/Logo_Loto_6-10.png",
    name: "Loto 6/10",
    rule: "Choisis 6 numéros de 1 à 10 dans l'ordre",
    gain: "Mise × 450",
    multiplier: 450,
  },
  {
    image: "/images/Logo_Loto_7-10.png",
    name: "Loto 7/10",
    rule: "Choisis 7 numéros de 1 à 10 dans l'ordre",
    gain: "Mise × 3 000",
    multiplier: 3000,
  },
];

export default function LotoBonus() {
  return (
    <section id="loto-bonus" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <Image
            src="/images/Logo_LotoBonus.png"
            alt="Loto Bonus"
            width={300}
            height={80}
            className="mx-auto h-16 sm:h-20 lg:h-24 w-auto mb-6"
          />
          {/* Sous le titre principal — remplace ton ancien <p> */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge mise en haut */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold-dark px-4 py-1.5 rounded-full text-sm font-bold mb-3">
              <span>💰</span>
              Mise de 100 à 1 000 F
            </div>

            {/* Texte explicatif en dessous */}
            <p className="text-base sm:text-lg text-gray-600">
              Choisis tes numéros parmi 1 à 10, gagne s&apos;ils sortent dans
              l&apos;ordre parmi les 10 tirés !
            </p>
          </div>
          {/* 💡 Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-sm text-gray-500 mt-8"
          >
            💡 Exemple : une mise de 1000 F au 5 Ordre = 1000 × 75 ={" "}
            <span className="font-bold text-brand-blue">75 000 F CFA</span> de
            gain !
          </motion.p>
        </motion.div>

        {/* Grille des 5 jeux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {lotoBonusGames.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href="https://iziloto.cm/lottery/games/dyce-games-loto10"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="bg-gradient-to-b from-white to-gray-50 
                             rounded-2xl p-6 text-center border border-gray-200
                             hover:border-brand-gold/50 hover:shadow-xl 
                             transition-all duration-300 h-full
                             group-hover:-translate-y-1"
                >
                  {/* Logo du jeu — w-auto + h-auto pour le ratio */}
                  <div className="mb-5 flex justify-center">
                    <Image
                      src={game.image}
                      alt={game.name}
                      width={120}
                      height={120}
                      className="h-20 sm:h-24 w-auto object-contain
                                 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-brand-blue-dark mb-2">
                    {game.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    {game.rule}
                  </p>

                  <div
                    className="inline-block px-5 py-2 rounded-full 
                               bg-gradient-to-r from-brand-gold to-brand-gold-light
                               text-brand-blue-dark font-black text-lg
                               shadow-md group-hover:shadow-lg 
                               group-hover:shadow-brand-gold/30
                               transition-all duration-300"
                  >
                    {game.gain}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="https://iziloto.cm/lottery/games/dyce-games-loto10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 
                       bg-brand-blue text-white font-bold text-lg
                       rounded-full hover:bg-brand-blue-light 
                       transition-all duration-300 hover:shadow-xl
                       hover:shadow-brand-blue/30 hover:scale-105"
          >
            Jouer au Loto Bonus
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
