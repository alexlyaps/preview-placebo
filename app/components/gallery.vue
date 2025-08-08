<template>
  <section class="gallery" id="interier">
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
      <div class="gallery__column" v-for="(column, i) in heights" :key="i">
        <div
          class="gallery__image"
          v-for="(height, j) in column"
          :key="j"
          :style="{
            height: `${Math.min(
              Math.max((height / DEFAULT_WIDTH) * width, height / 2),
              height
            )}px`,
          }"
        />
        <div class="icecream-wrapper" v-if="i === 0">
          <img
            src="/images/gallery-icecream@2x.png"
            alt="Icecream"
            :width="Math.min(Math.max((248 / DEFAULT_WIDTH) * width, 124), 248)"
            :height="
              Math.min(Math.max((248 / DEFAULT_WIDTH) * width, 124), 248)
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScreenWidth } from "~/composables/useScreenWidth";

const { width } = useScreenWidth();
const heights = [
  [470, 444, 528],
  [739, 738],
  [602, 880],
];

const DEFAULT_WIDTH = 1920;
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
  // height: clamp(200px, 89vw, 1580px);
  margin: 0 auto;
  margin-top: 7.5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: clamp(10px, 1.7vw, 25px);

  .gallery__column {
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 1.7vw, 25px);
    height: auto;
  }

  .gallery__image {
    max-width: 602px;
    width: 30vw;
    border-radius: 19px;
    background-color: rgba(0, 0, 0, 0.46);
  }
}

.icecream-wrapper {
  position: absolute;
  bottom: -5vw;
}

@media (max-width: 1100px) {
  .gallery__images {
    flex-direction: column;
    height: auto;
    align-items: center;
  }

  .gallery__image {
    max-width: 402px !important;
    width: 80vw !important;
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
      width: 400px !important;
      border-radius: 19px;
      background-color: rgba(0, 0, 0, 0.46);
    }
  }

  .icecream-wrapper {
    left: 5vw;
    transform: translateX(-50%) !important;
  }
}
</style>
