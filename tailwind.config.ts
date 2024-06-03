import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00c8b5",

          "secondary": "#008200",

          "accent": "#ff6800",

          "neutral": "#3f271f",

          "base-100": "#fffff8",

          "info": "#3bd0ff",

          "success": "#008f5d",

          "warning": "#ffc700",

          "error": "#de3a45",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config


