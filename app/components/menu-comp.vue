<template>
  <section class="menu">
    <h3>
      something
      <span class="bear-wrapper"
        ><img
          src="/images/menu-bear@2x.png"
          alt="Haribo Bear"
          :width="Math.max((89 / DEFAULT_WIDTH) * width, 40)"
          :height="Math.max((119 / DEFAULT_WIDTH) * width, 55)"
        /> </span
      >for <br />
      everyone
    </h3>
    <div class="subtitle">
      <p>Еда, какой мы себе ее <br />представляем</p>
    </div>
    <BaseButton variant="big" style="margin-top: 64px">Меню</BaseButton>
    <div class="menu__images">
      <div class="menu-image" v-for="i in 20" :key="i"></div>
    </div>
    <div class="menu__decoration">
      <motion.div
        class="angel-wrapper"
        :style="{ translateX: width > 500 ? angelTranslateX : '0' }"
      >
        <img
          src="/images/menu-angel@2x.png"
          alt="Angel"
          :width="Math.max((369 / DEFAULT_WIDTH) * width, 160)"
          :height="Math.max((215 / DEFAULT_WIDTH) * width, 100)"
        />
      </motion.div>
      <motion.div
        class="plate-wrapper"
        :style="{ translateX: width > 500 ? plateTranslateX : '0' }"
      >
        <motion.img
          src="/images/menu-plate@2x.png"
          alt="Angel"
          :width="Math.max((215 / DEFAULT_WIDTH) * width, 100)"
          :height="Math.max((215 / DEFAULT_WIDTH) * width, 100)"
          :style="{ rotateZ }"
        />
      </motion.div>
    </div>
    <div class="link-wrapper">
      Share with <a href="" target="_blank">@sbstnc</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion, useScroll } from "motion-v";
const { scrollYProgress } = useScroll();
import { useScreenWidth } from "~/composables/useScreenWidth";

const { width } = useScreenWidth();
const DEFAULT_WIDTH = 1920;

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
  margin-top: clamp(150px, 7vw, 300px);
}

.bear-wrapper {
  position: relative;
  margin-left: -15px;
  top: 15px;
}

.menu__decoration {
  position: relative;
  height: 21vw;
  width: 90vw;
  top: -21vw;
  margin-bottom: -19vw;

  .angel-wrapper {
    position: absolute;
    right: 25%;
    top: -6.25vw;
  }

  .plate-wrapper {
    position: absolute;
    bottom: -5.5vw;
    left: 30%;
  }
}

.menu__images {
  position: relative;
  height: 21vw;
  width: calc(22.45vw * 20);
  margin-top: 130px;
  display: flex;
  gap: 1.45vw;
  animation: scroll 80s linear infinite;

  .menu-image {
    height: 21vw;
    width: 21vw;
    border-radius: 23px;
    background-color: #777;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(25%);
  }
  100% {
    transform: translateX(-25%);
  }
}

.link-wrapper {
  position: relative;
  top: 2vw;
  left: 25vw;
  transform: rotateZ(-17deg);
}

@media (max-width: 500px) {
  .menu__images {
    position: relative;
    height: 400px;
    width: calc(400px * 20);
    margin-top: 130px;
    display: flex;
    gap: 1.45vw;
    animation: scroll 80s linear infinite;

    .menu-image {
      height: 400px;
      width: 400px;
      border-radius: 23px;
      background-color: #777;
    }
  }

  .menu__decoration {
    position: relative;
    height: 400px;
    width: 90vw;
    top: -400px;
    margin-bottom: -19vw;

    .angel-wrapper {
      position: absolute;
      right: 0;
      top: -50px;
    }

    .plate-wrapper {
      position: absolute;
      bottom: -50px;
      left: 10%;
    }
  }

  .link-wrapper {
    top: -250px;
    left: 25vw;
    transform: rotateZ(-17deg);
  }

  .bear-wrapper {
    position: relative;
    margin-left: -15px;
    top: 10px;
  }
}
</style>
