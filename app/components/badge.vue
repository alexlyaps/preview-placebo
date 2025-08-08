<template>
  <div class="badge">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// базовый стиль
.badge {
  height: clamp(18px, 2vw, 38px);
  border-radius: 19px;
  font-size: clamp(10px, 0.8vw, 18px);
  background-color: rgba(255, 255, 255, 1);
  color: rgba(120, 88, 88, 1);
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
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
