<template>
  <section class="gallery">
    <h3 class="fade-item">
      Flavors that <br />sing
      <span class="vinyl-wrapper"
        ><img
          src="/images/gallery-vinyl@2x.png"
          alt="Vinyl"
          :width="
            width > 400
              ? Math.min(Math.max((90 / DEFAULT_WIDTH) * width, 42), 90)
              : 35
          "
          :height="
            width > 400
              ? Math.min(Math.max((90 / DEFAULT_WIDTH) * width, 42), 90)
              : 35
          "
        /> </span
      >, spaces that <br />shine
    </h3>
    <div class="subtitle fade-item">
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
        v-for="height in heightAdaptive"
        :key="height"
        :style="`height: ${height}px`"
      ></div>
      <div class="icecream-wrapper">
        <img
          src="/images/gallery-icecream@2x.png"
          alt="Icecream"
          :width="Math.min(Math.max((248 / DEFAULT_WIDTH) * width, 124), 248)"
          :height="Math.min(Math.max((248 / DEFAULT_WIDTH) * width, 124), 248)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion, useScroll } from "motion-v";
const { scrollYProgress } = useScroll();
import { useScreenWidth } from "~/composables/useScreenWidth";

const { width } = useScreenWidth();
const heights = [470, 444, 528, 739, 738, 602, 880];
const heightAdaptive = heights.map((height) => {
  if (width.value > 1920) {
    return height;
  } else if (width.value > 1100) {
    return (height / DEFAULT_WIDTH) * width.value;
  } else {
    return height * 0.75;
  }
});
const DEFAULT_WIDTH = 1920;
// // Добавляем плавность к scrollYProgress с помощью useSpring
// const smoothScrollProgress = useSpring(scrollYProgress, {
//   stiffness: 100,
//   damping: 30,
//   restDelta: 0.001,
// });

// // Используем плавный прогресс для трансформации
// const translateX = useTransform(smoothScrollProgress, [0.3, 0.6], [0, 1000]);
// // const rotateZ = useTransform(smoothScrollProgress, [0, 0.1], [-500, -300]);
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
  max-width: 1920px;
  width: 100%;
  height: clamp(200px, 89vw, 1520px);
  margin: 0 auto;
  margin-top: 7.5vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;

  .gallery__image {
    max-width: 602px;
    width: 30vw;
    border-radius: 19px;
    background-color: rgba(0, 0, 0, 0.46);
  }
}

.icecream-wrapper {
  position: absolute;
  bottom: -10vw;
}

@media (max-width: 1100px) {
  .gallery__images {
    height: auto;
    align-items: center;
  }

  .gallery__image {
    width: 402px !important;

    border-radius: 19px;
    background-color: rgba(0, 0, 0, 0.46);
  }
}

@media (max-width: 500px) {
  .gallery {
    margin-top: 100px;
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
      width: 100% !important;
      border-radius: 19px;
      background-color: rgba(0, 0, 0, 0.46);
    }
  }

  .icecream-wrapper {
    left: 5vw;
    bottom: -50px;
  }
}
</style>
