<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container-fluid">
      <!-- Left Links -->
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#services">SERVICES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#projects">PROJECTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#clients">CLIENTS</a>
        </li>
      </ul>

      <!-- Logo -->
      <a class="navbar-brand mx-auto" href="/">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
      </a>

      <!-- Right Side -->
      <div class="d-flex align-items-center">
        <!-- Contact Button -->
        <a href="#contact" class="btn btn-dark contact-btn">
          <span class="arrow-icon">➜</span> CONTACT
        </a>

        <!-- Language Flags -->
        <div class="ms-3">
          <img src="../assets/flags/Slovakia.png" alt="Slovak" class="lang-flag" />
          <img src="../assets/flags/United_Kingdom.png" alt="English" class="lang-flag" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<style scoped>
/* Custom Navbar Styling */
.custom-navbar {
  background-color: #c8ff43; /* Bright green background */
  padding: 0.5rem 1rem;
  border-radius: 0 0 20px 20px; /* Rounded corners at bottom */
}

/* Navbar Links */
.nav-link {
  color: #000;
  font-size: 1rem;
  text-transform: uppercase;
  margin: 0 10px;
}

.nav-link:hover {
  color: #333;
  text-decoration: underline;
}

/* Logo Styling */
.logo {
  height: 50px; /* Adjust height of the logo */
  display: block;
}

/* Contact Button */
.contact-btn {
  background-color: #fff;
  color: #000;
  border-radius: 20px;
  padding: 5px 15px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.contact-btn .arrow-icon {
  color: #000;
  margin-right: 5px;
  font-weight: bold;
}

.contact-btn:hover {
  background-color: #333;
  color: #fff;
}

/* Language Flags */
.lang-flag {
  height: 20px;
  width: 20px;
  margin: 0 5px;
  cursor: pointer;
}

.lang-flag:hover {
  transform: scale(1.1);
}
</style>
