/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        medical: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#36aaf5",
          500: "#0c8ee7",
          600: "#0071c5",
          700: "#005aa0",
          800: "#004d85",
          900: "#00416f",
          950: "#002a4a",
        },
        // New pastel green palette
        sage: {
          50: "#f4f7f4",
          100: "#e6ede6",
          200: "#d0dfd0",
          300: "#aec7ae",
          400: "#85a885",
          500: "#658b65",
          600: "#4e704e",
          700: "#3f5a3f",
          800: "#354835",
          900: "#2d3c2d",
          950: "#172117",
        },
        mint: {
          50: "#f1fbf8",
          100: "#d1f3e8",
          200: "#a3e7d5",
          300: "#70d3bc",
          400: "#49baa2",
          500: "#2f9d87",
          600: "#237d6c",
          700: "#206458",
          800: "#1d5047",
          900: "#1b433c",
          950: "#0a2722",
        },
        leaf: {
          50: "#f3f9e8",
          100: "#e5f1ce",
          200: "#d0e5a6",
          300: "#b5d575",
          400: "#9cc24d",
          500: "#7fa32f",
          600: "#638223",
          700: "#4c651f",
          800: "#3e501e",
          900: "#36451d",
          950: "#1b250c",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.25rem)",
        sm: "calc(var(--radius) - 0.5rem)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 12s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-medical": "linear-gradient(135deg, #0071c5 0%, #36aaf5 100%)",
        "gradient-medical-soft": "linear-gradient(135deg, #e0effe 0%, #bae0fd 100%)",
        "gradient-medical-dark": "linear-gradient(135deg, #004d85 0%, #0071c5 100%)",
        // New pastel green gradients
        "gradient-sage": "linear-gradient(135deg, #658b65 0%, #85a885 100%)",
        "gradient-sage-soft": "linear-gradient(135deg, #d0dfd0 0%, #aec7ae 100%)",
        "gradient-mint": "linear-gradient(135deg, #2f9d87 0%, #49baa2 100%)",
        "gradient-leaf": "linear-gradient(135deg, #7fa32f 0%, #9cc24d 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
