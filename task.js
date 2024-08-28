const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const images = document.querySelectorAll(".gallery img");
const span = document.getElementsByClassName("close")[0];

images.forEach((image) => {
  image.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

span.onclick = function () {
  modal.style.display = "none";
};
