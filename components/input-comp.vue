<template>
  <div class="input-comp">
    <label v-if="label">{{ label }}</label>
    <input
      @focus="() => (isFocused = true)"
      @blur="() => (isFocused = false)"
      :placeholder="isFocused ? '' : placeholder"
      v-model="inputValue"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

defineProps<{
  label?: string;
  placeholder?: string;
}>();

const isFocused = ref<boolean>(false);
const inputValue = ref("");
</script>

<style lang="scss" scoped>
.input-comp {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
}

label {
  font-size: 16px;
  font-weight: 500;
}

input {
  width: 100%;
  height: 49px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.09);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 0 18px;
  outline: none;
  border: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.63);
  }
}
</style>
