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

        // ✅ 상품 디졸브 애니메이션 실행
        const productCards = document.querySelectorAll(".product-card");
        productCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("fade-in-product");
          }, index * 100); // 순차적으로 0.1초 간격
        });
      }, 100);
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

  // ✅ 장바구니 업데이트 함수
  function updateCart() {
    cartItemsContainer.innerHTML = "";

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

    const emptyMsg = document.getElementById("cart-empty");
    if (emptyMsg) emptyMsg.style.display = cartItems.length ? "none" : "block";
  }

  // ✅ 로그인 기능 구현
  const loginBtn = document.querySelector(".login-box button");
  loginBtn.addEventListener("click", () => {
    const id = document.getElementById("login-id").value;
    const pw = document.getElementById("login-pw").value;

    if (id && pw) {
      const loginBox = document.querySelector(".login-box");
      const loginPopup = document.getElementById("login-popup");
      const loginUser = document.getElementById("login-user");
      const navRight = document.querySelector(".nav-right");

      // ✅ 입력창 숨기기
      loginBox.querySelectorAll("input, .password-wrap, button, .signup").forEach(el => el.style.display = "none");

      // ✅ 팝업 표시
      loginUser.textContent = id;
      loginPopup.style.display = "block";
      setTimeout(() => {
        loginPopup.style.opacity = 1;
      }, 100);

      // ✅ 2초 후 팝업 사라지고 로그아웃 버튼 생성
      setTimeout(() => {
        loginPopup.style.opacity = 0;
        setTimeout(() => {
          loginPopup.style.display = "none";

          const logoutBtn = document.createElement("button");
          logoutBtn.id = "logout-button";
          logoutBtn.textContent = "LOGOUT";
          loginBox.appendChild(logoutBtn);

          logoutBtn.addEventListener("click", () => {
            logoutBtn.remove();
            loginBox.querySelectorAll("input, .password-wrap, button, .signup").forEach(el => el.style.display = "");
            loginPopup.style.display = "none";
          });
        }, 300);
      }, 2000);

      // ✅ MYSHOPPING 메뉴 추가
      if (!document.getElementById("myshopping-link")) {
        const myshop = document.createElement("a");
        myshop.href = "#";
        myshop.id = "myshopping-link";
        myshop.textContent = "MYSHOPPING";
        myshop.onclick = () => {
          showMyShopping();
        };
        navRight.appendChild(myshop);
      }
    } else {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
  });

  // ✅ MYSHOPPING 페이지 생성 및 이동
  function showMyShopping() {
    let shoppingSection = document.getElementById("myshopping");
    if (!shoppingSection) {
      shoppingSection = document.createElement("section");
      shoppingSection.id = "myshopping";
      shoppingSection.className = "page";
      shoppingSection.innerHTML = `
        <div class="myshopping-box">
          <h2>MY SHOPPING</h2>
          <table class="shopping-status">
            <tr>
              <th>Before deposit</th>
              <th>Preparing for delivery</th>
              <th>Shipping</th>
              <th>Delivery completed</th>
              <th>Cancel</th>
              <th>Exchange</th>
              <th>Return</th>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </table>
          <div class="reward-info">
            <p>Available Reward Points: $0</p>
            <p>Use Reward Points: $0</p>
            <p>Total Reward Points: $0</p>
            <p>Total Order: $0(0)</p>
          </div>
        </div>
      `;
      document.getElementById("main").appendChild(shoppingSection);
    }
    showPage("myshopping");
  }
});
