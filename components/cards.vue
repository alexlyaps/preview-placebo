<template>
  <div class="cards-wrapper">
    <h2 class="cards__heading">
      Направляй свой день <br />
      вместе с Alma
    </h2>
    <div class="subtitle-global">
      Приложение альма дает персонализированные советы каждый день
    </div>
    <section
      class="cards"
      :style="`gap: ${gapVal}px; transform: translateY(${translateVal}px)`"
    >
      <div class="cards__block">
        <Card :height="635" url="/images/card-1@2x.png">
          <div class="card__text">
            Личные рекомендации каждый день подсказывают лучшее время для
            действий, отдыха и фокуса.
          </div>
        </Card>
        <Card :height="564" url="/images/card-2@1x.png">
          <div class="card__text-wrapper">
            <div class="card__text">
              Практики, медитации и курсы помогают восстановить энергию, ясность
              и внутренний ритм.
            </div>
          </div>
        </Card>
      </div>
      <div class="cards__block">
        <Card :height="266" url="/images/card-3@1x.png">
          <div class="card__text">
            Обученный AI-ассистент отвечает на вопросы, даёт подсказки и мягко
            направляет в нужный момент.
          </div>
        </Card>
        <Card :height="624" url="/images/card-4@2x.png">
          <div class="card__text">
            Полная персональная карта личности на основе 10 систем самопознания
          </div>
        </Card>
        <Card :height="290" url="/images/card-5@1x.png">
          <div class="card__text-wrapper">
            <div class="card__text">
              Эксперты всегда рядом, чтобы ты мог получить живую поддержку
              тогда, когда она действительно нужна.
            </div>
          </div>
        </Card>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.cards-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cards__heading {
  max-width: 530px;
  width: 100%;
}

.cards {
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 115px;
}

h2 {
  margin-top: 204px;
  font-weight: 300;
  font-size: 50px;
  text-align: center;
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
  font-size: 20px;
  font-weight: 400;
  width: 440px;
}

@media (max-width: 500px) {
  .cards {
    flex-direction: column;
    gap: 16px;
    margin-top: 40px;
    padding: 0 8px;
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
