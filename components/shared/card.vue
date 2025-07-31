<template>
  <div
    :class="[
      'card',
      {
        'card--height-250px': url.includes('-3') || url.includes('-3'),
      },
      {
        'card--height-528px':
          url.includes('-1') || url.includes('-2') || url.includes('-4'),
      },
    ]"
    :style="{
      height: `${height}px`,
    }"
  >
    <div class="bg" :style="{ backgroundImage: `url(${url})` }"></div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 542px;
  max-width: 100%;
  border-radius: 33px;
  padding: 56px 50px;
  overflow: hidden;
  position: relative;
}

.bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position: center;
  transition: transform 0.4s ease;
  z-index: -1;
}

.card:hover .bg {
  transform: scale(1.03);
}

@media (max-width: 500px) {
  .card {
    width: 100%;
    padding: 27px 30px;
    border-radius: 28px;
    box-sizing: border-box;
    height: 280px;
  }

  .card--height-250px {
    height: 220px !important;
  }

  .card--height-528px {
    height: 120vw !important;
  }

  .card:hover .bg {
    transform: scale(1);
  }
}
</style>

<script setup lang="ts">
const props = defineProps<{
  height: Number;
  url: String;
}>();
</script>
