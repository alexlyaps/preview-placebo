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
});
