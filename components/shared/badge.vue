<template>
  <div class="badge" :style="`top: ${top}px; left: ${left}px`">
    <img :src="img" alt="App UI example" width="67" height="45" />
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
</style>
