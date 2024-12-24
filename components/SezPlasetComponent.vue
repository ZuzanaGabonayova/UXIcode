<template>
  <section class="sez-plaset-component">
    <!-- Gradient Background -->
    <div class="gradient-bg">
      <div class="container py-5">
        <div class="row align-items-center">
          <!-- Text Section -->
          <div class="col-md-6 col-sm-12 text-md-start nameofproject">
            <h1 class="title">SEZ Plaset</h1>
            <p class="hashtags">#webdesign #sezplaset #uxui #branding</p>
          </div>
          <!-- Logo Section -->
          <div
            class="col-md-6 col-sm-12 d-flex justify-content-end projectlogo"
          >
            <img
              src="../assets/clients/sez_plaset.png"
              alt="SEZ Plaset Logo"
              class="img-fluid logo"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section py-5">
      <div class="container project-content">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10 col-md-12 col-sm-12 project-specific-content">
            <h2 class="content-title">What was our assignment?</h2>
            <p class="content-text">
              The main task was designing and development of modern, responsive
              website and its content, ensuring the design follows the brand
              identity. Website needs to be accessible in different languages as
              the company has customers from around the world.
            </p>
          </div>
        </div>
        <div class="row justify-content-center text-center mt-5">
          <div class="col-lg-10 col-md-12 col-sm-12 project-specific-content">
            <h2 class="content-title">Implementation process</h2>
            <p class="content-text">
              As the company didn’t have content for the website, we began by
              visiting their production halls to capture professional photos and
              videos that showcase their work environment and operations. We
              also created minimalist product shots to highlight key offerings
              in a clean and modern style.
            </p>
            <p class="content-text">
              Once we had all the necessary content, we conducted thorough
              competitor research to analyze what similar companies offer on
              their websites and identify opportunities for improvement. With
              this insight, we proceeded to design the website, ensuring it
              aligned with the brand’s identity and goals.
            </p>
            <p class="content-text">
              Finally, we developed the website to its final state with dynamic
              content, a fully responsive design, and a multi-language option to
              cater to the company’s global customer base. The result is a
              modern, user-friendly platform that reflects the company’s values
              and vision.
            </p>
          </div>
        </div>

        <!-- Technology Used Section -->
        <div class="row justify-content-center text-center mt-5">
          <div class="col-lg-10 col-md-12 col-sm-12 project-specific-content">
            <h2 class="content-title">Technology used</h2>
            <div class="row justify-content-center mt-4">
              <!-- Technology Icons -->
              <div class="col-4 col-md-2 mb-4 technology">
                <img
                  src="../assets/tech/premiere-pro.svg"
                  alt="Adobe Premiere"
                  class="tech-icon"
                />
              </div>
              <div class="col-4 col-md-2 mb-4 technology">
                <img
                  src="../assets/tech/photoshop.svg"
                  alt="Adobe Illustrator"
                  class="tech-icon"
                />
              </div>
              <div class="col-4 col-md-2 mb-4 technology">
                <img
                  src="../assets/tech/illustrator.svg"
                  alt="Adobe Photoshop"
                  class="tech-icon"
                />
              </div>
              <div class="col-4 col-md-2 mb-4 technology">
                <img
                  src="../assets/tech/figma.svg"
                  alt="Figma"
                  class="tech-icon"
                />
              </div>
              <div class="col-4 col-md-2 mb-4 technology">
                <img
                  src="../assets/tech/javascript.svg"
                  alt="JavaScript"
                  class="tech-icon"
                />
              </div>
              <div class="col-4 col-md-2 mb-4 technology">
                <img
                  src="../assets/tech/nuxt2.svg"
                  alt="Vue.js"
                  class="tech-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SezPlasetComponent',
}
</script>

<style scoped>
/* Gradient Animation */
.gradient-bg {
  background: linear-gradient(
    45deg,
    #a59132,
    #897517,
    #56638a,
    #313d62,
    #90323d,
    #6f222b
  );
  background-size: 400% 400%;
  animation: gradient-animation 30s infinite linear;
  color: #fff;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Title and Hashtags */
.gradient-bg .title {
  font-size: 5rem;
  font-weight: bold;
  color: #baff44;
  margin-bottom: 1.5rem;
  font-family: 'Merriweather', serif;
}

.gradient-bg .hashtags {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #fff;
  text-transform: lowercase;
}

/* Logo */
.logo {
  max-width: 100%;
  height: auto;
  max-height: 180px;
}

/* Content Section */
.content-section {
  background-color: #000;
  color: #baff44;
}

.content-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #5d8022;
  margin-bottom: 1.5rem;
}

.content-text {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #fff;
}

/* Technology Used Section */
.technology {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px; /* Fixed height for all items */
  text-align: center;
}

.tech-icon {
  max-height: 80px; /* Ensures all icons are scaled to fit */
  width: auto; /* Maintains aspect ratio */
  margin: 0 auto;
}

@media (max-width: 678px) {
  .nameofproject,
  .projectlogo {
    justify-content: center !important;
    align-items: center !important;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .gradient-bg .title {
    margin-bottom: 0rem;
  }

  .gradient-bg .hashtags {
    margin-top: 0.5rem;
  }

  .project-content{
    width: 90%;
  }

  .project-specific-content{
    padding: 0px!important;
  }

  .project-specific-content p{
    text-align: left!important;
  }
}
</style>
