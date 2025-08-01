// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  components: [
    { path: "~/components/shared", pathPrefix: false },
    { path: "~/components", pathPrefix: false },
  ],
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/icon", "motion-v/nuxt"],
  nitro: {
    preset: "static",
    prerender: {
      failOnError: false,
    },
  },
  icon: {
    customCollections: [{ prefix: "my-icon", dir: "./assets/icons" }],
  },
  image: {
    dir: "assets/images",
    provider: "ipx",
  },
  app: {
    head: {
      title: "Alma",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Alma" },
        { name: "apple-mobile-web-app-title", content: "Alma" },
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
