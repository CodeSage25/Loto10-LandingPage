"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

// 📋 Questions et réponses
const faqItems = [
  {
    question: "Qu'est-ce que LOTO 10 ?",
    answer:
      "LOTO 10 est un jeu de loterie disponible exclusivement sur IziLoto.cm. Le principe est simple : 10 numéros de 1 à 10 sont tirés dans un ordre aléatoire toutes les 30 minutes. Vous choisissez l'ordre des 10 numéros et gagnez en fonction du nombre de numéros correspondants dans l'ordre exact du tirage.",
  },
  {
    question: "Comment jouer au LOTO 10 ?",
    answer:
      "1. Rendez-vous sur IziLoto.cm et créez votre compte gratuitement.\n2. Choisissez le jeu LOTO 10.\n3. Sélectionnez vos 10 numéros dans l'ordre de votre choix (de 1 à 10).\n4. Définissez votre mise (à partir de 100 F CFA).\n5. Validez votre ticket et attendez le tirage !\n\nSi vos premiers numéros correspondent dans l'ordre exact du tirage, vous gagnez !",
  },
  {
    question: "Qu'est-ce que le Loto Bonus ?",
    answer:
      "Le Loto Bonus est une variante du LOTO 10 qui vous permet de jouer avec moins de numéros (3, 4, 5, 6 ou 7 numéros parmi 1 à 10). Les gains sont différents : par exemple, le Loto 3/10 multiplie votre mise par 4, tandis que le Loto 7/10 la multiplie par 3 000. La mise va de 100 à 1 000 F CFA.",
  },
  {
    question: "Quel est le montant minimum de mise ?",
    answer:
      "La mise minimum est de 100 F CFA, ce qui rend le jeu accessible à tous. Vous pouvez augmenter votre mise pour augmenter vos gains potentiels. Par exemple, une mise de 500 F au 7 Ordre vous rapporterait 500 × 200 = 100 000 F CFA.",
  },
  {
    question: "Comment récupérer mes gains ?",
    answer:
      "Vos gains sont automatiquement crédités sur votre compte IziLoto. Vous pouvez les retirer à tout moment via MTN Mobile Money ou Orange Money. Les retraits sont instantanés et sécurisés.",
  },
  {
    question: "Le Jackpot est-il garanti pour un seul gagnant ?",
    answer:
      "Non. Le Jackpot de 10 000 000 F CFA est partagé entre tous les gagnants du même tirage. Si deux joueurs trouvent les 10 numéros dans l'ordre exact, chacun reçoit 5 000 000 F CFA. Si un seul joueur gagne, il remporte la totalité.",
  },
  {
    question: "Le jeu est-il légal au Cameroun ?",
    answer:
      "Oui. IziLoto.cm est une plateforme de jeux en ligne, autorisée et régulée au Cameroun. Le jeu est strictement interdit aux personnes de moins de 21 ans.",
  },
];

// 🎯 Composant individuel pour chaque question
function FAQItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div
        className={`border rounded-2xl overflow-hidden transition-all duration-300
                    ${
                      isOpen
                        ? "border-brand-blue/30 shadow-lg bg-white"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                    }`}
      >
        {/* Bouton question — toujours visible */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 text-left
                     transition-colors duration-200 group"
          aria-expanded={isOpen}
        >
          <span
            className={`font-heading font-bold text-base sm:text-lg pr-4
                        ${isOpen ? "text-brand-blue" : "text-brand-blue-dark"}
                        group-hover:text-brand-blue transition-colors`}
          >
            {item.question}
          </span>

          {/* Icône chevron qui tourne */}
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                        transition-all duration-300
                        ${
                          isOpen
                            ? "bg-brand-blue text-white rotate-180"
                            : "bg-gray-100 text-gray-500 group-hover:bg-brand-blue/10"
                        }`}
          >
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>

        {/* Réponse — s'affiche/se cache avec animation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                {/* Ligne de séparation */}
                <div className="h-px bg-gray-100 mb-4" />

                {/* Texte de la réponse — on gère les \n pour les sauts de ligne */}
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  // 📌 On stocke l'INDEX de la question ouverte (null = tout fermé)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle : si on clique sur la question déjà ouverte, on la ferme
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🏷️ Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue/10 mb-6">
            <HelpCircle className="w-8 h-8 text-brand-blue" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blue-dark mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Tout ce que vous devez savoir sur LOTO 10
          </p>
        </motion.div>

        {/* 📋 Liste des questions */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
