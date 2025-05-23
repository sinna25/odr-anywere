:root {
  --white: #ffffff;
  --gray-light: #b2b2b2;
  --gray: #666666;
  --black: #121212;
}

body, html {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: var(--white);
  color: var(--black);
}

/* Intro Page */
#intro {
  background-color: var(--white);
  color: var(--black);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.5s;
}

#intro h1 {
  font-size: 3rem;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray);
}

.nav-left, .nav-right {
  display: flex;
  gap: 2rem;
}

a {
  color: var(--gray-light);
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: var(--black);
}

/* Banner */
.banner {
  height: 300px;
  background-color: var(--gray-light);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--black);
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.product-card {
  background-color: var(--gray);
  color: var(--white);
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Common Page Section */
.page {
  padding: 2rem;
}

/* Account Page */
.login-box {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.login-box input {
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid var(--gray-light);
}

.password-wrap {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.password-wrap a {
  font-size: 0.8rem;
  color: var(--gray);
}

.login-box button {
  width: 100%;
  padding: 1rem;
  background: var(--black);
  color: var(--white);
  border: none;
  margin-top: 1rem;
}

.signup {
  font-size: 0.9rem;
  color: var(--gray);
  margin-top: 1rem;
}

/* Cart Page */
.cart-box {
  text-align: center;
  padding: 4rem 2rem;
}

.cart-box button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: var(--black);
  color: var(--white);
  border: none;
}
