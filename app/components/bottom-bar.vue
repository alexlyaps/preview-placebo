<template>
  <div class="botbar-wrapper">
    <div class="buttons">
      <a href="#menu"><BaseButton variant="text">Меню</BaseButton></a>
      <a href="#interier"><BaseButton variant="text">Интерьер</BaseButton></a>
    </div>
    <div class="contacts">
      <BaseButton variant="text">+7 (968) 907-73-86</BaseButton>
      <div class="whatsapp-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            fill="#3F7D48"
            transform="translate(0 3.8147e-05)"
            d="M11.5 0C17.851219 0 23 5.1487226 23 11.5C23 17.851219 17.851219 23 11.5 23C9.3269596 23 7.291667 22.39625 5.5564666 21.34676L2.0697124 22.37233C1.187766 22.631769 0.3682645 21.812281 0.62768149 20.930229L1.653194 17.443544C0.60380751 15.70831 0 13.67304 0 11.5C0 5.1487226 5.1487226 0 11.5 0ZM8.1667824 5.9616919C7.1089549 6.4150448 6.1936011 7.5760736 6.237577 8.7709923C6.2664418 9.5552349 6.5730782 11.77623 8.898941 14.102105C11.224805 16.42798 13.4458 16.73457 14.229985 16.763435C15.422765 16.807365 16.58415 15.89645 17.036905 14.83983C17.147881 14.58108 17.120165 14.269775 16.934324 14.03161C16.30493 13.225575 15.452895 12.648045 14.62041 12.07316C14.26069 11.8243 13.766075 11.90135 13.501115 12.253825L12.81031 13.30619C12.733605 13.422915 12.58123 13.46305 12.46002 13.393705C11.992545 13.126445 11.31094 12.6707 10.82058 12.18034C10.330795 11.690555 9.9027653 11.03977 9.6625299 10.602425C9.5993948 10.487425 9.6343546 10.3454 9.7395802 10.2672L10.801605 9.4785299C11.118315 9.2043695 11.173975 8.7387009 10.94087 8.3976221C10.42475 7.6425433 9.8235302 6.6828799 8.9533253 6.0481491C8.7156544 5.8747749 8.4150105 5.8553171 8.1667824 5.9616919Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScreenWidth } from "~/composables/useScreenWidth";

const { width } = useScreenWidth();
</script>

<style scoped lang="scss">
.botbar-wrapper {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  height: 56px;
  border-radius: 19px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
}

.buttons {
  display: flex;
  gap: 20px;
}

.contacts {
  display: flex;
  gap: 20px;
}

.whatsapp-icon {
  position: relative;
  top: 5px;
}

@media (min-width: 768px) {
  .botbar-wrapper {
    display: none;
  }
}
</style>
