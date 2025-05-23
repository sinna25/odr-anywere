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
