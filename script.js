document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("introVideo");

  if (video) {
    // 클릭 시 사운드 재생 허용 + 영상 시작
    video.addEventListener("click", function () {
      video.muted = false;
      video.play();
    });

    // 영상 끝나면 사이트 전환 실행
    video.addEventListener("ended", function () {
      enterSite();
    });
  }
});

function enterSite() {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");

  // 디졸브 시작
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";

    // 메인 페이지도 부드럽게 나타남
    setTimeout(() => {
      main.style.opacity = "1";
      showPage("top");
    }, 50);
  }, 1000); // 1초 디졸브 후 전환
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
