<template>
  <div class="hero-wrapper">
    <img
      :src="logoStar"
      alt="Alma Logo"
      class="hero__logo"
      width="50"
      height="40"
    />
    <img src="/images/bg-gradient.png" alt="" class="bg-gradient" />
    <section class="hero">
      <motion.div
        class="ball"
        :initial="{
          opacity: 0,
          backgroundColor: 0,
          scale: 0.95,
          translateY: 40,
        }"
        :animate="{ opacity: 1, backgroundColor: 1, scale: 1, translateY: 0 }"
        :transition="{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.1, 0.8, 1.01],
        }"
      >
        <h1>
          Alma <br />
          для экспертов
        </h1>
      </motion.div>

      <div class="motion-container" ref="containerRef">
        <div class="hero__title">
          Помогает находить клиентов, проводить сессии, управлять расписанием и
          развивать свою практику без лишней нагрузки.
        </div>
      </div>

      <BaseButton
        variant="big"
        @click="setIsOpened"
        class="animate__animated animate__fadeIn"
      >
        Стать экспертом в Alma</BaseButton
      >
    </section>
  </div>
</template>

<script setup lang="ts">
import logoStar from "~/assets/images/alma-star.png";
import useApplicationForm from "~/composables/useApplicationForm";
import { motion } from "motion-v";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

const { setIsOpened } = useApplicationForm();

const containerRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  document.fonts.ready.then(async () => {
    await nextTick();
    if (!containerRef.value) return;

    // Hide the container until the fonts are loaded
    // containerRef.value.style.visibility = "visible";

    const { words } = splitText(
      containerRef.value.querySelector(".hero__title")!
    );

    setTimeout(() => {
      if (!containerRef.value) return;
      containerRef.value.style.visibility = "visible";
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.1),
        }
      );
    }, 1000);
  });
});
</script>

<style scoped lang="scss">
.motion-container {
  width: 100%;
  visibility: hidden;
}

.split-word {
  will-change: transform, opacity;
}

.hero-wrapper {
  position: relative;
  width: 100vw;

  .bg-gradient {
    position: absolute;
    height: 1774px;
    width: 100vw;
    z-index: -1;
    left: 0;
    top: 0;
    object-fit: cover;
  }
}

.hero__logo {
  position: absolute;
  top: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 40px;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 640px;

  h1 {
    margin-top: 300px;
  }

  .hero__title {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    margin-top: 26px;
    margin-bottom: 54px;
    opacity: 0.54;
  }

  .btn__content {
    position: relative;
    bottom: 2px;
  }
}

@media (min-width: 500px) {
  h1 br {
    display: none;
  }

  .hero__logo {
    display: none !important;
  }
}

@media (max-width: 500px) {
  .hero-wrapper {
    width: 100vw;
    min-width: 0;
    .bg-gradient {
      width: 100vw;
      min-width: 0;
      // object-fit: cover;
    }
  }

  br {
    display: none;
  }

  h1 br {
    display: block;
  }

  .hero {
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    margin-bottom: 100px;
    .hero__title {
      margin: 16px 27px 35px 27px;
      font-size: 16px;
      line-height: 20px;
    }
    h1 {
      font-size: 45px;
      margin: 183px 20px 0 20px;
    }
    .btn__content {
      font-size: 15px;
      padding: 10px 0;
    }
  }
}
</style>
