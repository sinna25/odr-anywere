document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const video = document.getElementById("introVideo");
  let hasPlayed = false;

  const cartBox = document.querySelector(".cart-box");
  const cartItemsContainer = document.getElementById("cart-items");
  let cartItems = [];

  // ✅ 인트로 영상 디졸브 전환
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

  // ✅ 페이지 전환
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

  // ✅ 상세 페이지 로딩
  window.showDetail = function (index) {
    const detailImage = document.getElementById("detail-image");
    const detailName = document.getElementById("detail-name");
    const detailPrice = document.getElementById("detail-price");

    detailImage.src = `product${index}.jpeg`;
    detailName.textContent = `Product ${index}`;
    detailPrice.textContent = `₩195,000`;
    showPage("product-detail");

    // ✅ 사이즈 선택 리셋
    const sizeOptions = document.querySelectorAll(".sizes span");
    sizeOptions.forEach(span => {
      span.classList.remove("active");
      span.addEventListener("click", () => {
        sizeOptions.forEach(s => s.classList.remove("active"));
        span.classList.add("active");
      });
    });

    // ✅ 장바구니 담기 기능
    const addToCartBtn = document.getElementById("add-to-cart");
    addToCartBtn.onclick = () => {
      const selectedSize = document.querySelector(".sizes span.active");
      if (!selectedSize) {
        alert("사이즈를 선택해주세요.");
        return;
      }

      const product = {
        id: index,
        name: `Product ${index}`,
        image: `product${index}.jpeg`,
        price: `₩195,000`,
        size: selectedSize.textContent,
      };

      cartItems.push(product);
      updateCart();
      alert("장바구니에 담겼습니다.");
    };
  };

  // ✅ 장바구니 업데이트 함수 (기존 문구 제거 포함)
  function updateCart() {
    cartItemsContainer.innerHTML = ""; // 기존 내용 초기화

    cartItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-info">
          <div class="cart-name">${item.name}</div>
          <div class="cart-size">사이즈: ${item.size}</div>
          <div class="cart-price">${item.price}</div>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });
  }

  // ✅ 로그인 기능 (Hello, ID! 팝업)
  const loginBtn = document.querySelector(".login-box button");
  loginBtn.addEventListener("click", () => {
    const id = document.getElementById("login-id").value;
    const pw = document.getElementById("login-pw").value;

    if (id && pw) {
      // ✅ 로그인 박스에 팝업 추가
      const popup = document.createElement("div");
      popup.id = "login-popup";
      popup.textContent = `Hello, ${id}!`;
      document.querySelector(".login-box").appendChild(popup);

      // ✅ 디졸브 효과
      setTimeout(() => {
        popup.style.opacity = 1;
      }, 100);
    } else {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
  });
});
