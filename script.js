const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const btnClose = document.querySelector(".btn--close");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
  container.classList.add("container-clicked");
  btn.classList.add("btn-clicked");
  btnClose.classList.add("btn--close-clicked");
});

btnClose.addEventListener("click", function () {
  container.classList.remove("container-clicked");
  btn.classList.remove("btn-clicked");
  btnClose.classList.remove("btn--close-clicked");
  setTimeout(() => {
    input.value = "";
  }, 500);
});
