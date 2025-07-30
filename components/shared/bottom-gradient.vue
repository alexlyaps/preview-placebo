<template>
  <div class="wrapper">
    <div class="bottom-gradient"></div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  overflow: hidden;
  height: calc(1941px - 766px);
  position: absolute;
  bottom: 0px;
  left: 0;
}

.bottom-gradient {
  position: absolute;
  bottom: -766px;
  left: 0;
  width: 100vw;
  height: 1941px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(26, 31, 65, 1) 35%,
    rgba(106, 118, 169, 1) 100%
  );
  z-index: -1;
  clip-path: inset(0 0 766px 0);
  overflow: hidden;
}
</style>
