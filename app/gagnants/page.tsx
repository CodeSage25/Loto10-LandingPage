"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trophy, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

import gagnantData from "@/data/gagnants.json";

type Gagnant = {
  id: number;
  image: string;
  description: string;
  date: string;
  texte: string;
};

const ITEMS_PER_PAGE = 5;

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function GagnantsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const gagnants = gagnantData as Gagnant[];
  const totalPages = Math.ceil(gagnants.length / ITEMS_PER_PAGE);

  const paginatedGagnants = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return gagnants.slice(start, start + ITEMS_PER_PAGE);
  }, [gagnants, currentPage]);

  return (
    <>
      <Header />

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* ═══ LISTE DES GAGNANTS ═══ */}
        <section className="py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {paginatedGagnants.length > 0 ? (
              <div className="flex flex-col gap-5">
                {paginatedGagnants.map((gagnant, index) => (
                  <motion.div
                    key={gagnant.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group"
                  >
                    <div
                      className="bg-white rounded-2xl overflow-hidden shadow-sm
                                  border border-gray-100 hover:shadow-xl
                                  hover:border-brand-gold/30
                                  transition-all duration-300
                                  flex flex-col sm:flex-row"
                    >
                      {/* 🖼️ IMAGE — côté gauche
                          CORRIGÉ : utilise <img> au lieu de <Image>
                          pour éviter les erreurs 400 sur Vercel
                      */}
                      <div
                        className="relative w-full sm:w-72 lg:w-80 flex-shrink-0
                                    aspect-[4/3] sm:aspect-auto sm:min-h-[200px]
                                    overflow-hidden bg-gray-100"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={gagnant.image}
                          alt={gagnant.description}
                          className="w-full h-full object-contain
                                     transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Numéro du gagnant */}
                        <div className="absolute bottom-3 right-3">
                          <span
                            className="w-8 h-8 flex items-center justify-center
                                        bg-brand-blue-dark/80 text-white
                                        font-bold text-xs rounded-full backdrop-blur-sm"
                          >
                            #{gagnant.id}
                          </span>
                        </div>
                      </div>

                      {/* 📝 TEXTE — côté droit */}
                      <div className="flex-1 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="font-medium">
                            {formatDate(gagnant.date)}
                          </span>
                        </div>

                        {/* Description */}
                        <h3
                          className="font-heading font-bold text-brand-blue-dark 
                                      text-lg sm:text-xl lg:text-2xl leading-snug mb-4"
                        >
                          {gagnant.description}
                        </h3>
                        <h5
                          className="font-heading font text-brand-blue-dark 
                                      "
                        >
                          {gagnant.texte}
                        </h5>

                        {/* Badge vérifié */}
                        <div className="flex items-center gap-30 py-2 mt-4 ">
                          <span className="text-[11px] font-bold text-brand-gold-dark uppercase tracking-wider ">
                            Vérifié ✓
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Trophy className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">
                  Aucun ticket gagnant pour le moment.
                </p>
              </div>
            )}

            {/* ═══ PAGINATION ═══ */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold
                             transition-all duration-200
                             ${
                               currentPage === 1
                                 ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200 hover:border-gray-300"
                             }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Précédent</span>
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-9 h-9 rounded-xl text-sm font-bold transition-all duration-200
                                   ${
                                     currentPage === page
                                       ? "bg-brand-blue text-white shadow-md shadow-brand-blue/30"
                                       : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                                   }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold
                             transition-all duration-200
                             ${
                               currentPage === totalPages
                                 ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200 hover:border-gray-300"
                             }`}
                >
                  <span className="hidden sm:inline">Suivant</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
