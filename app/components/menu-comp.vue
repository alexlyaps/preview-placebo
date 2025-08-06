<template>
  <section class="menu">
    <h3>
      something
      <span class="bear-wrapper"
        ><img
          src="/images/menu-bear@2x.png"
          alt="Haribo Bear"
          width="89"
          height="119"
        /> </span
      >for <br />
      everyone
    </h3>
    <div class="subtitle">
      <p>Еда, какой мы себе ее <br />представляем</p>
    </div>
    <BaseButton variant="big" style="margin-top: 64px">Меню</BaseButton>
    <div class="menu__images">
      <motion.div
        class="angel-wrapper"
        :style="{ translateX: angelTranslateX }"
      >
        <img
          src="/images/menu-angel@2x.png"
          alt="Angel"
          width="369"
          height="215"
        />
      </motion.div>
      <motion.div
        class="plate-wrapper"
        :style="{ translateX: plateTranslateX }"
      >
        <motion.img
          src="/images/menu-plate@2x.png"
          alt="Angel"
          width="215"
          height="215"
          :style="{ rotateZ }"
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
const angelTranslateX = useTransform(
  smoothScrollProgress,
  [0.5, 0.8],
  [-500, 300]
);

const plateTranslateX = useTransform(
  smoothScrollProgress,
  [0.5, 0.8],
  [500, -300]
);
const rotateZ = useTransform(smoothScrollProgress, [0.5, 0.8], [900, 500]);
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3 {
  margin-top: 300px;
}

.bear-wrapper {
  position: relative;
  margin-left: -15px;
  top: 15px;
}

.menu__images {
  position: relative;
  height: 402px;
  width: 100%;
  margin-top: 130px;
  background-color: #777;

  .angel-wrapper {
    position: absolute;
    right: 25%;
    top: -120px;
  }

  .plate-wrapper {
    position: absolute;
    bottom: -100px;
    left: 30%;
  }
}
</style>
