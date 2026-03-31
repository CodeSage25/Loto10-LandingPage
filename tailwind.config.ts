import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 🎨 Couleurs de la marque LOTO 10
      colors: {
        brand: {
          blue: "#1a237e", // Bleu profond — fond header, footer
          "blue-light": "#283593", // Bleu légèrement plus clair — hover
          "blue-dark": "#0d1147", // Bleu très foncé — footer
          gold: "#f9a825", // Jaune doré — boutons CTA, accents
          "gold-light": "#fdd835", // Jaune clair — hover boutons
          "gold-dark": "#f57f17", // Jaune foncé — ombres dorées
          red: "#d32f2f", // Rouge vif — alertes, jeu responsable
          "red-light": "#ef5350", // Rouge clair — hover
        },
      },
      // 🔤 Typographies
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      // ✨ Animation custom pour le shimmer (effet brillant Jackpot)
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      // 📐 Largeur max pour le contenu centré
      maxWidth: {
        "7xl": "1440px", // Notre largeur de référence desktop
      },
    },
  },
  plugins: [],
};

export default config;
