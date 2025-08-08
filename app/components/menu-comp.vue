<template>
  <section class="menu" id="menu">
    <h3 class="fade-item">
      something
      <span class="bear-wrapper"
        ><img
          src="/images/menu-bear@2x.png"
          alt="Haribo Bear"
          :width="
            width > 400
              ? Math.min(Math.max((89 / DEFAULT_WIDTH) * width, 40), 89)
              : 30
          "
          :height="
            width > 400
              ? Math.min(Math.max((119 / DEFAULT_WIDTH) * width, 55), 119)
              : 42
          "
        /> </span
      >for <br />
      everyone
    </h3>
    <div class="subtitle fade-item">
      <p>Еда, какой мы себе ее <br />представляем</p>
    </div>
    <BaseButton variant="big" style="margin-top: 64px" class="fade-item"
      >Меню</BaseButton
    >
    <div class="menu__images fade-item">
      <div class="menu-image" v-for="i in 20" :key="i"></div>
    </div>
    <div class="menu__decoration">
      <div class="angel-wrapper fade-item">
        <img
          src="/images/menu-angel@2x.png"
          alt="Angel"
          :width="Math.max((369 / DEFAULT_WIDTH) * width, 160)"
          :height="Math.max((215 / DEFAULT_WIDTH) * width, 100)"
        />
      </div>
      <div class="plate-wrapper fade-item">
        <img
          src="/images/menu-plate@2x.png"
          alt="Angel"
          :width="Math.max((215 / DEFAULT_WIDTH) * width, 100)"
          :height="Math.max((215 / DEFAULT_WIDTH) * width, 100)"
        />
      </div>
    </div>
    <div class="link-wrapper fade-item">
      Share with <a href="" target="_blank" style="color: #e37a56">@sbstnc</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion, useScroll } from "motion-v";
const { scrollYProgress } = useScroll();
import { useScreenWidth } from "~/composables/useScreenWidth";

const { width } = useScreenWidth();
const DEFAULT_WIDTH = 1920;

// const smoothScrollProgress = useSpring(scrollYProgress, {
//   stiffness: 100,
//   damping: 30,
//   restDelta: 0.001,
// });

// // Используем плавный прогресс для трансформации
// const angelTranslateX = useTransform(
//   smoothScrollProgress,
//   [0.5, 0.8],
//   [-500, 300]
// );

// const plateTranslateX = useTransform(
//   smoothScrollProgress,
//   [0.5, 0.8],
//   [500, -300]
// );
// const rotateZ = useTransform(smoothScrollProgress, [0.5, 0.8], [900, 500]);
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
    right: 13vw;
    top: -6.25vw;
  }

  .plate-wrapper {
    position: absolute;
    left: 18.6vw;
    bottom: -5.5vw;
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
  transform: rotateZ(-17deg) !important;
}

@media (max-width: 500px) {
  .menu__images {
    position: relative;
    height: 200px;
    width: calc(200px * 20);
    margin-top: 130px;
    display: flex;
    gap: 1.45vw;
    animation: scroll 80s linear infinite;

    .menu-image {
      height: 100%;
      width: 200px;
      border-radius: 23px;
      background-color: #777;
    }
  }

  .menu__decoration {
    position: relative;
    height: 200px;
    width: 90vw;
    top: -200px;
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
    top: -70px;
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
