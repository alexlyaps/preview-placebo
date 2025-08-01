<template>
  <section class="cta">
    <h2 class="cta__heading fade-item">
      Наши эксперты<br />
      на расстоянии одного <br />клика
    </h2>
    <div class="subtitle-global fade-item">
      Выбирайте область и бронируйте личную сессию с экспертом
    </div>
    <div class="image-wrapper fade-item">
      <div class="image-wrapper__inner">
        <img
          src="/images/cta-phone@2x.png"
          sizes="(max-width: 500px) 100vw, 353px"
          alt="App UI example"
          width="314"
          height="647"
        />

        <Badge
          :top="275"
          :left="279"
          text="Психологи"
          img="/images/badge-1@2x.png"
        />
        <Badge
          :top="376"
          :left="401"
          text="Астрологи"
          img="/images/badge-2@2x.png"
        />
        <Badge
          :top="443"
          :left="-261"
          text="Нумерологи"
          img="/images/badge-3@2x.png"
        />
        <Badge
          :top="528"
          :left="-90"
          text="Коучи"
          img="/images/badge-4@2x.png"
        />
      </div>
    </div>
    <div
      class="subtitle-global fade-item"
      style="margin-bottom: 45px; opacity: 1"
    >
      Мы тщательно отбираем, проверяем и обучаем <br />
      наставников. Каждый готов помочь разобраться в себе, <br />
      своих возможностях и гармонии с миром.
    </div>
    <BaseButton variant="big" @click="" class="fade-item"
      >Скачать Alma</BaseButton
    >
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "assets/scss/main.scss" as *;

.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta__heading {
  margin-top: 248px;
  max-width: 513px;
  width: 100%;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 54px;
  margin-bottom: 68px;
}

.image-wrapper__inner {
  position: relative;
}

@media (max-width: 500px) {
  .cta {
    display: none;
  }
}
</style>
