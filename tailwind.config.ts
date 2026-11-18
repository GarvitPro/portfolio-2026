import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF3E3",
          warm: "#F5EBCE",
          grid: "#E2D9C2",
          paper: "#FFFDF8",
        },
        navy: {
          DEFAULT: "#22307D",
          deep: "#18225F",
          bright: "#2E43B2",
        },
        marker: {
          DEFAULT: "#F5D74D",
          bright: "#FCE258",
          amber: "#EAB308",
        },
        kraft: {
          DEFAULT: "#D4A362",
          dark: "#B5813E",
          light: "#E6BC82",
          corrugated: "#C4914E",
        },
        y2k: {
          purple: "#5E52C6",
          purpleDark: "#453A99",
          purpleLight: "#897EE8",
          sky: "#74B9EB",
          coral: "#E85342",
          mint: "#92D263",
          pink: "#F494B5",
          orange: "#F39237",
        },
        ink: {
          DEFAULT: "#22307D",
          charcoal: "#18225F",
          graphite: "#2E43B2",
          paper: "#22307D",
        },
        paper: {
          DEFAULT: "#FAF3E3",
          warm: "#F5EBCE",
          line: "#E2D9C2",
        },
        violet: {
          DEFAULT: "#22307D",
          lilac: "#F5D74D",
          deep: "#18225F",
        },
        text: {
          light: "#FAF3E3",
          muted: "#5A659E",
          dark: "#22307D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        pixel: ["var(--font-pixel)", "monospace"],
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "graph-grid":
          "linear-gradient(to right, rgba(34, 48, 125, 0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 48, 125, 0.09) 1px, transparent 1px)",
        "cardboard-ribs":
          "repeating-linear-gradient(90deg, rgba(130, 82, 24, 0.14) 0px, rgba(130, 82, 24, 0.14) 3px, transparent 3px, transparent 8px)",
        "bubble-dots":
          "radial-gradient(circle, rgba(255,255,255,0.85) 25%, rgba(200,210,235,0.45) 45%, transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
