import i18n from './config/i18n'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'myapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,700&family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/repository',
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'fr',
            name: 'Français'
          },
          {
            code: 'es',
            name: 'Español'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // Base URL
    baseURL: process.env.API_URL,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
