<template>
  <section class="cta">
    <h2 class="cta__heading">
      Наши эксперты<br />
      на расстоянии одного <br />клика
    </h2>
    <div class="subtitle-global">
      Выбирайте область и бронируйте личную сессию с экспертом
    </div>
    <div class="image-wrapper">
      <div class="image-wrapper__inner">
        <img
          src="/images/mobile-cta.png"
          sizes="(max-width: 500px) 100vw, 392px"
          alt="App UI example"
          width="336"
          height="674"
        />
        <div class="gradient"></div>

        <Badge
          :top="360"
          :left="170"
          text="Психологи"
          img="/images/badge-1@2x.png"
        />
        <Badge
          :top="400"
          :left="0"
          text="Астрологи"
          img="/images/badge-2@2x.png"
        />
        <Badge
          :top="475"
          :left="144"
          text="Нумерологи"
          img="/images/badge-3@2x.png"
        />
        <Badge
          :top="548"
          :left="72"
          text="Коучи"
          img="/images/badge-4@2x.png"
        />
      </div>
    </div>
    <div
      class="subtitle-global"
      style="margin-bottom: 0px; opacity: 1; width: 90vw"
    >
      Мы тщательно отбираем, проверяем и обучаем наставников.
    </div>
    <div
      class="subtitle-global"
      style="margin-bottom: 50px; opacity: 1; width: 90vw"
    >
      Каждый готов помочь разобраться в себе, своих возможностях и гармонии с
      миром.
    </div>
    <BaseButton variant="big" @click="">Скачать Alma</BaseButton>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "assets/scss/main.scss" as *;

.cta {
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

br {
  display: none;
}

h2.cta__heading {
  margin: 100px 30px 0 30px !important;
  font-size: 40px;
}
.image-wrapper {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
}
.image-wrapper__inner {
  left: -13px;
  width: 90vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.gradient {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  background: linear-gradient(to top, rgba(#000, 1), rgba(#000, 0));
}

@media (min-width: 500px) {
  .cta {
    display: none;
  }
}
</style>
