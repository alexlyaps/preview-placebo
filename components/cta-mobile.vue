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
          src="/images/cta-phone@2x.png"
          sizes="(max-width: 500px) 100vw, 353px"
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
      style="margin-bottom: 45px; opacity: 1; width: 90vw"
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
  padding: 0 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 94vw;
  margin: 0 auto;
}

br {
  display: none;
}

h2.cta__heading {
  margin: 90px 27px 0 27px !important;
  font-size: 36px;
}
.image-wrapper {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 45px;
}
.image-wrapper__inner {
  left: -12px;
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

@media (min-width: 450px) {
  .cta {
    display: none;
  }
}
</style>
