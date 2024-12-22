<template>
  <section class="services-section py-5">
    <div class="container">
      <div class="row gy-4">
        <!-- Service 1: UX/UI Design -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="service-card">
            <img
              src="../assets/services/user-experience-white.png"
              alt="UX/UI Design"
              class="service-icon"
            />
            <h4 class="service-title">UX/UI Design</h4>
          </div>
        </div>

        <!-- Service 2: Web Development -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="service-card">
            <img
              src="../assets/services/software-developer-white.png"
              alt="Web Development"
              class="service-icon"
            />
            <h4 class="service-title">Web Development</h4>
          </div>
        </div>

        <!-- Service 3: Branding -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="service-card">
            <img
              src="../assets/services/light-bulb-white.png"
              alt="Branding"
              class="service-icon"
            />
            <h4 class="service-title">Branding</h4>
          </div>
        </div>

        <!-- Service 4: SEO -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="service-card">
            <img
              src="../assets/services/seo-icon-design-vector-white.png"
              alt="SEO"
              class="service-icon"
            />
            <h4 class="service-title">SEO - Search Engine Optimization</h4>
          </div>
        </div>

        <!-- Service 5: Social Media -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="service-card">
            <img
              src="../assets/services/social-media-white.png"
              alt="Social Media"
              class="service-icon"
            />
            <h4 class="service-title">SOME - Social Media Marketing</h4>
          </div>
        </div>

        <!-- Service 6: Photography -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="service-card">
            <img
              src="../assets/services/photography-white.png"
              alt="Photography"
              class="service-icon"
            />
            <h4 class="service-title">Photography and Videography</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesComponent",
};
</script>

<style scoped>
/* Services Section */
.services-section {
  background-color: #000; /* Black background */
  color: #000;
  padding: 40px 0;
}

/* Service Card */
.service-card {
  background-color: #1e1e1e; /* Dark gray background */
  border: 1px solid #1e1e1e; /* Default border color */
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Hover Effect */
.service-card:hover {
  transform: translateY(-10px);
  border: 1px solid #BAFF44; /* Neon green border on hover */
  box-shadow: 0 0 15px #BAFF44; /* Glowing neon green shadow */
}

/* Background Highlight Animation */
.service-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(93, 128, 34, 0.6) 0%, transparent 50%);
  transition: all 0.3s ease;
  z-index: 0;
}

.service-card:hover::before {
  opacity: 1;
  transform: rotate(45deg) scale(1.5);
}

/* Service Icon */
.service-icon {
  width: 60px;
  height: auto;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

/* Service Title */
.service-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
  position: relative;
  z-index: 1;
}
</style>
