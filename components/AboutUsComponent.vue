<template>
  <section class="about-us py-5">
    <div class="container">
      <!-- Who Are We Section -->
      <div class="row align-items-center mb-5">
        <div class="col-lg-6 col-md-12">
          <h1 class="section-title">Who are we?</h1>
          <p class="section-text">
            At our company, we are passionate about delivering top-notch IT and
            digital solutions tailored to meet the unique needs of businesses.
            From web development and UX/UI design to branding, SEO, and social
            media marketing, we combine creativity, innovation, and modern
            technologies to help our clients achieve their goals.
          </p>
          <p class="section-text">
            Our team of dedicated professionals focuses on providing solutions
            that are not only visually stunning but also functional,
            user-friendly, and results-driven. Whether you’re a startup looking
            to build your brand or an established company aiming to grow your
            online presence, we’re here to bring your vision to life.
          </p>
          <p class="section-text">
            Driven by a commitment to quality and customer satisfaction, we take
            pride in turning challenges into opportunities. Let us help you tell
            your story, reach new heights, and achieve success in the digital
            world.
          </p>
        </div>
        <div class="col-lg-6 col-md-12 text-center">
          <img
            src="../assets/aboutus/office.jpg"
            alt="Office Image"
            class="img-fluid rounded shadow"
          />
        </div>
      </div>

      <!-- Mission, Vision, Values Section -->
      <div class="row text-center mission-vision-values">
        <!-- Mission -->
        <div
          class="col-lg-4 col-md-6 d-flex flex-column align-items-center mb-4 mission"
        >
          <div
            class="icon-box d-flex justify-content-center align-items-center"
          >
            <img
              src="../assets/aboutus/mission-g.png"
              alt="Mission Icon"
              class="icon img-fluid"
            />
          </div>
          <h3 class="mv-title">Mission</h3>
          <p class="mv-text">
            To provide innovative IT solutions tailored to our clients’ needs,
            delivering exceptional results in web development, branding, and
            digital services. We aim to empower businesses with creative,
            functional, and modern solutions that drive growth and success.
          </p>
        </div>
        <!-- Vision -->
        <div
          class="col-lg-4 col-md-6 d-flex flex-column align-items-center mb-4 vision"
        >
          <div
            class="icon-box d-flex justify-content-center align-items-center"
          >
            <img
              src="../assets/aboutus/vision-g.png"
              alt="Vision Icon"
              class="icon img-fluid"
            />
          </div>
          <h3 class="mv-title">Vision</h3>
          <p class="mv-text">
            To become a leading provider of IT and digital services, known for
            delivering cutting-edge solutions that help businesses thrive. We
            envision building long-term partnerships by consistently exceeding
            expectations and staying ahead in innovation.
          </p>
        </div>
        <!-- Values -->
        <div
          class="col-lg-4 col-md-12 d-flex flex-column align-items-center mb-4"
        >
          <div
            class="icon-box d-flex justify-content-center align-items-center"
          >
            <img
              src="../assets/aboutus/values-g.png"
              alt="Values Icon"
              class="icon img-fluid"
            />
          </div>
          <h3 class="mv-title">Values</h3>
          <p class="mv-text">
            <strong>Customer Focus</strong> – Prioritizing clients’ needs to
            deliver meaningful and impactful results.<br />
            <strong>Innovation</strong> – Leveraging creativity and modern
            technologies to bring the best solutions.<br />
            <strong>Integrity</strong> – Building trust through transparency,
            honesty, and quality in all we do.
          </p>
        </div>
      </div>

      <!-- Our Team Section -->
      <div class="row text-center our-team mt-5">
        <div class="col-12">
          <h1 class="team-title">Our team</h1>
        </div>
        <!-- Team Member 1 -->
        <div class="col-lg-6 col-md-6 d-flex flex-column align-items-end">
          <div class="team-member zuzana">
            <a href="https://www.linkedin.com/in/zuzanagabonayova/">
                <img
                src="../assets/aboutus/zuzana.jpg"
                alt="Zuzana Gabonayová"
                class="team-photo"
                />
            </a>
            <a href="https://www.linkedin.com/in/zuzanagabonayova/">
                <h4 class="team-name">Zuzana Gabonayová</h4>
            </a>
            <p class="team-role">CEO, Web Developer</p>
          </div>
        </div>
        <!-- Team Member 2 -->
        <div class="col-lg-6 col-md-6 d-flex flex-column align-items-start">
          <div class="team-member katarina">
            <a href="https://www.linkedin.com/in/katarinahudakova/">
            <img
              src="../assets/aboutus/katarina.jpg"
              alt="Katarína Hudáková"
              class="team-photo"
            />
            </a>
            <a href="https://www.linkedin.com/in/katarinahudakova/">
                <h4 class="team-name">Katarína Hudáková</h4>
            </a>
            <p class="team-role">CEO, Team Leader</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUsComponent',
}
</script>

<style scoped>
.about-us {
  background-color: #000; /* Black background */
  color: #baff44; /* Light green text */
}

/* Section Title */
.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #5d8022;
}

/* Section Text */
.section-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #fff;
}

/* Image Styling */
.img-fluid {
  max-width: 100%;
  height: auto;
}

/* Mission, Vision, Values */
.mission-vision-values {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.mission-vision-values .icon-box {
  height: 150px; /* Ensure equal height for icons */
  display: flex;
  align-items: center;
}

.mission-vision-values .icon {
  width: 120px; /* Larger size for better visibility */
  height: auto;
}

.mission, .vision{
    border-right: 1px solid #baff44;
}

.mv-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #5d8022;
}

.mv-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;
  text-align: center;
  max-width: 90%;
}

.mission-vision-values .col-lg-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Team Section */
.team-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #5d8022;
}

.team-photo {
  width: 220px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.team-photo:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 15px #BAFF44; /* Glowing neon green shadow */
}

.team-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease;
}
.team-name:hover{
    color:#BAFF44;
}

.team-role {
  font-size: 1rem;
  font-style: italic;
  color: #fff
}

.our-team .team-member {
  margin-bottom: 3rem;
}

.zuzana{
    margin-right: 2rem;
}
.katarina{
    margin-left: 2rem;
}
.team-member a{
    text-decoration: none;
}
</style>
