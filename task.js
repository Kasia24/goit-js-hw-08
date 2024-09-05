const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const images = document.querySelectorAll(".gallery img");
const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  closeModal();
};
function closeModal() {
  modal.style.display = "none";
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
function openModal() {
  modal.style.display = "block";
}
<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>;
