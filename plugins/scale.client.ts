export default defineNuxtPlugin(() => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;
  if (isMobile) return;

  const zoomLevel = 0.9;
  const zoomFix = 1 / zoomLevel;

  const el = document.documentElement;
  el.style.zoom = String(zoomLevel);
  el.style.width = `${zoomFix * 100}vw`;
  el.style.overflowX = "hidden";

  const body = document.body;
  body.style.width = `${zoomFix * 100}vw`;
  body.style.overflowX = "hidden";
});
