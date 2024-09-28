const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//model-1
const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

//model-2
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};