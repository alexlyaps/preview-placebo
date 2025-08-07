<template>
  <section class="hero">
    <h2>
      Come for <br />
      the food, stay <br />
      for <br />
      the vibe
    </h2>
    <div class="hero__image-wrapper">
      <img
        src="/images/hero-image.png"
        alt="Hero Image"
        width="614"
        height="614"
      />
    </div>
    <motion.div :style="{ translateY }">
      <div class="hero__ball-wrapper">
        <motion.img
          src="/images/hero-ball@2x.png"
          alt="Ball"
          :width="Math.max((90 / 1920) * width, 49)"
          :height="Math.max((90 / 1920) * width, 49)"
          :style="{ rotateZ }"
        />
      </div>
    </motion.div>

    <div class="hero__circled-text">
      <svg
        viewBox="0 0 200 200"
        :width="Math.max(width * 0.1, 100)"
        :height="Math.max(width * 0.1, 100)"
      >
        <defs>
          <!-- путь против часовой -->
          <path id="circleBottomReverse" d="M20,110 A90,70 0 0,0 170,20" />
        </defs>
        <text class="hero__circled-text--text">
          <textPath
            href="#circleBottomReverse"
            startOffset="100%"
            text-anchor="end"
          >
            Москва. Авиаматорная
          </textPath>
        </text>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScreenWidth } from "~/composables/useScreenWidth";
import { motion, useScroll } from "motion-v";

const DEFAULT_WIDTH = 1920;
const { scrollYProgress } = useScroll();
// Добавляем плавность к scrollYProgress с помощью useSpring
const smoothScrollProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});

// Используем плавный прогресс для трансформации
const translateY = useTransform(smoothScrollProgress, [0, 0.1], [-1000, -800]);
const rotateZ = useTransform(smoothScrollProgress, [0, 0.1], [-500, -300]);

const { width } = useScreenWidth();
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  height: auto;
  max-width: clamp(450px, 36.5vw, 690px);
  max-height: clamp(400px, 46.5vw, 700px);
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  margin-top: 183px;
}

.hero__image-wrapper {
  position: relative;
  width: clamp(350px, 34vw, 614px);
  margin: -5.2vw auto 0 auto;
  z-index: -1;

  & img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.hero__ball-wrapper {
  position: absolute;
  top: 550px;
  left: 10%;
  transform: translateX(-50%);
}

.hero__circled-text {
  position: absolute;
  top: 6vw; // подгони по макету
  right: -5.25vw;
  transform: translateX(-50%);
  width: 10vw;
  height: auto;
}

.hero__circled-text--text {
  font-size: 14px;
  letter-spacing: 2px;
  fill: black; // не color, а fill!
  z-index: -1;
}

@media (max-width: 500px) {
  .hero {
    margin-top: 110px;
  }

  .hero__image-wrapper {
    top: -65px;
    margin: 0 auto;
    z-index: -1;
  }

  .hero__circled-text {
    top: 100px;
    right: 50px;
    // transform: translateX(-50%);
    width: 10vw;
    height: auto;
  }
}
</style>
