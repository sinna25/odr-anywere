// 인트로 페이지 → 메인 페이지 전환
function enterSite() {
  const intro = document.getElementById('intro');
  const main = document.getElementById('main');

  // 인트로 페이지 투명 처리 후 숨기기
  intro.style.opacity = '0';
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';

    // 메인 페이지 전환 후 TOP 페이지 기본으로 보여줌
    showPage('top');
  }, 500);
}

// 페이지 전환 함수
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');

  // 모든 페이지 숨김
  pages.forEach((page) => {
    page.style.display = 'none';
  });

  // 선택된 페이지만 보여줌
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
  }
}
