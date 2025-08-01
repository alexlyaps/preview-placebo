<template>
  <section class="cta">
    <h2 class="cta__heading">Как стать экспертом</h2>
    <div class="cta__title">Присоединяйтесь и развивайтесь вместе с Alma</div>
    <div class="cta__cards-wrapper">
      <div class="cta__cards">
        <CardCta
          v-for="item in cardProps"
          :title="item.title"
          :text="item.text"
          :img="item.img"
          :key="item.title"
          :button="item.button"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
h2 {
  margin-top: 204px;
  font-weight: 300;
  font-size: 40px;
  text-align: center;
  background: linear-gradient(to right, #ffffff, #b9b4d4);
  -webkit-text-fill-color: transparent;
  -webkit-backdrop-clip: text;
  background-clip: text;
}

.cta__title {
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 26px;
  margin-bottom: 72px;
  opacity: 0.54;
}

.cta__cards-wrapper {
  display: flex;
  justify-content: center;
}

.cta__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 920px;
  width: 100%;
}

@media (max-width: 500px) {
  .cta {
    padding: 0 8px;
    max-width: 94vw;
    margin: 0 auto;
  }

  .cta__cards {
    grid-template-columns: 1fr;
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
