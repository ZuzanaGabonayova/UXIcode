<template>
  <div class="navigation">
    <div class="desktop">
      <nav class="navbar navbar-expand-lg custom-navbar">
        <!-- SVG Shape Background -->
        <div class="svg-container">
          <svg
            width="296"
            height="39"
            viewBox="0 0 296 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66.8004 26.3262L49.9087 12.1738C40.9079 4.63271 29.5402 0.5 17.7979 0.5H289.601C276.518 0.5 263.957 5.6275 254.611 14.7825L245.49 23.7175C236.145 32.8725 223.583 38 210.501 38H98.9112C87.1689 38 75.8012 33.8673 66.8004 26.3262Z"
              fill="#BAFF44"
            />
            <path
              d="M0.5 0.5H17.7979C29.5402 0.5 40.9079 4.63271 49.9087 12.1738L66.8004 26.3262C75.8012 33.8673 87.1689 38 98.9112 38H210.501C223.583 38 236.145 32.8725 245.49 23.7175L254.611 14.7825C263.957 5.6275 276.518 0.5 289.601 0.5H296H0.5Z"
              stroke="#BAFF44"
            />
          </svg>
        </div>

        <!-- Navbar Content -->
        <div class="container-fluid">
          <!-- Left Links -->
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link fw-bold" href="/services">SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="/projects">PROJECTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="/about">ABOUT US</a>
            </li>
          </ul>

          <!-- Center Logo -->
          <div class="logo-container">
            <a href="/">
              <img src="../assets/logo.png" alt="Logo" class="logo" />
            </a>
          </div>

          <!-- Right Side -->
          <div class="d-flex align-items-center">
            <a href="#contact" class="btn btn-dark contact-btn">
                <div class="arrow-circle">
                    <span class="arrow-icon">➜</span>
                </div>
                <span class="btn-text">CONTACT</span>
            </a>
            <div class="ms-3">
              <img
                src="../assets/flags/Slovakia.png"
                alt="Slovak"
                class="lang-flag"
              />
              <img
                src="../assets/flags/United_Kingdom.png"
                alt="English"
                class="lang-flag"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="mobile">
      <nav class="navbar custom-navbar">
        <!-- Logo -->
        <div class="logo-container">
          <a href="/">
            <img src="../assets/logo.png" alt="Logo" class="logo" />
          </a>
        </div>

        <!-- Hamburger Menu -->
        <div class="hamburger-menu" @click="toggleMenu">
          <div :class="{ 'hamburger-line': true, active: isMenuOpen }"></div>
          <div :class="{ 'hamburger-line': true, active: isMenuOpen }"></div>
          <div :class="{ 'hamburger-line': true, active: isMenuOpen }"></div>
        </div>

        <!-- Fullscreen Menu -->
        <div v-if="isMenuOpen || isClosing" class="fullscreen-menu" :class="{ 'closing': isClosing }">

          <div class="logo-container-fullscreen">
            <a href="/">
              <img src="../assets/logo.png" alt="Logo" class="logo-fullscreenmenu" />
            </a>
          </div>

          <ul class="menu-links">
            <li @click="closeMenu"><a href="/services">SERVICES</a></li>
            <li @click="closeMenu"><a href="/projects">PROJECTS</a></li>
            <li @click="closeMenu"><a href="/about">ABOUT US</a></li>
            <li @click="closeMenu">
              <a href="#contact" class="btn btn-dark contact-btn">
                  <div class="arrow-circle">
                      <span class="arrow-icon">➜</span>
                  </div>
                  <span class="btn-text">CONTACT</span>
              </a>
            </li>
          </ul>
          <div class="footer d-flex justify-content-center align-items-center gap-4 flex-column">
            <div class="mobile-flags d-flex align-items-center justify-content-center gap-4">
              <img
                src="../assets/flags/Slovakia.png"
                alt="Slovak"
                class="lang-flag"
              />
              <img
                src="../assets/flags/United_Kingdom.png"
                alt="English"
                class="lang-flag"
              />
            </div>

            <div class="mobile-contact d-flex flex-column gap-3">
              <!-- Email -->
              <div class="d-flex align-items-center justify-content-center gap-2">
                  <i class="fa-regular fa-envelope"></i>
                  <a href="mailto:uxicode.studio@gmail.com" class="contact-link">
                    <em>uxicode.studio@gmail.com</em>
                  </a>
              </div>
              <!-- Phone -->
              <div class="d-flex align-items-center justify-content-center gap-2">
                  <i class="fa-solid fa-phone"></i>
                  <a href="tel:+421 950 797 735">
                    <span>+421 950 797 735</span>
                  </a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isMenuOpen: false,
      isClosing: false, // New state for smooth close animation
    };
  },
  methods: {
    toggleMenu() {
      if (this.isMenuOpen) {
        this.closeMenu(); // Trigger close animation if menu is open
      } else {
        this.isMenuOpen = true;
      }
    },
    closeMenu() {
      this.isClosing = true;
      setTimeout(() => {
        this.isMenuOpen = false;
        this.isClosing = false; // Reset closing state after animation ends
      }, 500); // Duration matches the CSS animation duration
    },
  },
};

</script>

<style scoped>
/* Navbar Styling */
.desktop .custom-navbar {
  background-color: #BAFF44; /* Bright green background */
  position: fixed; /* Fix the navbar at the top of the viewport */
  top: 0; /* Align to the top of the page */
  left: 0; /* Align to the left edge */
  width: 100%; /* Make it span the full width of the viewport */
  padding: 0.5rem 1rem;
  z-index: 10; /* Ensure it stays above other content */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle shadow */
}

/* SVG Shape Container */
.desktop .svg-container {
  position: absolute;
  bottom: -38px; /* Place the shape below navbar */
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  width: 296px; /* Match SVG dimensions */
  height: 39px;
  color: #BAFF44!important;
}

/* Logo Container */
.desktop .logo-container {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -60%);
  z-index: 10;
}

.desktop .logo {
  height: 70px;
}

/* Navbar Links */
.desktop .nav-link {
  color: #000;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 10px;
}

.desktop .nav-link:hover {
  color: #333;
}

/* Contact Button with Inner Shadow */
.contact-btn {
  background-color: #EFEFEF; /* Light gray background */
  border: 0px;
  gap: 10px;
  color: #000;
  border-radius: 20px;
  padding: 5px 15px;
  font-weight: bold;
  font-size: 1rem;
  position: relative; /* For shadow layering */
  box-shadow: inset 0 6px 8px 3px rgba(0, 0, 0, 0.1); /* Inner shadow */
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.contact-btn .arrow-circle {
  background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin-right: 0px;
  transition: transform 0.5s ease;
}


.contact-btn .arrow-icon {
  color: #c8ff43;
  font-weight: bold;
  transition: transform 0.5s ease;
}

.contact-btn .btn-text {
  color: #000;
  font-weight: bold;
  transition: color 0.5s ease;
}

/* Hover Effects */
.contact-btn:hover {
  background-color: #000;
}

.contact-btn:hover .arrow-circle {
  transform: translateX(7px);
}

.contact-btn:hover .arrow-icon {
  color: #baff44;
}

.contact-btn:hover .btn-text {
  color: #baff44;
}

/* Language Flags */
.desktop .lang-flag {
  height: 30px;
  width: 30px;
  margin: 0 5px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.desktop .lang-flag:hover {
  transform: scale(1.1);
}

.mobile{
  display: none!important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .desktop{
    display: none!important;;
  }
  .mobile{
    display: block!important;;
  }

  .mobile .custom-navbar {
  background-color: #baff44;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.mobile .logo-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.mobile .logo {
  height: 50px;
}

/* Hamburger Menu */
.mobile .hamburger-menu {
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 11;
}

.mobile .hamburger-line {
  background-color: #000;
  height: 4px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}

.mobile .hamburger-line.active:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.mobile .hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.mobile .hamburger-line.active:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Fullscreen Menu */
.mobile .fullscreen-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #baff44;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  animation: slideIn 0.5s ease forwards;
}

.mobile .fullscreen-menu.closing {
  animation: slideOut 0.5s ease forwards; /* Smooth close animation */
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
/* Close Animation */
@keyframes slideOut {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

.mobile .menu-links {
  list-style: none;
  text-align: center;
  padding: 0;
}

.mobile .menu-links li {
  margin: 30px 0;
}

.mobile .menu-links a {
  font-size: 1.2rem;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
}

/* .mobile .contact-link {
  background-color: #000;
  color: #baff44;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.mobile .contact-link:hover {
  background-color: #baff44;
  color: #000;
} */

/* Footer in Menu */
.mobile .footer {
  text-align: center;
  color: #000;
}

.mobile .lang-flag {
  height: 30px;
  width: 30px;
  margin: 0 5px;
}
 .mobile-contact i{
  color: #5D8022;
 }
 .mobile-contact a{
  text-decoration: none;
  color: #000;
 }
}
</style>
