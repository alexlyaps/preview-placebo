// https://nuxt.com/docs/api/configuration/nuxt-config
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
      title: "preview",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "preview" },
        {
          property: "og:description",
          content: "preview",
        },
        {
          property: "og:image",
          content: "/images/Rockfellers.jpg",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/my-favicon.ico" }],
    },
    baseURL: "/",
  },
});
