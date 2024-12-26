<template>
  <section class="project-layout">
    <!-- Gradient Background -->
    <div class="gradient-bg">
      <div class="container py-5">
        <div class="row align-items-center">
          <!-- Text Section -->
          <div class="col-md-6 col-sm-12 text-md-start nameofproject">
            <h1 class="title">{{ projectData.title }}</h1>
            <p class="hashtags">{{ projectData.hashtags }}</p>
          </div>
          <!-- Logo Section -->
          <div
            class="col-md-6 col-sm-12 d-flex justify-content-end projectlogo"
          >
            <img
              :src="projectData.logo"
              :alt="`${projectData.title} Logo`"
              class="img-fluid logo"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section py-2">
      <div class="container project-content">
        <!-- Dynamic Content -->
        <div
          v-for="(section, index) in projectData.content"
          :key="index"
          class="row justify-content-center text-center mt-5"
        >
          <div class="col-lg-10 col-md-12 col-sm-12 project-specific-content">
            <h2 class="content-title">{{ section.title }}</h2>
            <p
              v-for="(paragraph, pIndex) in section.text"
              :key="pIndex"
              class="content-text"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- Technology Used Section -->
        <div
          v-if="projectData.technologies && projectData.technologies.length"
          class="row justify-content-center text-center mt-5"
        >
          <div class="col-lg-10 col-md-12 col-sm-12 project-specific-content">
            <h2 class="content-title">Technology used</h2>
            <div class="row justify-content-center mt-4">
              <div
                v-for="(tech, index) in projectData.technologies"
                :key="index"
                class="col-4 col-md-2 mb-4 technology"
              >
                <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
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
  name: 'ProjectLayout',
  props: {
    projectData: {
      type: Object,
      required: true,
    },
  },
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
    #313d62
  );
  background-size: 400% 400%;
  animation: gradient-animation 15s infinite linear;
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
  -webkit-text-stroke: 2px #000;
  text-stroke: 2px #000;
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
    text-align: center;
  }

  .gradient-bg .hashtags {
    margin-top: 0.5rem;
    text-align: center;
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
