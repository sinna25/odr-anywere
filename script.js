document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("introVideo");

  if (video) {
    // 영상 클릭 시 사운드 켜고 재생
    video.addEventListener("click", function () {
      video.muted = false;
      video.play();
    });

    // 영상 종료 후 페이지 전환
    video.addEventListener("ended", function () {
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
    setTimeout(() => {
      main.style.opacity = "1";
      showPage("top");
    }, 50);
  }, 1000); // 디졸브 1초 후 전환
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
