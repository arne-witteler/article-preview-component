document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".share__button");
  const box = document.querySelector(".share__buttons");

  button.addEventListener("click", () => {
    box.classList.toggle("hidden");
  });
});
