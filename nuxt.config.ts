// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["motion-v/nuxt"],
  nitro: {
    preset: "static",
    prerender: {
      failOnError: false,
    },
  },
  app: {
    head: {
      title: "Alma",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Substance" },
        { name: "apple-mobile-web-app-title", content: "Substance" },
        { name: "theme-color", content: "#000000" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/my-favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },

        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
    baseURL: "/",
  },
});
