<template>
  <div class="circles-wrapper">
    <div class="circle-bg circle-bg--left"></div>
    <div class="circle-bg circle-bg--right"></div>
  </div>
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
          duration: 1.8,
          delay: 0.1,
          ease: [0, 0.1, 0.8, 1.01],
        }"
      >
        <h1>Твое пространство для душевного пути</h1>
      </motion.div>

      <div class="motion-container" ref="containerRef">
        <div class="subtitle-global">
          Персональные подсказки, проверенные эксперты и практики для заботы о
          себе в одном приложении.
        </div>
      </div>
      <div class="hero__image">
        <img
          src="/images/hero-phone@2x.png"
          alt="Alma Logo"
          width="396"
          height="809"
        />
      </div>
      <div class="subtitle-global" style="margin-top: 80px; opacity: 1">
        Alma — мобильный сервис, который поможет <br />
        научиться понимать себя глубже через <br />изучение личных чисел,
        космических циклов<br />
        и взаимосвязей с миром вокруг.
      </div>
      <BaseButton variant="big" @click="setIsOpened">Скачать Alma</BaseButton>
      <div class="hero__access">Доступно на iOS и Android</div>
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

    const { words } = splitText(containerRef.value.querySelector("div")!);

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
  max-width: 575px;
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
    margin-top: 337px;
  }

  .btn__content {
    position: relative;
    bottom: 2px;
  }
}

.hero__image {
  margin-top: 330px;
}

.hero__access {
  color: rgba(95, 95, 95, 1);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.31px;
  text-align: center;
  line-height: 26px;
  margin-top: 20px;
}

@media (min-width: 500px) {
  h1 br {
    display: none;
  }

  .hero__logo {
    display: none;
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

  .hero {
    margin-bottom: 70px;
  }

  .hero__image {
    margin-top: 120px;
    width: 72.5vw;
    aspect-ratio: 0.5;

    & img {
      width: 100%;
      height: 100%;
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

    h1 {
      font-size: 40px;
      margin: 183px 10px 0 10px;
    }
    .btn__content {
      font-size: 15px;
      padding: 10px 0;
    }
  }

  .hero-wrapper button,
  .hero-wrapper .hero__access {
    display: none;
  }
}

.circles-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  max-width: 100vw;
  height: 100vw;
  overflow: hidden;
}

.circle-bg {
  position: absolute;
  width: 90vw;
  height: 440px;
  border-radius: 50%;
  opacity: 0.57;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 3px; /* толщина рамки */
    border-radius: 50%;
    background: linear-gradient(to top, #000, #fff);
    -webkit-mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 3px),
      black 100%
    );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 3px),
      black 100%
    );
    z-index: -1;
  }
}

.circle-bg--right {
  left: 22vw;
  top: 345px;
  transform: rotate(165deg);
}

.circle-bg--left {
  left: -27vw;
  top: 474px;
  transform: rotate(195deg);
}

@media (max-width: 500px) {
  .circle-bg {
    display: none;
  }
}
</style>
