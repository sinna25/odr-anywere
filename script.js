document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const video = document.getElementById("introVideo");
  let hasPlayed = false;

  video.addEventListener("click", () => {
    if (!hasPlayed) {
      video.muted = false;
      video.volume = 1;
      video.play();
      hasPlayed = true;
    }
  });

  video.addEventListener("ended", () => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
      setTimeout(() => {
        main.style.opacity = "1";
        showPage("top");
      }, 50);
    }, 1000);
  });

  window.showPage = function (pageId) {
    const sections = document.querySelectorAll(".page");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add("active");
      window.scrollTo(0, 0);
    }
  };

  window.showDetail = function (index) {
    const detailImage = document.getElementById("detail-image");
    const detailName = document.getElementById("detail-name");
    const detailPrice = document.getElementById("detail-price");

    detailImage.src = `product${index}.jpeg`;
    detailName.textContent = `Product ${index}`;
    detailPrice.textContent = `₩195,000`;
    showPage("product-detail");
  }
});
