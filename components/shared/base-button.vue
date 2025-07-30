<template>
  <button :class="['btn', variantClass]">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: "big" | "store" | "mobile-store" | "rounded" | "text";
}>();

const variantClass = `btn--${props.variant || "small"}`;
</script>

<style scoped lang="scss">
@use "~/assets/scss/variables.scss" as *;
// базовый стиль
.btn {
  padding: 0 1rem;
  border-radius: 10px;
  font-weight: 600;
  transition: 0.2s all ease-in-out, 0.02s border ease-in-out;
  height: 36px;
  border: none;
  cursor: pointer;
}

// варианты
.btn--big {
  background-color: #ffffff;
  color: #000000;
  height: 64px;
  padding: 20px 35px;
  border: 1px solid #000;
  border-radius: 17px;
  font-size: 18px;

  &:hover {
    background-color: $light-gray;
  }

  &:active {
    background-color: #676d70;
  }
}

.btn--store {
  height: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    color: #000;
  }
}

.btn--mobile-store {
  height: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  width: 180px;
  height: 57px;
  background-color: rgba(60, 60, 60, 0.49);
  backdrop-filter: blur(11px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    color: #000;
  }
}

.btn--small {
  background-color: #ffffff;
  color: #000000;
  height: 40px;
  padding: 7px 20px;
  border: 1px solid #000;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: $light-gray;
  }

  &:active {
    background-color: #676d70;
  }
}

.btn--rounded {
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  padding: 0 11px;
  gap: 3px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
}

.btn--text {
  color: #fff;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: $light-gray;
  }
}
</style>
