<template>
  <TopBar />
  <AppButtons v-show="!isOpened" />
  <div class="wrapper">
    <HeroExperts />
    <main class="main">
      <CardsExperts />
      <CtaExperts />
    </main>
    <FooterCompExperts />
  </div>
  <ApplicationForm class="form" v-show="isOpened" />
  <BottomGradient />
</template>

<script setup lang="ts">
import "modern-normalize";
import "animate.css";
import useApplicationForm from "~/composables/useApplicationForm";
import { useIntersectionVisibility } from "~/composables/useFadeOnScroll";
useIntersectionVisibility([".fade-item", ".width-item"]);

const { isOpened, setIsOpened } = useApplicationForm();

const clickOutside = (event: MouseEvent) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (!isOpened.value) return;
  if (event.target.closest("button")) return;
  if (!event.target.closest(".form")) {
    setIsOpened();
  }
};

onMounted(() => {
  document.addEventListener("mousedown", clickOutside);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", clickOutside);
});
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

@media (max-width: 500px) {
  .wrapper {
    padding: 0 5px;
  }
}
</style>
