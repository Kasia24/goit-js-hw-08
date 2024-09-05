document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.src;
      openModal(src);
    });
  });

  function openModal(src) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const img = document.createElement("img");
    img.src = src;
    img.classList.add("modal-content");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.textContent = "×";
    closeBtn.addEventListener("click", () => {
      modal.remove();
    });

    modal.appendChild(img);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
  }
});
