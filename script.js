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
    sections.forEach((section) => section.classList.remove("active"));
    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add("active");
      window.scrollTo(0, 0);
      if (pageId === "about") {
        const aboutEls = document.querySelectorAll("#about .about-content > *");
        aboutEls.forEach((el, i) => {
          el.style.opacity = 0;
          el.style.transition = "opacity 0.5s ease";
          setTimeout(() => (el.style.opacity = 1), i * 300);
        });
      }
    }
  };

  window.showDetail = function (index) {
    document.getElementById("detail-image").src = `product${index}.jpeg`;
    document.getElementById("detail-name").textContent = `Product ${index}`;
    document.getElementById("detail-price").textContent = `₩195,000`;
    document.querySelectorAll(".sizes span").forEach(span => span.classList.remove("selected"));
    showPage("product-detail");
  };

  document.querySelectorAll(".sizes span").forEach(span => {
    span.addEventListener("click", () => {
      document.querySelectorAll(".sizes span").forEach(s => s.classList.remove("selected"));
      span.classList.add("selected");
    });
  });

  document.getElementById("add-to-cart").addEventListener("click", () => {
    const selectedSize = document.querySelector(".sizes span.selected");
    if (!selectedSize) {
      alert("Please select a size first.");
    } else {
      alert(`Added to cart: ${document.getElementById("detail-name").textContent}, Size ${selectedSize.textContent}`);
    }
  });

  const loginBtn = document.querySelector(".login-box button");
  loginBtn.addEventListener("click", () => {
    const id = document.querySelector("input[type='text']").value;
    const pw = document.querySelector("input[type='password']").value;
    if (id && pw) {
      document.querySelector(".login-box").innerHTML = `<h2>Hello, ${id}!</h2>`;
    } else {
      alert("Please enter both ID and password");
    }
  });
});
