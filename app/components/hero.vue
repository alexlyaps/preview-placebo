<template>
  <section class="hero">
    <h2>
      Come for <br />
      the food, stay <br />for <br />
      the vibe
    </h2>
    <div class="hero__image-wrapper">
      <img
        src="/images/hero-image.png"
        alt="Hero Image"
        width="614"
        height="614"
      />
    </div>
    <div class="hero__ball-wrapper">
      <img src="/images/hero-ball@2x.png" alt="Ball" width="90" height="90" />
    </div>
    <div class="hero__circled-text">
      <svg viewBox="0 0 200 200" width="200" height="200">
        <defs>
          <!-- путь против часовой -->
          <path id="circleBottomReverse" d="M20,110 A90,70 0 0,0 170,20" />
        </defs>
        <text class="hero__circled-text--text">
          <textPath
            href="#circleBottomReverse"
            startOffset="100%"
            text-anchor="end"
          >
            Москва. Авиаматорная
          </textPath>
        </text>
      </svg>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  margin-top: 183px;
  height: 800px;
  padding: 20px;
}

.hero__image-wrapper {
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}

.hero__ball-wrapper {
  position: absolute;
  top: 550px;
  left: 37%;
  transform: translateX(-50%);
}

.hero__circled-text {
  position: absolute;
  top: 100px; // подгони по макету
  left: 63%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
}

.hero__circled-text--text {
  font-size: 14px;
  letter-spacing: 2px;
  fill: black; // не color, а fill!
  z-index: -1;
}
</style>
