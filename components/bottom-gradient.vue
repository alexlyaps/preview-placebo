<template>
  <div class="wrapper">
    <div class="bottom-gradient"></div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  overflow: hidden;
  height: calc(1941px - 650px);
  width: 100vw;
  position: absolute;
  bottom: 0px;
  left: 0;
  z-index: -1;
}

.bottom-gradient {
  position: absolute;
  bottom: -689px;
  left: 0;
  width: 100vw;
  height: 1641px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(26, 31, 65, 1) 35%,
    rgba(106, 118, 169, 1) 100%
  );
  z-index: -1;
  clip-path: inset(0 0 689px 0);
  overflow: hidden;
}
</style>
