const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "2.5xl": "1650px",
    },
    extend: {
      colors: {
        'orange': '#E0592A',
        'grey': '#6C6C6C',
        'deep-blue': {
          650: 'rgba(18, 40, 76, 0.648)',
          750: 'rgba(18, 40, 76, 0.747)',
          900: 'rgba(18, 40, 76, 0.9)',
        },
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, rgba(18, 40, 76, 0.648) 0%, rgba(18, 40, 76, 0.747) 54.5%, rgba(18, 40, 76, 0.9) 83%)',
        'navy-gradient': 'linear-gradient(to bottom, #0E1A32 0%, #12284C 100%)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif', 'Inter'],
      },
    },
  },
  plugins: [],
};

export default config;
