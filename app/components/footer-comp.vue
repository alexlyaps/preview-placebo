<template>
  <section class="footer">
    <h3>
      one
      <span class="ball-wrapper"
        ><img
          src="/images/footer-ball@2x.png"
          alt="Ball"
          :width="Math.max((128 / DEFAULT_WIDTH) * width, 64)"
          :height="Math.max((128 / DEFAULT_WIDTH) * width, 64)"
        /> </span
      >more <br />
      thing
    </h3>

    <div class="more-wrapper"></div>
  </section>
</template>

<script setup lang="ts">
import { useScreenWidth } from "~/composables/useScreenWidth";

const { width } = useScreenWidth();
const DEFAULT_WIDTH = 1920;
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25vw;
  margin-top: 7vw;
}

.ball-wrapper {
  position: relative;
  margin-left: -2vw;
  bottom: -20px;
}

.more-wrapper {
  width: 864px;
  height: 245px;
  background-color: #777;
}

@media (max-width: 500px) {
  .footer {
    margin-top: 100px;
  }

  .ball-wrapper {
    position: relative;
    margin-left: -2vw;
    bottom: -10px;
  }
}
</style>
