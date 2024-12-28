export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'uxicode',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500;600;700&display=swap',}
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', body: true }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://uxicode.onrender.com/', // backend URL https://uxicode.onrender.com/ or http://localhost:5000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        };
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
  },

}
