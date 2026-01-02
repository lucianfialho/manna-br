import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Design System extraído do Manna App via DevTools
        background: {
          DEFAULT: "#FDFCF7", // rgb(253, 252, 247) - background principal
          alt: "#F9F5EB",     // rgb(249, 245, 235) - background alternativo
        },
        foreground: {
          DEFAULT: "#333333", // rgb(51, 51, 51) - texto principal
          muted: "rgba(51, 51, 51, 0.6)", // texto secundário
        },
        primary: {
          DEFAULT: "#1CB0F6", // rgb(28, 176, 246) - azul principal
          hover: "#00B0F7",   // rgb(0, 176, 247) - hover state
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        accent: {
          DEFAULT: "#FEC800", // rgb(254, 200, 0) - amarelo/dourado
          foreground: "#333333",
        },
        border: "#EBE9DD", // rgb(235, 233, 221)
        input: "#EBE9DD",
        ring: "#1CB0F6",

        // Cores utilitárias
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Rubik", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        rubik: ["Rubik", "sans-serif"], // Font oficial do Manna
      },
      fontSize: {
        // Escala de tamanhos extraída do Manna (em rem para melhor escalabilidade)
        'xs': ['0.81rem', { lineHeight: '1.2' }],      // 12.96px
        'sm': ['0.9rem', { lineHeight: '1.4' }],       // 14.4px
        'base': ['1rem', { lineHeight: '1.5' }],       // 16px
        'md': ['0.99rem', { lineHeight: '1.5' }],      // 15.84px
        'lg': ['1.17rem', { lineHeight: '1.6' }],      // 18.72px
        'xl': ['1.53rem', { lineHeight: '1.5' }],      // 24.48px (h2)
        '2xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px (h3)
        '3xl': ['2.43rem', { lineHeight: '1.185' }],   // 38.88px (h1)
        '4xl': ['3.87rem', { lineHeight: '1.1' }],     // 61.92px (hero)
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        // Border radius extraído do Manna
        'sm': '14.4px',   // botões
        'md': '23.04px',  // elementos médios
        'lg': '30px',     // cards grandes
        'xl': '40px',
        '2xl': '50px',
      },
      spacing: {
        // Mantendo o sistema fluid do Manna original
        "fluid-xs": "2vw",
        "fluid-sm": "5.3vw",
        "fluid-md": "8.8vw",
        "fluid-lg": "15.6vw",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
