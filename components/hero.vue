<template>
  <div class="circles-wrapper animate__animated animate__fadeIn">
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
          duration: 0.8,
          delay: 0,
          ease: [0, 0.2, 0.58, 1],
        }"
      >
        <h1>
          Твое пространство <br />
          для душевного<br />
          пути
        </h1>
      </motion.div>

      <div class="motion-container" ref="containerRef">
        <div class="subtitle-global">
          Персональные подсказки, проверенные эксперты и практики для заботы о
          себе в одном приложении.
        </div>
      </div>
      <div class="hero__image animate__animated animate__fadeIn">
        <img
          src="/images/hero-phone@2x.png"
          alt="Alma Logo"
          width="317"
          height="647"
        />
      </div>
      <div class="subtitle-global" style="margin-top: 72px; opacity: 1">
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
    // await nextTick();
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
          duration: 0.25,
          bounce: 0,
          delay: stagger(0.01),
        }
      );
    }, 1000);
  });
});
</script>

<style scoped lang="scss">
.motion-container {
  width: 100%;
  max-width: 518px;
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
  top: 23px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 36px;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 576px;

  h1 {
    margin-top: 303px;
  }

  .btn__content {
    position: relative;
    bottom: 2px;
  }
}

.hero__image {
  margin-top: 187px;
}

.hero__access {
  color: rgba(95, 95, 95, 1);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.28px;
  text-align: center;
  line-height: 23px;
  margin-top: 18px;
}

@media (min-width: 500px) {
  h1 br {
    display: none;
  }

  .subtitle-global br {
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
    margin-bottom: 63px;
  }

  .hero__image {
    margin-top: 148px;
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

  .subtitle-global {
    width: 90%;
    margin: 40px auto;
  }

  .hero {
    width: 100%;
    padding: 0 7px;
    box-sizing: border-box;
    margin-bottom: 90px;

    h1 {
      font-size: 36px;
      margin: 165px 9px 0 9px;
    }
    .btn__content {
      font-size: 14px;
      padding: 9px 0;
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
  height: 396px;
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
  top: 311px;
  transform: rotate(165deg);
}

.circle-bg--left {
  left: -27vw;
  top: 427px;
  transform: rotate(195deg);
}

@media (max-width: 500px) {
  .circle-bg {
    display: none;
  }
}
</style>
