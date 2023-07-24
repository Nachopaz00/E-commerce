document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel-slide img");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove("active", "next");
      if (i === index) {
        img.classList.add("active");
      } else if (i === (index + 1) % images.length) {
        img.classList.add("next");
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  showImage(currentIndex); // Mostrar la primera imagen al cargar la página
  setInterval(nextImage, 3000); // Cambiar la imagen cada 3 segundos (3000 ms)
});
