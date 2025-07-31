<template>
  <div class="cards-wrapper">
    <h2 class="cards__heading">
      Направляй свой день <br />
      вместе с Alma
    </h2>
    <div class="subtitle-global" style="letter-spacing: 0.4px">
      Приложение альма дает персонализированные советы каждый день
    </div>
    <section
      class="cards"
      :style="`gap: ${gapVal}px; transform: translateY(${translateVal}px)`"
    >
      <div class="cards__block">
        <Card :height="635" url="/images/card-1@2x.png">
          <div class="card__text">
            Личные рекомендации каждый <br />
            день подсказывают лучшее <br />
            время для действий, отдыха и <br />фокуса.
          </div>
        </Card>
        <Card :height="564" url="/images/card-2@1x.png">
          <div class="card__text-wrapper">
            <div class="card__text">
              Практики, медитации и курсы помогают<br />
              восстановить энергию, ясность и<br />
              внутренний ритм.
            </div>
          </div>
        </Card>
      </div>
      <div class="cards__block">
        <Card :height="266" url="/images/card-3@1x.png">
          <div class="card__text">
            Обученный AI-ассистент <br />отвечает на вопросы, даёт
            <br />подсказки и мягко направляет в <br />нужный момент.
          </div>
        </Card>
        <Card :height="624" url="/images/card-4@2x.png">
          <div class="card__text">
            Полная персональная карта <br />личности на основе 10 систем<br />
            самопознания
          </div>
        </Card>
        <Card :height="290" url="/images/card-5@1x.png">
          <div class="card__text-wrapper">
            <div class="card__text mobile-text">
              Эксперты всегда рядом, чтобы ты мог<br />
              получить живую поддержку тогда,<br />
              когда она действительно нужна.
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
  max-width: 477px;
  width: 100%;
}

.cards {
  display: flex;
  flex-direction: row;
  gap: 22px;
  margin-top: 54px;
}

h2 {
  margin-top: 184px;
  font-weight: 300;
  font-size: 45px;
  text-align: center;
}

@media (max-width: 1100px) {
  .cards {
    flex-direction: column;
  }
}

.cards__heading {
  margin-top: 0px;
}

.cards__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
}

.card__text {
  font-family: Manrope-Regular;
  font-size: 18px;
  font-weight: 400;
  width: 396px;
  line-height: 24px;
  letter-spacing: 0.4px;
}

@media (max-width: 500px) {
  .cards {
    flex-direction: column;
    gap: 14px;
    margin-top: 36px;
    padding: 0 7px;
  }
  .cards__block {
    gap: 14px;
    width: 100%;
  }
  .card__text {
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    word-break: break-word;
  }
  .card__text-wrapper {
    align-items: flex-start;
    width: 100%;
  }

  br {
    display: none;
  }

  .mobile-text {
    width: 243px;
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

const gapVal = 24;
const translateVal = 0;
</script>
