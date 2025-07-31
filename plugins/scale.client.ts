// plugins/scale.client.ts
export default defineNuxtPlugin(() => {
  // не трогаем мобильные
  if (window.matchMedia("(max-width: 500px)").matches) return;

  const zoomLevel = 0.9;
  const zoomFix = (1 / zoomLevel) * 100;

  // определяем контейнер (Nuxt 3: #__nuxt, иначе fallback на html)
  const container =
    document.getElementById("__nuxt") ||
    document.getElementById("__app") ||
    document.documentElement;

  // опознаём сафари (Desktop Safari, iOS Safari)
  const ua = navigator.userAgent;
  const isSafari = /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR/.test(ua);

  if (isSafari) {
    // Применяем масштабирование к body вместо контейнера
    const body = document.body;

    body.style.webkitTransform = `scale3d(${zoomLevel},${zoomLevel},1)`;
    body.style.transform = `scale3d(${zoomLevel},${zoomLevel},1)`;
    body.style.webkitTransformOrigin = "0 0";
    body.style.transformOrigin = "0 0";

    // Устанавливаем ширину и скрываем горизонтальный скролл
    body.style.width = `${100 / zoomLevel}%`;
    body.style.overflowX = "hidden";

    // Устанавливаем для html и контейнера полную ширину
    document.documentElement.style.width = "100vw";
    document.documentElement.style.overflowX = "hidden";

    if (container !== document.documentElement) {
      container.style.width = "100%";
      container.style.overflowX = "hidden";
    }

    // позволяем вертикальный скролл
    body.style.height = "auto";
    body.style.overflowY = "auto";
  } else {
    // в остальных браузерах – родной zoom + компенсация ширины
    if (CSS.supports("zoom:1")) {
      container.style.zoom = String(zoomLevel);
    } else {
      container.style.webkitTransform = `scale(${zoomLevel})`;
      container.style.transform = `scale(${zoomLevel})`;
      container.style.webkitTransformOrigin = "0 0";
      container.style.transformOrigin = "0 0";
    }
    container.style.width = `${zoomFix}vw`;
    container.style.overflowX = "hidden";
  }
});
