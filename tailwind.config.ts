import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'cyber-black': '#050505',
        'cyber-charcoal': '#1a1a1a',
        'cyber-green': '#00ff41',
        'cyber-green-dark': '#00cc33',
        'cyber-grid': '#2a2a2a',
        'cyber-gray': '#a0a0a0',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
