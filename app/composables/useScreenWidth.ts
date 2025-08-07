import { ref, onMounted, onUnmounted } from "vue";

export function useScreenWidth() {
  const width = ref(0);

  const onWidthChange = () => {
    width.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", onWidthChange);
    onWidthChange(); // установить начальное значение
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onWidthChange);
  });

  return { width };
}
