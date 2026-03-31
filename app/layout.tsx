import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// 🔤 Police pour les TITRES — Montserrat
// Grasse, percutante, très lisible en gros
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading", // On crée une variable CSS
  weight: ["600", "700", "800", "900"], // Semi-bold à Black
  display: "swap", // Le texte s'affiche immédiatement, la police se charge en fond
});

// 🔤 Police pour le TEXTE COURANT — Inter
// Moderne, très lisible, standard du web
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// 📋 Métadonnées SEO — ce que Google et les réseaux sociaux voient
export const metadata: Metadata = {
  title: "Loto 10 — Gagnez jusqu'à 10 000 000 F CFA | IziLoto Cameroun",
  description:
    "Jouez au Loto 10 sur IziLoto.cm : choisissez 10 numéros, misez à partir de 100 F CFA et tentez de gagner le Jackpot de 10 000 000 F CFA toutes les 30 minutes !",
  keywords: [
    "loto 10",
    "iziloto",
    "loterie cameroun",
    "jeu en ligne cameroun",
    "jackpot",
    "loto bonus",
  ],
  authors: [{ name: "Dyce Gaming" }],
  // ===========================
  // 🖼️ FAVICON SVG
  // ===========================
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Loto 10 — Gagnez jusqu'à 10 000 000 F CFA",
    description:
      "Jouez au Loto 10 sur IziLoto.cm. Jackpot toutes les 30 minutes !",
    url: "https://iziloto.cm",
    siteName: "LOTO 10 by IziLoto",
    locale: "fr_CM",
    type: "website",
  },
};

// 🏗️ Le Layout — structure HTML de base
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
