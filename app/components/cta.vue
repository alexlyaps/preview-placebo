<template>
  <section class="cta">
    <h3 class="fade-item">
      <span style="position: relative"
        ><span class="point-wrapper"
          ><img
            src="/images/cta-point@2x.png"
            alt="Pointer"
            :width="Math.min(Math.max((88 / DEFAULT_WIDTH) * width, 44), 88)"
            :height="Math.min(Math.max((106 / DEFAULT_WIDTH) * width, 53), 106)"
          /> </span
        >m</span
      >eeting <br />
      point
    </h3>
    <div class="subtitle fade-item">
      <p>Красноказарменная 19</p>
    </div>
    <BaseButton variant="big" style="margin-top: 10px" class="fade-item"
      >Открыть в Яндексе</BaseButton
    >
    <div class="cta__images">
      <div style="position: relative; overflow: hidden">
        <a
          href="https://yandex.com/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 0px"
          >Москва</a
        ><a
          href="https://yandex.com/maps/213/moscow/house/krasnokazarmennaya_ulitsa_19/Z04YcQZgSUwHQFtvfXt0cnVqYQ==/?ll=37.710090%2C55.753995&utm_medium=mapframe&utm_source=maps&z=17.11"
          style="color: #eee; font-size: 12px; position: absolute; top: 14px"
          >Красноказарменная улица, 19 — Яндекс Карты</a
        ><iframe
          src="https://yandex.com/map-widget/v1/?ll=37.710090%2C55.753995&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcxNDMwMxJN0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCa0YDQsNGB0L3QvtC60LDQt9Cw0YDQvNC10L3QvdCw0Y8g0YPQu9C40YbQsCwgMTkiCg0j1xZCFRgEX0I%2C&z=17.11"
          :width="width > 500 ? 765 : '100%'"
          height="375"
          frameborder="1"
          allowfullscreen="true"
          allow="encrypted-media"
          style="
            position: relative;
            border-radius: 35px;
            border: none;
            outline: none;
          "
        ></iframe>
      </div>
      <motion.div
        class="volain-wrapper"
        :style="{ rotateZ, translateX, translateY }"
      >
        <img
          src="/images/cta-volain@2x.png"
          alt="Volain"
          :width="Math.min(Math.max((171 / DEFAULT_WIDTH) * width, 85), 171)"
          :height="Math.min(Math.max((171 / DEFAULT_WIDTH) * width, 85), 171)"
        />
      </motion.div>
    </div>
    <div class="volain-container">
      <motion.div
        class="volain-wrapper"
        :style="{ rotateZ, translateX, translateY }"
      >
        <img
          src="/images/cta-volain@2x.png"
          alt="Volain"
          :width="Math.min(Math.max((171 / DEFAULT_WIDTH) * width, 85), 171)"
          :height="Math.min(Math.max((171 / DEFAULT_WIDTH) * width, 85), 171)"
        />
      </motion.div>
    </div>
    <div class="subtitle fade-item" style="margin-top: 96px">
      <p>
        Звони, пиши в вотсап или <br />
        бронируй по кнопке
      </p>
    </div>
    <BaseButton variant="big-blue" class="fade-item">Бронь</BaseButton>
    <div class="phone">+7 (968) 907-73-86</div>
    <div class="whatsapp-icon fade-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          fill="#3F7D48"
          transform="translate(0 3.8147e-05)"
          d="M11.5 0C17.851219 0 23 5.1487226 23 11.5C23 17.851219 17.851219 23 11.5 23C9.3269596 23 7.291667 22.39625 5.5564666 21.34676L2.0697124 22.37233C1.187766 22.631769 0.3682645 21.812281 0.62768149 20.930229L1.653194 17.443544C0.60380751 15.70831 0 13.67304 0 11.5C0 5.1487226 5.1487226 0 11.5 0ZM8.1667824 5.9616919C7.1089549 6.4150448 6.1936011 7.5760736 6.237577 8.7709923C6.2664418 9.5552349 6.5730782 11.77623 8.898941 14.102105C11.224805 16.42798 13.4458 16.73457 14.229985 16.763435C15.422765 16.807365 16.58415 15.89645 17.036905 14.83983C17.147881 14.58108 17.120165 14.269775 16.934324 14.03161C16.30493 13.225575 15.452895 12.648045 14.62041 12.07316C14.26069 11.8243 13.766075 11.90135 13.501115 12.253825L12.81031 13.30619C12.733605 13.422915 12.58123 13.46305 12.46002 13.393705C11.992545 13.126445 11.31094 12.6707 10.82058 12.18034C10.330795 11.690555 9.9027653 11.03977 9.6625299 10.602425C9.5993948 10.487425 9.6343546 10.3454 9.7395802 10.2672L10.801605 9.4785299C11.118315 9.2043695 11.173975 8.7387009 10.94087 8.3976221C10.42475 7.6425433 9.8235302 6.6828799 8.9533253 6.0481491C8.7156544 5.8747749 8.4150105 5.8553171 8.1667824 5.9616919Z"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion, useScroll } from "motion-v";
import { useScreenWidth } from "~/composables/useScreenWidth";

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

const rotateZ = useTransform(smoothScrollProgress, [0.6, 1], [500, -300]);
const translateX = useTransform(smoothScrollProgress, [0.6, 1], [500, -300]);
const translateY = useTransform(smoothScrollProgress, [0.6, 1], [500, 100]);
</script>

<style scoped lang="scss">
.cta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15.6vw;
}

h3 {
  position: relative;
}

.point-wrapper {
  width: 2px;
  height: 2px;
  position: absolute;
  top: -3vw;
  left: -2.8vw;
}

.cta__images {
  position: relative;
  max-width: 765px;
  width: 90%;
  height: 375px;
  margin-top: 75px;
  border-radius: 45px;
  background-color: rgba(0, 0, 0, 1);
  overflow: hidden;
}

.volain-container {
  position: relative;
  top: -375px;
  max-width: 765px;
  margin-bottom: -275px;
  width: 90%;
  height: 375px;
}

.volain-wrapper {
  position: absolute;
  position: absolute;
  right: -80px;
  bottom: 13%;
  z-index: 1;
}

.phone {
  // font-size: 16px;
  // color: rgba(120, 88, 88, 1);
  margin-top: 30px;
}

.whatsapp-icon {
  cursor: pointer;
  margin-top: 30px;
}

@media (max-width: 500px) {
  .cta {
    margin-top: 100px;
  }

  .point-wrapper {
    position: absolute;
    top: -30px;
    left: -30px;
  }

  .subtitle {
    margin-top: 0px !important;
  }
}
</style>
