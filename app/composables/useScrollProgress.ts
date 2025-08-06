// composables/useScrollProgress.ts
import { ref, onMounted, onUnmounted } from "vue";

export function useScrollProgress() {
  const isClient = typeof window !== "undefined";
  const scrollY = ref(0);

  const updateScroll = () => {
    scrollY.value = window.scrollY;
  };

  if (isClient) {
    onMounted(() => {
      window.addEventListener("scroll", updateScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", updateScroll);
    });
  }

  return { scrollY };
}
