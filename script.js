// 인트로 → 메인 자동 전환 (영상 끝나면 실행)
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("introVideo");
  if (video) {
    video.onended = () => {
      enterSite();
    };
  }
});

// 전환 함수
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

// 페이지 전환 함수
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
