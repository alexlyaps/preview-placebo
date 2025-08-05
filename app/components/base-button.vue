<template>
  <button :class="['btn', variantClass]">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: "big" | "store" | "mobile-store" | "rounded" | "text" | "small";
}>();

const variantClass = `btn--${props.variant || "small"}`;
</script>

<style scoped lang="scss">
@use "~/assets/scss/variables.scss" as *;
// базовый стиль
.btn {
  padding: 0 1rem;
  border-radius: 9px;
  transition: 0.2s all ease-in-out, 0.02s border ease-in-out;
  height: 32px;
  border: none;
  cursor: pointer;
}

// варианты
.btn--big {
  background-color: #ffffff;
  height: 73px;
  width: 274px;
  // padding: 18px 57px;
  font-size: 22px;
  color: rgba(255, 255, 255, 1);
  border-radius: 22px;
  background-color: rgba(151, 0, 0, 1);

  &:hover {
    background-color: rgba(188, 117, 95, 1);
  }

  &:active {
    background-color: #5a1444;
  }

  &:disabled {
    color: #888;
  }
}

.btn--store {
  height: 36px;
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    color: #000;
  }
}

.btn--mobile-store {
  height: 36px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  width: 162px;
  height: 51px;
  background-color: rgba(60, 60, 60, 0.49);
  backdrop-filter: blur(10px);

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
  height: 38px;
  border-radius: 19px;
  background-color: rgba(132, 48, 48, 1);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: auto;

  &:hover {
    background-color: rgba(188, 117, 95, 1);
  }
}

.btn--text {
  color: #fff;
  border: none;
  background-color: transparent;
  font-size: 13px;
  font-weight: 500;
  padding: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: $light-gray;
  }
}
</style>
