/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        aboutSection: "#0b0f1a",     // Hero / About background
        skillSection: "#020617",     // Skills section
        primary: "#38bdf8",          // Cyan accent
        secondary: "#7c3aed",        // Purple accent
        accent: "#22d3ee",           // Additional accent
      },

      keyframes: {
        // For scrolling skills / marquee
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },

        // Glow effect for hover / floating
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },

      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        glow: "glow 6s ease-in-out infinite",
      },

      blur: {
        xs: "10px",
        sm: "20px",
        md: "40px",
        lg: "80px",
        xl: "150px",
      },

      transitionProperty: {
        'bg': 'background-color',
        'scale-rotate': 'transform',
      },

      dropShadow: {
        skill: '0 0 10px rgba(56, 189, 248, 0.5)',
      },

      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};
