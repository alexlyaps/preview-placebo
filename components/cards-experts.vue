<template>
  <section
    class="cards"
    :style="`gap: ${gapVal}px; transform: translateY(${translateVal}px)`"
  >
    <div class="cards__block" :style="`gap: ${gapVal}px`">
      <Card :height="317" url="/images/card-1.png">
        <div class="card__text">
          Новые клиенты приходят благодаря внутренним алгоритмам и
          <br />механикам продвижения.
        </div>
      </Card>
      <Card :height="542" url="/images/card-2.png">
        <div class="card__text-wrapper">
          <div class="card__text">
            Сообщество помогает <br />обмениваться опытом, находить <br />
            партнёров и запускать <br />
            совместные проекты.
          </div>
        </div>
      </Card>
      <Card :height="265" url="/images/card-3.png">
        <div class="card__text-wrapper">
          <div class="card__text">
            Юридическая прозрачность <br />
            обеспечивается договором-офертой, <br />
            арбитражем и защитой сделки.
          </div>
          <Icon
            name="my-icon:safety-certificate-line"
            size="36px"
            style="width: 33px"
          />
        </div>
      </Card>
    </div>
    <div class="cards__block" :style="`gap: ${gapVal}px`">
      <Card :height="635" url="/images/card-4.png">
        <div class="card__text">
          Сессии удобно вести через <br />онлайн-записи, расписание, напоминания
          и мгновенные оплаты <br />
          с эскроу и чеком.
        </div>
      </Card>
      <Card :height="518" url="/images/card-5.png">
        <div class="card__text">
          Отзывы, уровни и бейджи усиливают <br />
          доверие, повышают статус и <br />
          видимость на платформе.
        </div>
      </Card>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  margin-top: 240px;
}

@media (max-width: 1100px) {
  .cards {
    flex-direction: column;
  }
}

.cards__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.card__text {
  font-family: Manrope-Regular;
  font-size: 18px;
  font-weight: 400;
  width: 366px;
  line-height: 24px;
  letter-spacing: 0.4px;
}

@media (max-width: 500px) {
  .cards {
    flex-direction: column;
    max-width: 94vw;
    gap: 16px;
    margin-top: 40px;
    padding: 0 8px;
    margin: 0 auto;
  }
  .cards__block {
    gap: 16px;
    width: 100%;
  }
  .card__text {
    width: 100%;
    font-size: 18px;
    box-sizing: border-box;
    word-break: break-word;
  }
  .card__text-wrapper {
    align-items: flex-start;
    width: 100%;
  }
}

.card__text-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  justify-content: space-between;
}
</style>

<script setup lang="ts">
const POSITION = 1000;

// const scrollY = useScroll();
// const gapVal = computed(() => Math.max((POSITION - scrollY.value) / 10, 24));
// const translateVal = computed(() =>
//   Math.max((POSITION - scrollY.value) / 10, 0)
// );

const gapVal = 24;
const translateVal = 0;
</script>
