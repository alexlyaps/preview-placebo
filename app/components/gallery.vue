<template>
  <section class="gallery">
    <h3>
      Flavors that <br />sing
      <span class="vinyl-wrapper"
        ><img
          src="/images/gallery-vinyl@2x.png"
          alt="Vinyl"
          width="90"
          height="90"
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
      <motion.div class="icecream-wrapper" :style="{ translateX }">
        <img
          src="/images/gallery-icecream@2x.png"
          alt="Vinyl"
          width="248"
          height="248"
        />
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion, useScroll } from "motion-v";
const { scrollYProgress } = useScroll();
// Добавляем плавность к scrollYProgress с помощью useSpring
const smoothScrollProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});

// Используем плавный прогресс для трансформации
const translateX = useTransform(smoothScrollProgress, [0.3, 0.6], [0, 1000]);
// const rotateZ = useTransform(smoothScrollProgress, [0, 0.1], [-500, -300]);
</script>

<style scoped lang="scss">
.gallery {
  margin-top: 260px;
  padding: 20px;
}

.vinyl-wrapper {
  width: 90px;
  height: 90px;
  margin-left: -20px;
  position: relative;
  bottom: -12px;
}

.gallery__images {
  position: relative;
  width: 100%;
  height: 1500px;
  background-color: #777;
  margin-top: 130px;
}

.gallery__images {
  position: relative;
}

.icecream-wrapper {
  position: absolute;
  bottom: -100px;
  left: 17%;
}
</style>
