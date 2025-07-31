<template>
  <div class="topbar-wrapper">
    <div class="left">
      <div class="left__logos">
        <img :src="logoStar" alt="Alma Logo" width="40" height="33" class="" />
        <img :src="logoLogo" alt="Alma Logo" width="70" height="20" class="" />
      </div>
      <div class="left__buttons">
        <BaseButton variant="text">О сервисе</BaseButton>
        <BaseButton variant="text">Экспертам</BaseButton>
      </div>
    </div>
    <div class="right">
      <SocialIcons style="gap: 16px" />
      <div class="right__app">
        <BaseButton variant="rounded">
          <svg
            width="18"
            height="21"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2429 2.20052C12.0513 1.18509 13.4386 0.405307 14.6255 0.321045C14.8245 1.70923 14.2749 3.06885 13.5485 4.03001C12.7721 5.06257 11.4321 5.86092 10.1353 5.8195C9.89872 4.48988 10.5054 3.12169 11.2429 2.20052ZM15.6531 5.82104C17.33 5.82104 19.1056 6.75723 20.3691 8.37041C16.227 10.6967 16.898 16.7568 21.0833 18.3794C20.5079 19.6863 20.2318 20.269 19.4897 21.4267C18.4546 23.0414 16.9968 25.0536 15.1872 25.0677C14.4433 25.0757 13.9553 24.8465 13.4291 24.5993C12.8193 24.3129 12.1582 24.0023 10.988 24.009C9.82425 24.0149 9.15253 24.3216 8.53433 24.6039C7.99457 24.8504 7.49561 25.0782 6.74559 25.0709C4.93756 25.0552 3.55532 23.2394 2.52017 21.6246C-0.372366 17.1118 -0.677818 11.8135 1.10707 8.99558C2.3767 6.99441 4.37911 5.82419 6.25965 5.82419C7.26191 5.82419 8.06969 6.11908 8.83946 6.40011C9.54007 6.65588 10.2092 6.90017 10.9648 6.90017C11.6641 6.90017 12.2389 6.67715 12.866 6.43389C13.6183 6.14204 14.4457 5.82104 15.6531 5.82104Z"
              fill="white"
            />
          </svg>
          App Store</BaseButton
        >

        <BaseButton variant="rounded">
          <svg
            width="18"
            height="20"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.5344 0.461197C2.43365 -0.0356837 3.49626 -0.0472728 4.40129 0.453954L15.6144 6.65555L12.0738 10.2033L1.5344 0.461197ZM0.512207 2.83863C0.512207 2.32001 0.659994 1.83078 0.917897 1.40325L11.5122 11.3128L0.890368 22.0833C0.646954 21.6645 0.512207 21.1856 0.512207 20.6831V2.83863ZM20.292 9.3892L16.8463 7.56325L12.9744 11.2803L17.7196 15.4833L20.2935 14.1191C21.2198 13.6261 21.7744 12.7422 21.7744 11.7534C21.7729 10.7647 21.2198 9.88075 20.292 9.3892ZM1.83221 23.0024L12.4543 12.4033L16.7922 16.3958L4.74531 23.0298C4.29303 23.2793 3.79884 23.4033 3.30754 23.4033C2.79891 23.4033 2.29316 23.2648 1.83221 23.0024Z"
              fill="white"
            />
          </svg>
          Google Play</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoLogo from "~/assets/images/alma-logo.png";
import logoStar from "~/assets/images/alma-star.png";
</script>

<style lang="scss">
.topbar-wrapper {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 777px;
  height: 58px;
  border-radius: 29px;
  background-color: rgba(#414141, 0.31);
  backdrop-filter: blur(50px);
  padding: 0 9px 0 20px;
  align-items: center;
  z-index: 100;
}

.left__logos {
  display: flex;
  align-items: center;
  gap: 10px;
}

.right,
.left {
  display: flex;
  align-items: center;
  gap: 22px;
}

.left {
  gap: 26px;
}

.left__buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.right__app {
  display: flex;
  gap: 5px;
}
@media (max-width: 500px) {
  .topbar-wrapper {
    display: none;
  }
}
</style>
