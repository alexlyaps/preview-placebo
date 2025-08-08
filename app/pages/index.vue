<template>
  <TopBar />
  <h1>SUBSTANCE FOOD</h1>
  <main>
    <Hero />
    <Gallery />
    <MenuComp />
    <Cta />
  </main>
  <FooterComp />
  <BottomBar />
</template>

<script setup lang="ts">
import { useIntersectionVisibility } from "~/composables/useFadeOnScroll";
useIntersectionVisibility([".fade-item", ".width-item"]);
</script>

<style lang="scss">
@use "~/assets/scss/main.scss" as *;

h1 {
  height: 1px;
  width: 1px;
  position: absolute;
  visibility: hidden;
}
</style>
