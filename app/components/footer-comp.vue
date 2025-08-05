<template>
  <section class="footer">
    <h3>
      one
      <span class="ball-wrapper"
        ><img
          src="/images/footer-ball@2x.png"
          alt="Haribo Bear"
          width="128"
          height="128"
        /> </span
      >more <br />
      thing
    </h3>

    <div class="more-wrapper"></div>
  </section>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 470px;
  margin-top: 260px;
}

.ball-wrapper {
  position: relative;
  margin-left: -35px;
  bottom: -20px;
}

.more-wrapper {
  width: 864px;
  height: 245px;
  background-color: #777;
}
</style>
