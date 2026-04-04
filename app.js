 const modal = document.getElementById("applyModal");

    function openModal() {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    const images = [
      "https://szvisejudo.hu/storage/img-0323.jpeg",
      "https://szvisejudo.hu/storage/img-0733.jpeg",
      "https://szvisejudo.hu/storage/img-0735.jpeg",
      "https://szvisejudo.hu/storage/img-8409.jpeg"
    ];

    let currentImage = 0;
    const galleryImage = document.getElementById("galleryImage");

    setInterval(() => {
      currentImage = (currentImage + 1) % images.length;
      galleryImage.src = images[currentImage];
    }, 3000);