document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("introVideo");
  if (video) {
    video.addEventListener("click", function () {
      video.muted = false;
      video.play();
      enterSite();
    });
  }
});

function enterSite() {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");

  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";
    showPage("top");
  }, 500);
}

function showPage(pageId) {
  const sections = document.querySelectorAll(".page");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  const target = document.getElementById(pageId);
  if (target) {
    target.style.display = "block";
  }
}
