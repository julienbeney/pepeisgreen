export default {
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#3fb00b',
        },
      },
    },
  },
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
    ],
};
