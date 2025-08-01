// src/composables/useFadeOnScroll.ts
import { onMounted, onBeforeUnmount, ref } from "vue";

export function useFadeOnScroll(
  selector = ".fade-item",
  options = { threshold: 0.1 }
) {
  // Храним ссылку на observer, чтобы отписаться позже
  const observer = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    // Проверяем, что мы в браузере и API доступен
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    }, options);

    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      observer.value!.observe(el);
    });
  });

  onBeforeUnmount(() => {
    if (!observer.value) return;
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      observer.value!.unobserve(el);
    });
    observer.value.disconnect();
  });
}
