function enterSite() {
  const intro = document.getElementById('intro');
  const main = document.getElementById('main');

  intro.style.opacity = '0';
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
    main.style.opacity = '1';
  }, 500);
}
function enterSite() {
  const intro = document.getElementById('intro');
  const main = document.getElementById('main');

  intro.style.opacity = '0';
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
    main.style.opacity = '1';
  }, 500);
}

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => (page.style.display = 'none'));

  const target = document.getElementById(pageId);
  if (target) {
    target.style.display = 'block';
  }
}
