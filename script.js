document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const video = document.getElementById("introVideo");
  let hasPlayed = false;

  // 인트로 영상 클릭 시 소리 재생 + 자동 전환
  video.addEventListener("click", () => {
    if (!hasPlayed) {
      video.muted = false;
      video.volume = 1;
      video.play();
      hasPlayed = true;
    }
  });

  // 영상 종료 후 TOP으로 자동 전환 (디졸브)
  video.addEventListener("ended", () => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
      setTimeout(() => {
        main.style.opacity = "1";
        showPage("top");
      }, 50);
    }, 1000); // 디졸브 시간 1초
  });

  // 페이지 전환 함수
  window.showPage = function (pageId) {
    const sections = document.querySelectorAll(".page");
    sections.forEach((section) => {
      section.style.display = "none";
    });
    const target = document.getElementById(pageId);
    if (target) {
      target.style.display = "block";
      window.scrollTo(0, 0);
    }
  };
});
