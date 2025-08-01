<template>
  <div class="wrapper animate__animated animate__zoomIn">
    <div class="cross" @click="setIsOpened">×</div>
    <InputComp label="Как вас зовут" placeholder="Ваше имя" />
    <InputComp
      label="Ваша экспертная область"
      placeholder="Например, астрология"
    />
    <InputComp label="Ссылка на соц.сеть" placeholder="instagram.com/link" />
    <InputComp
      label="Контакт для обратной связи"
      placeholder="Номер телефона или мессенджера"
    />
    <BaseButton variant="big" style="margin-top: 14px"
      >Отправить заявку</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import useApplicationForm from "~/composables/useApplicationForm";

const { isOpened, setIsOpened } = useApplicationForm();
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: calc(50vh - 295px);
  left: calc(50% - 227px);
  // transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 454px;
  border-radius: 30px;
  background-color: rgba(33, 32, 36, 0.6);
  border: 1px solid rgba($color: #fff, $alpha: 0.07);
  padding: 38px;
  justify-content: start;
  align-items: stretch;
  backdrop-filter: blur(45px);
}

.cross {
  position: absolute;
  right: 22px;
  top: 19px;
  width: 14px;
  height: 14px;
  color: rgba(255, 255, 255, 0.21);
  font-family: Manrope-Light;
  font-size: 30px;
  font-weight: 300;
  font-style: extralight;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.41);
  }
}

@media (max-width: 500px) {
  .wrapper {
    padding: 11vh 18px;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: none;
    border-radius: 0;
    border: none;
  }
}
</style>
