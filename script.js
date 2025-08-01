document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const slider = document.querySelector(".brightness-slider");
  const spotlight = document.querySelector(".spotlight");

  // Initial brightness
  updateBrightness(slider.value);

  slider.addEventListener("input", (e) => {
    updateBrightness(e.target.value);
  });

  function updateBrightness(value) {
    // Convert slider value (0–100) to opacity (0–1)
    const opacity = value / 100;
    spotlight.style.opacity = opacity;
  }
});
