<template>
  <div class="card-cta">
    <div class="img-wrapper">
      <img
        ref="imgEl"
        :src="img"
        alt=""
        :width="scaledWidth"
        :height="scaledHeight"
        loading="lazy"
      />
    </div>
    <div
      class="card-cta__column"
      :style="button ? '' : 'transform: translateY(-5px)'"
    >
      <div class="card-cta__title">{{ title }}</div>
      <div class="card-cta__text">
        <span v-for="(line, index) in text" :key="index">
          {{ line }}<br />
        </span>
      </div>
      <BaseButton class="small" v-if="button" @click="setIsOpened"
        >Оставить заявку</BaseButton
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.img-wrapper img {
  display: block; /* убирает нижний отступ как у inline-элементов */
}

.card-cta {
  max-width: 544px;
  width: 100%;
  height: 205px;
  display: grid;
  grid-template-columns: 176px auto;
  grid-template-areas: "img column";
  align-items: start;
  border-radius: 33px;
  background-color: rgba(33, 32, 36, 1);
}

@media (max-width: 500px) {
  .card-cta {
    padding: 18px 18px;
    height: 190px;
    grid-template-columns: 30% auto;
    border-radius: 24px;
  }

  br {
    display: none;
  }

  .img-wrapper img {
    transform: scale(0.8);
  }
}

.card-cta__column {
  grid-area: column;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 350px;
  width: 100%;
  // height: 100%;
  gap: 10px;
  padding: 0 5px;
}

.card-cta__title {
  font-size: 18px;
  font-weight: 600;
}

.card-cta__text {
  grid-area: text;
  opacity: 0.63;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
}
</style>

<script setup lang="ts">
import useApplicationForm from "~/composables/useApplicationForm";

const { setIsOpened } = useApplicationForm();

defineProps<{
  img: string;
  title: string;
  text: string[];
  button?: boolean;
}>();

const imgEl = ref<HTMLImageElement | null>(null);
const scaledWidth = ref<number>();
const scaledHeight = ref<number>();

onMounted(() => {
  if (imgEl.value && imgEl.value.complete) {
    applyNaturalSize();
  } else {
    imgEl.value?.addEventListener("load", applyNaturalSize);
  }
});

function applyNaturalSize() {
  if (!imgEl.value) return;
  scaledWidth.value = imgEl.value.naturalWidth / 2;
  scaledHeight.value = imgEl.value.naturalHeight / 2;
}
</script>
