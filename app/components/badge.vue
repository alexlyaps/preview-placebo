<template>
  <div class="badge">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// базовый стиль
.badge {
  height: 38px;
  border-radius: 19px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(120, 88, 88, 1);
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
}

@media (max-width: 500px) {
  .badge {
    height: 52px;
    padding: 0 9px;
    gap: 19px;
  }

  .img-wrapper {
    height: 30px;
    width: 44px;

    & img {
      width: 100% !important;
      height: 100% !important;
    }
  }

  .text {
    font-size: 14px;
  }
}
</style>
