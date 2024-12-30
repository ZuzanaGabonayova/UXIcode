<template>
  <footer class="footer-section">
    <!-- Top Separator Line -->
    <div class="footer-line"></div>

    <!-- Footer Content -->
    <div class="container">
      <div class="row align-items-center text-white py-5">
        <!-- Left Column: Contact Information -->
        <div class="col-md-4 text-center text-md-start mb-4 mb-md-0 contactinfo">
          <div class="contact-infos">
            <!-- Email -->
            <div class="d-flex align-items-center mb-2 contact-info">
                <i class="fa-regular fa-envelope"></i>
              <a href="mailto:uxicode.studio@gmail.com" class="contact-link">
                <em>uxicode.studio@gmail.com</em>
              </a>
            </div>
            <!-- Phone -->
            <div class="d-flex align-items-center contact-info">
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+421950797735" class="contact-phone" >
                  <span>+421 950 797 735</span>
                </a>
              
            </div>
          </div>
        </div>

        <!-- Center Column: Social Media -->
        <div class="col-md-4 text-center mb-4 mb-md-0 some">
          <div class="social-icons d-flex justify-content-center">
            <a href="#" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/uxicode.studio/" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <p class="copyright mt-3">&copy; 2024 UxiCode Studio</p>
        </div>

        <!-- Right Column: Policy Links and Logo -->
        <div class="col-md-4 text-center text-md-end right-side policies">
          <ul class="policy-links list-unstyled mb-2">
            <li>
              <a href="#" class="policy-link">Privacy policy</a>
            </li>
            <li>
              <a href="#" class="policy-link">Cookie Policy</a>
            </li>
            <li>
              <a href="#" class="policy-link">Terms</a>
            </li>
          </ul>
          <!-- Logo -->
          <div class="footer-logo">
            <img
              src="../assets/logo_white.png"
              alt="UxiCode Logo"
              class="logo"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
/* Footer Section */
.footer-section {
  background-color: #000; /* Black background */
  color: #fff; /* White text */
}

/* Top Separator Line */
.footer-line {
  width: 95%;
  height: 1px;
  background-color: #baff44;
  margin: 0 auto;
}

/* Icons */
.icon {
  width: 20px;
  height: 20px;
}

/* Contact Information Links */
.contact-info{
    gap: 10px;
}
.contact-link {
  color: #baff44;
  text-decoration: none;
  font-style: italic;
}
.contact-phone{
  text-decoration: none;
  color: #fff;
}
.contact-link:hover {
  text-decoration: underline;
}

/* Social Media Icons */
.social-link{
    text-decoration: none;
}

.social-icons a {
  display: inline-block;
  margin: 0 10px;
  width: 40px;
  height: 40px;
  background-color: #baff44; /* Green background */
  color: #000; /* Black icons */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover {
  background-color: #fff;
  transform: scale(1.1);
  color: #000;
}

/* Policy Links */
.right-side{
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
}

.policy-links {
  margin: 0px!important;
  padding: 0px!important;
  text-align: right;
}

.policy-links li {
  margin: 0;
  padding: 0;
}

.policy-link {
  color: #baff44;
  text-decoration: none;
  font-size: 0.9rem;
  display: block;
}

.policy-link:hover {
  text-decoration: underline;
}

/* Logo */
.footer-logo .logo {
  height: 60px;
  margin-top: 10px;
  display: block;
  margin-left: auto;
}

/* Copyright */
.copyright {
  font-size: 0.9rem;
  color: #fff;
  margin: 0;
}

@media (max-width: 768px) {

  .contactinfo{
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
  }

  .some{
    order: 3;
    margin-bottom: 0px!important;
    margin-top: 15px;
  }

  .policies{
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .policy-links{
    order: 2;
  }

  .footer-logo{
    order: 1;
    margin: 0;
  }

  .footer-logo img.logo{
    margin: 0px!important;
    padding: 0px!important;
  }

  .contact-infos{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .policy-links{
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  

}
</style>
