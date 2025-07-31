<template>
  <div class="badge" :style="`top: ${top}px; left: ${left}px`">
    <div class="img-wrapper">
      <img :src="img" width="67" height="45" />
    </div>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string;
  text: string;
  top: number;
  left: number;
}>();
</script>

<style scoped lang="scss">
// базовый стиль
.badge {
  position: absolute;
  height: 78px;
  display: flex;
  gap: 29px;
  align-items: center;
  padding: 0 20px;
  border-radius: 39px;
  background-color: rgba(47, 47, 47, 0.55);
  backdrop-filter: blur(10px);
}

.text {
  font-size: 20px;
}

@media (max-width: 500px) {
  .badge {
    height: 58px;
    padding: 0 10px;
    gap: 21px;
  }

  .img-wrapper {
    height: 33px;
    width: 49px;

    & img {
      width: 100% !important;
      height: 100% !important;
    }
  }

  .text {
    font-size: 16px;
  }
}
</style>
