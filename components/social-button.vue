<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <span :class="['btn', variantClass]">
      <Icon
        v-if="variant === 'vk' || variant === 'tg'"
        :name="`my-icon:${variant}`"
        :size="variant === 'vk' ? '6px' : '8px'"
      />
      <div v-else-if="variant === 'instagram'" class="instagram-logo">
        <div class="instagram-logo__child"></div>
      </div>
      <div v-else class="youtube-logo"></div>
    </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: "tg" | "vk" | "instagram" | "youtube";
  href: string;
}>();

const variantClass = `btn--${props.variant}`;
</script>

<style scoped lang="scss">
// базовый стиль
.btn {
  height: 18px;
  width: 18px;
  background-color: rgba(255, 255, 255, 0.23);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    color: #000;
  }
}

.btn--tg {
  border-radius: 50%;
}

.btn--vk,
.btn--instagram {
  border-radius: 5px;
}

.btn--youtube {
  width: 22px;
  height: 16px;
  border-radius: 5px;

  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 3px;
    border-left: 8px solid #fff;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
}

.instagram-logo {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #fff;

  position: relative;

  .instagram-logo__child {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: -2px;
    right: -2px;
  }
}
</style>
