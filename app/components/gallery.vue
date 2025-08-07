<template>
  <section class="gallery">
    <h3>
      Flavors that <br />sing
      <span class="vinyl-wrapper"
        ><img
          src="/images/gallery-vinyl@2x.png"
          alt="Vinyl"
          :width="Math.max((90 / DEFAULT_WIDTH) * width, 45)"
          :height="Math.max((90 / DEFAULT_WIDTH) * width, 45)"
        /> </span
      >, spaces that <br />shine
    </h3>
    <div class="subtitle">
      <p>
        Мы объединили простую еду, хорошую музыку<br />
        и минималистичный интерьер.
      </p>
      <p>
        Внутри — мягкий свет, винил на фоне и столы с <br />настоящим сукном. Мы
        не торопим, не играем в<br />
        формальности и не усложняем.
      </p>
    </div>
    <div class="gallery__images">
      <div
        class="gallery__image"
        v-for="height in heights"
        :key="height"
        :style="`height: ${
          width > 500 ? (height / DEFAULT_WIDTH) * width : height * 0.75
        }px`"
      ></div>
      <motion.div class="icecream-wrapper" :style="{ translateX }">
        <img
          src="/images/gallery-icecream@2x.png"
          alt="Icecream"
          :width="(248 / DEFAULT_WIDTH) * width"
          :height="(248 / DEFAULT_WIDTH) * width"
        />
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion, useScroll } from "motion-v";
const { scrollYProgress } = useScroll();
import { useScreenWidth } from "~/composables/useScreenWidth";

const { width } = useScreenWidth();
const DEFAULT_WIDTH = 1920;
// Добавляем плавность к scrollYProgress с помощью useSpring
const smoothScrollProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});

// Используем плавный прогресс для трансформации
const translateX = useTransform(smoothScrollProgress, [0.3, 0.6], [0, 1000]);
// const rotateZ = useTransform(smoothScrollProgress, [0, 0.1], [-500, -300]);

const heights = [470, 444, 528, 739, 738, 602, 880];
</script>

<style scoped lang="scss">
.gallery {
  margin-top: 13.5vw;
  padding: 20px;
}

.vinyl-wrapper {
  width: 90px;
  height: 90px;
  margin-left: -1vw;
  position: relative;
  bottom: -0.65vw;
}

.gallery__images {
  position: relative;
  width: 100%;
  height: clamp(200px, 79vw, 1520px);
  margin-top: 7.5vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.7vw;

  .gallery__image {
    width: 31vw;
    border-radius: 19px;
    background-color: rgba(0, 0, 0, 0.46);
  }
}

.icecream-wrapper {
  position: absolute;
  bottom: -5vw;
}

@media (max-width: 500px) {
  .gallery {
    margin-top: 200px;
    padding: 20px;
    height: auto;
  }

  .gallery__images {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 1.7vw;
    height: auto;

    .gallery__image {
      width: 100%;

      border-radius: 19px;
      background-color: rgba(0, 0, 0, 0.46);
    }
  }
}
</style>
