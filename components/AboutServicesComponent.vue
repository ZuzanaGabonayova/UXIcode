<template>
  <section class="about-services py-5">
    <div class="container">
      <!-- UX/UI Design Section -->
      <div class="row align-items-center service-card">
        <!-- Image Section -->
        <div class="col-lg-4 col-md-4 col-sm-12 text-center">
          <div class="service-icon">
            <img
              src="../assets/services/user-experience-white.png"
              alt="UX/UI Design"
              class="icon"
            />
          </div>
        </div>
        <!-- Text Section -->
        <div class="col-lg-8 col-md-8 col-sm-12">
          <div class="service-content">
            <h3 class="service-title">UX/UI Design</h3>
            <p class="service-description">
              We specialize in creating intuitive, user-friendly designs for
              websites and applications that captivate your audience and enhance
              usability. From wireframes to stunning interfaces, we combine
              creativity with functionality to ensure your digital presence
              stands out. Whether you’re launching a new product or improving an
              existing one, we focus on delivering an engaging and seamless
              experience for your customers.
            </p>
          </div>
        </div>
      </div>

      <!-- Web Development Section -->
      <div class="row align-items-center service-card mt-5">
        <!-- Text Section -->
        <div class="col-lg-8 col-md-8 col-sm-12 order-lg-1 order-2">
          <div class="service-content">
            <h3 class="service-title">Web Development</h3>
            <p class="service-description">
              We specialize in creating intuitive, user-friendly designs for
              websites and applications that captivate your audience and enhance
              usability. From wireframes to stunning interfaces, we combine
              creativity with functionality to ensure your digital presence
              stands out. Whether you’re launching a new product or improving an
              existing one, we focus on delivering an engaging and seamless
              experience for your customers.
            </p>
          </div>
        </div>
        <!-- Image Section -->
        <div class="col-lg-4 col-md-4 col-sm-12 text-center order-lg-2 order-1">
          <div class="service-icon">
            <img
              src="../assets/services/software-developer-white.png"
              alt="Web Development"
              class="icon"
            />
          </div>
        </div>
      </div>

      <!-- Branding Section -->
      <div class="row align-items-center service-card mt-5">
        <!-- Image Section -->
        <div class="col-lg-4 col-md-4 col-sm-12 text-center">
          <div class="service-icon">
            <img
              src="../assets/services/light-bulb-white.png"
              alt="Branding"
              class="icon"
            />
          </div>
        </div>
        <!-- Text Section -->
        <div class="col-lg-8 col-md-8 col-sm-12">
          <div class="service-content">
            <h3 class="service-title">Branding</h3>
            <p class="service-description">
              Starting a new business or revamping your brand identity? We’re
              here to help you build a strong, cohesive brand that resonates
              with your audience. Our services include logo creation, website
              design, and color palette selection to ensure your brand’s message
              is clear and visually impactful. We bring your vision to life with
              designs that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>

      <!-- SEO Section -->
      <div class="row align-items-center service-card mt-5">
        <!-- Text Section -->
        <div class="col-lg-8 col-md-8 col-sm-12 order-lg-1 order-2">
          <div class="service-content">
            <h3 class="service-title">Search Engine Optimization (SEO)</h3>
            <p class="service-description">
              Want your website to rank at the top of Google searches and
              attract more customers? Our SEO services are designed to improve
              your website’s visibility and performance. We optimize your
              content, structure, and keywords to drive organic traffic and
              position your business ahead of the competition. More visibility
              means more leads and growth for your business.
            </p>
          </div>
        </div>
        <!-- Image Section -->
        <div class="col-lg-4 col-md-4 col-sm-12 text-center order-lg-2 order-1">
          <div class="service-icon">
            <img
              src="../assets/services/seo-icon-design-vector-white.png"
              alt="SEO"
              class="icon"
            />
          </div>
        </div>
      </div>

      <!-- Social Media Marketing Section -->
      <div class="row align-items-center service-card mt-5">
        <!-- Image Section -->
        <div class="col-lg-4 col-md-4 col-sm-12 text-center">
          <div class="service-icon">
            <img
              src="../assets/services/social-media-white.png"
              alt="Social Media Marketing"
              class="icon"
            />
          </div>
        </div>
        <!-- Text Section -->
        <div class="col-lg-8 col-md-8 col-sm-12">
          <div class="service-content">
            <h3 class="service-title">Social Media Marketing (SOME)</h3>
            <p class="service-description">
              Struggling to keep your social media active? We take care of
              everything, from content creation to scheduling posts, ensuring
              your social media profiles remain engaging and up-to-date. Our
              strategies are designed to connect with your audience, boost your
              online presence, and drive higher reach, helping you build lasting
              relationships with customers.
            </p>
          </div>
        </div>
      </div>

      <!-- Photography and Videography Section -->
      <div class="row align-items-center service-card mt-5">
        <!-- Text Section -->
        <div class="col-lg-8 col-md-8 col-sm-12 order-lg-1 order-2">
          <div class="service-content">
            <h3 class="service-title">Photography and Videography</h3>
            <p class="service-description">
              Do you need high-quality visuals for your website, social media,
              or events? We offer professional photography and videography
              services to capture memorable moments, promote your products, or
              showcase your brand. Whether it’s a corporate event, a product
              shoot, or content creation, we deliver visuals that tell your
              story and engage your audience.
            </p>
          </div>
        </div>
        <!-- Image Section -->
        <div class="col-lg-4 col-md-4 col-sm-12 text-center order-lg-2 order-1">
          <div class="service-icon">
            <img
              src="../assets/services/photography-white.png"
              alt="Photography"
              class="icon"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutServicesComponent',
}
</script>

<style scoped>
.about-services {
  background-color: #000; /* Fallback color */
  background-image: url('../assets/spiral.png'); /* Path to the spiral image */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: #baff44;
  width: 100%;
  position: relative; /* Ensure background covers entire section */
  overflow: hidden;
}

.service-card {
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #baff44;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
}

.service-card:hover {
  transform: scale(1.03);
  box-shadow: 0px 4px 20px rgba(186, 255, 68, 0.5);
}

.service-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: #5D8022;
  border-radius: 50%;
  margin: 0 auto;
}

.icon {
  width: 60%;
  height: auto;
}

.service-content {
  text-align: left;
}

.service-title {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;
}

@media (max-width: 768px) {
  .service-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .service-icon {
    margin-bottom: 1rem;
  }

  .service-content {
    text-align: center;
  }

  .service-title {
    font-size: 1.5rem;
  }

  .service-description {
    font-size: 0.9rem;
  }
}
</style>
