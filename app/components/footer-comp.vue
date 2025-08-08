<template>
  <section class="footer">
    <h3 class="fade-item">
      one
      <span class="ball-wrapper"
        ><img
          src="/images/footer-ball@2x.png"
          alt="Ball"
          :width="Math.min(Math.max((120 / DEFAULT_WIDTH) * width, 64), 120)"
          :height="Math.min(Math.max((120 / DEFAULT_WIDTH) * width, 64), 120)"
        /> </span
      >more <br />
      thing
    </h3>

    <div class="more-wrapper fade-item">
      <iframe
        width="100%"
        height="245"
        scrolling="no"
        frameborder="no"
        allow="encrypted-media"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/181214130&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style="
          font-size: 10px;
          color: #cccccc;
          line-break: anywhere;
          word-break: normal;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 100;
        "
      >
        <a
          href="https://soundcloud.com/igor-lkid"
          title="Igor LKid"
          target="_blank"
          style="color: #cccccc; text-decoration: none"
          >Igor LKid</a
        >
        ·
        <a
          href="https://soundcloud.com/igor-lkid/kettenkarussell-fusion-live"
          title="Kettenkarussell - Fusion (live)"
          target="_blank"
          style="color: #cccccc; text-decoration: none"
          >Kettenkarussell - Fusion (live)</a
        >
      </div>
    </div>
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
  margin-left: -1vw;
  bottom: -20px;
}

.more-wrapper {
  max-width: 864px;
  width: 90%;
  height: 245px;
  margin-top: 3vw;
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
