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
          alt="App UI example"
          width="392"
          height="809"
        />
        <Badge
          :top="325"
          :left="349"
          text="Психологи"
          img="/images/badge-1@2x.png"
        />
        <Badge
          :top="446"
          :left="501"
          text="Астрологи"
          img="/images/badge-2@2x.png"
        />
        <Badge
          :top="543"
          :left="-361"
          text="Нумерологи"
          img="/images/badge-3@2x.png"
        />
        <Badge
          :top="648"
          :left="-160"
          text="Коучи"
          img="/images/badge-4@2x.png"
        />
      </div>
    </div>
    <div class="subtitle-global" style="margin-bottom: 50px; opacity: 1">
      Мы тщательно отбираем, проверяем и обучаем <br />
      наставников. Каждый готов помочь разобраться в себе, <br />
      своих возможностях и гармонии с миром.
    </div>
    <BaseButton variant="big" @click="">Скачать Alma</BaseButton>
  </section>
</template>

<style scoped lang="scss">
@use "assets/scss/main.scss" as *;

.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta__heading {
  margin-top: 309px;
  max-width: 570px;
  width: 100%;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 75px;
}

.image-wrapper__inner {
  position: relative;
}

@media (max-width: 500px) {
  .cta {
    padding: 0 8px;
  }

  h2.cta__heading {
    margin: 100px 30px 0 30px !important;
    font-size: 40px;
  }
}
</style>

<script setup lang="ts">
type CtaCardProps = {
  title: string;
  text: string[];
  img: string;
  button?: boolean;
};

const cardProps: CtaCardProps[] = [
  {
    title: "1. Подключение",
    text: [
      "Оставьте заявку, пройдите короткое ",
      "интервью и подпишите оферту — получите ",
      "доступ к кабинету эксперта.",
    ],
    img: "/images/card-cta-1.png",
    button: true,
  },
  {
    title: "2. Настройка профиля",
    text: [
      "Выберите до 3 направлений, опишите ",
      "форматы сессий и установите свою ",
      "цену.",
    ],
    img: "/images/card-cta-2.png",
  },
  {
    title: "3. Работа с клиентами",
    text: [
      "Принимайте заявки, управляйте ",
      "расписанием и проводите сессии прямо ",
      "в Alma.",
    ],
    img: "/images/card-cta-3.png",
  },
  {
    title: "4. Оплата",
    text: [
      "Получайте вознаграждение ",
      "в Alma Stars (1 Star = 100 ₽) с ",
      "возможностью вывода в рубли.",
    ],
    img: "/images/card-cta-4.png",
  },
  {
    title: "5. Безопасность и гарантии",
    text: [
      "Платформа замораживает оплату клиента ",
      "до сессии. Деньги поступают после ",
      "подтверждения выполнения обеими ",
      "сторонами.",
    ],
    img: "/images/card-cta-5.png",
  },
  {
    title: "6. Привилегии за качество",
    text: [
      "Чем больше проведенных сессий и ",
      "положительных отзывов — тем ",
      "ниже комиссия платформы.",
    ],
    img: "/images/card-cta-6.png",
  },
];
</script>
