<template>
  <section class="hero">
    <h2 class="fade-item">
      Come for <br />
      the food, sta<span style="position: relative"
        >y
        <div class="hero__circled-text fade-item">
          <svg
            viewBox="0 0 200 200"
            :width="Math.min(Math.max(width * 0.1, 105), 190)"
            :height="Math.min(Math.max(width * 0.1, 105), 190)"
            style="transform: rotateZ(-60deg)"
          >
            <defs>
              <!-- путь против часовой -->
              <path id="circleBottomReverse" d="M35,100 A65,65 0 0,0 165,100" />
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
        </div></span
      >
      <br />
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
          :width="Math.min(Math.max((90 / 1920) * width, 49), 90)"
          :height="Math.min(Math.max((90 / 1920) * width, 49), 90)"
          :style="{ rotateZ }"
        />
      </div>
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { useScreenWidth } from "~/composables/useScreenWidth";
import { motion, useScroll } from "motion-v";

const { width } = useScreenWidth();
const DEFAULT_WIDTH = 1920;
const { scrollYProgress } = useScroll();
// Добавляем плавность к scrollYProgress с помощью useSpring
const smoothScrollProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});

// Используем плавный прогресс для трансформации
const translateY = useTransform(
  smoothScrollProgress,
  [0, 0.15],
  [width.value > 500 ? -500 : -1140, width.value > 500 ? -800 : -900]
);
const rotateZ = useTransform(
  smoothScrollProgress,
  [0, 0.1],
  [width.value > 500 ? -500 : -100, -300]
);
</script>

<style scoped lang="scss">
.hero {
  height: auto;
  max-width: clamp(350px, 46.5vw, 690px);
  max-height: clamp(100px, 46.5vw, 700px);
  width: 100%;
  margin: 0 auto;
  margin-top: 183px;
  margin-bottom: clamp(300px, 22vw, 400px);
}

.hero__image-wrapper {
  position: relative;
  width: clamp(340px, 34vw, 614px);
  height: 600px;
  margin: -5.2vw auto 0 auto;
  margin-top: clamp(-100px, -5.2vw, 53px);
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
  text-transform: none;
  position: absolute;
  // top: clamp(-22px, -1.1vw, 0px);
  // right: clamp(-37px, -5vw, 0px) !important;
  top: 0;
  left: 0;
  transform: translateX(-200%) !important;
  font-family: IgraSans;
  width: 10px !important;
  height: 10px !important;

  // & svg {
  //   position: relative;
  //   left: -1;
  // }
}

.hero__circled-text--text {
  font-size: 13px;
  letter-spacing: 2px;
  fill: black; // не color, а fill!
  z-index: -1;
}

@media (max-width: 500px) {
  .hero {
    margin-top: 110px;
    margin-bottom: 60px;
    max-width: 350px;
    max-height: 500px;
  }

  .hero__image-wrapper {
    top: -65px;
    margin: 0 auto;
    z-index: -1;
  }

  .hero__circled-text {
    top: -10px !important;
    // right: 20px !important;
    transform: translateX(-300%) !important;
    width: 10vw;
    height: auto;
  }
}

@media (max-width: 400px) {
  .hero__image-wrapper {
    top: -55px;
    margin: 0 auto;
    z-index: -1;
  }
}

.hero__circled-text {
  top: -15px;
  right: 15px;
  // transform: translateX(-50%);
  width: 10vw;
  height: auto;
}
</style>
