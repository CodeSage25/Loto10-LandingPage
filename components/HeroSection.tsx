"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🖼️ Background avec rotation continue */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/*
          MÉTHODE CSS backgroundImage au lieu du composant Image de Next.js.
          Pourquoi ? Le composant Image ne supporte pas bien la rotation
          avec "fill" + "animate-spin". Le CSS backgroundImage est plus fiable ici.
          
          ⚠️ Si ton fichier a un espace dans le nom, encode-le avec %20 :
          Logo_Fond%20loto10.png
        */}
        <div
          className="absolute w-[150%] h-[150%] animate-spin"
          style={{
            animationDuration: "60s",
            animationTimingFunction: "linear",
            backgroundImage: "url('/images/Logo_Fond_loto10.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* 🎨 Overlay sombre pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark/85 via-brand-blue-dark/70 to-brand-blue-dark/90 z-10" />
      </div>

      {/* 📝 Contenu de la Hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center">
          {/* Logo — w-auto ajouté pour corriger le warning */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/images/Logo_Loto10.png"
              alt="LOTO 10"
              width={250}
              height={90}
              className="mx-auto h-20 sm:h-24 lg:h-28 w-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Titre H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black 
                       text-white leading-tight mb-6"
          >
            Gagnez jusqu&apos;à{" "}
            <span className="text-brand-gold drop-shadow-lg">10 000 000 F</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              toutes les 30 minutes !
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 
                       max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Simple, rapide, accessible. Jouez responsable
            <br className="hidden sm:block" />à partir de{" "}
            <span className="text-brand-gold font-bold">100 F CFA</span>.
          </motion.p>

          {/* Boules de loto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center gap-2 sm:gap-3 mb-12 flex-wrap"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.08,
                  type: "spring",
                  stiffness: 200,
                }}
                className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                           rounded-full flex items-center justify-center
                           text-sm sm:text-lg lg:text-xl font-black
                           shadow-lg cursor-default
                           transition-transform duration-200 hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${
                    [
                      "#f9a825, #f57f17",
                      "#1e88e5, #1565c0",
                      "#e53935, #c62828",
                      "#43a047, #2e7d32",
                      "#8e24aa, #6a1b9a",
                      "#fb8c00, #ef6c00",
                      "#00acc1, #00838f",
                      "#d81b60, #ad1457",
                      "#3949ab, #283593",
                      "#fdd835, #f9a825",
                    ][index]
                  })`,
                  color: "white",
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  boxShadow:
                    "0 4px 15px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.3)",
                }}
              >
                {num}
              </motion.div>
            ))}
          </motion.div>

          {/* Bouton CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="https://iziloto.cm/register"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 
                         px-10 py-5 sm:px-14 sm:py-6
                         bg-gradient-to-r from-brand-gold to-brand-gold-light
                         text-brand-blue-dark font-black text-lg sm:text-xl lg:text-2xl
                         rounded-full shadow-2xl
                         hover:shadow-brand-gold/50 hover:shadow-2xl
                         hover:scale-105 active:scale-100
                         transition-all duration-300
                         animate-pulse-slow"
            >
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
              JOUER MAINTENANT SUR IZILOTO.CM
            </Link>
          </motion.div>

          {/* Indicateur */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 text-sm text-gray-300 font-medium"
          >
            ⏱️ Prochain tirage dans quelques minutes — Tirages toutes les 30 min
          </motion.p>
        </div>
      </div>

      {/* Vague décorative */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
