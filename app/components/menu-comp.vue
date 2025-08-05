<template>
  <section class="menu">
    <h3>
      something
      <span class="bear-wrapper"
        ><img
          src="/images/menu-bear@2x.png"
          alt="Haribo Bear"
          width="89"
          height="119"
        /> </span
      >for <br />
      everyone
    </h3>
    <div class="subtitle">
      <p>Еда, какой мы себе ее <br />представляем</p>
    </div>
    <BaseButton variant="big" style="margin-top: 64px">Меню</BaseButton>
    <div class="menu__images">
      <div class="angel-wrapper">
        <img
          src="/images/menu-angel@2x.png"
          alt="Angel"
          width="369"
          height="215"
        />
      </div>
      <div class="plate-wrapper">
        <img
          src="/images/menu-plate@2x.png"
          alt="Angel"
          width="215"
          height="215"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3 {
  margin-top: 300px;
}

.bear-wrapper {
  position: relative;
  margin-left: -15px;
  top: 15px;
}

.menu__images {
  position: relative;
  height: 402px;
  width: 100%;
  margin-top: 130px;
  background-color: #777;

  .angel-wrapper {
    position: absolute;
    transform: translateY(-50%);
    right: 25%;
  }

  .plate-wrapper {
    position: absolute;
    bottom: 0;
    left: 30%;
    transform: translateY(50%);
  }
}
</style>
