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
    '@nuxtjs/axios',
    [
      'nuxt-cookie-control',
      {
        barPosition: "bottom-right",
        blockIframe: true,
        controlButton: false,
        colors: {
          barTextColor: "#fff",
          barBackground: "#12957b",
          barButtonColor: "#fff",
          barButtonBackground: "#206569",
          barButtonHoverColor: "#fff",
          barButtonHoverBackground: "#2e495e",
          modalButtonBackground: "#206569",
          modalButtonHoverColor: "#fff",
          controlButtonBackground: "#12957b",
          controlButtonHoverBackground: "#2e495e",
          controlButtonIconHoverColor: "#fff",
          controlButtonIconColor: "#fff",
          modalButtonHoverBackground: "#2e495e",
          checkboxActiveBackground: "#2e495e",
          checkboxInactiveBackground: "#ede1e1",
          checkboxActiveCircleBackground: "#00c58e",
          checkboxInactiveCircleBackground: "#f44336",
          checkboxDisabledBackground: "#ddd",
          checkboxDisabledCircleBackground: "#fff"
        }
      }
    ]
  ],

  axios: {
    // Base URL
    baseURL: process.env.API_URL,
  },

  cookies: {
    necessary: [
      {
        name: {
          en: "Default cookies",
          hr: "Osnovni kolačići"
        },

        description: {
          en: "Used for cookie control."
        },
        cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"]
      }
    ],
    optional: [
      {
        name: {
          en: "Google Analytics",
          es: "Google Analytics",
          fr: "Google Analytics"
        },
        description: {
          en:
            "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic."
        },
        src: "https://www.googletagmanager.com/gtag/js?id=UA-138616567-1",
        async: true,
        cookies: ["_ga", "_gat_gtag_UA_138616567_1", "_gid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "UA-138616567-1");
        }
      }
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {}
  }
}
