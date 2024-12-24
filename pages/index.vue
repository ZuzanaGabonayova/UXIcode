<template>
  <div>
    <div>
      <!-- First View Section -->
      <section class="first-view d-flex align-items-center">
        <div class="first-view-bg-img"></div>
        <div class="container text-center uvod">
          <div class="row justify-content-center">
            <!-- Text Content -->
            <div class="col-12 col-md-8 all_content">
              <p class="description">
                The combined freelance practices of Mat Lowe and Alex Hillel.
                <br />Working with clients across arts, culture and technology.
              </p>
              <a href="/projects" class="btn btn-green"> See our work </a>
              <h1 class="main-heading">UxiCode</h1>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="row services pt-5">
      <div
        class="col-12 col-md-12 d-flex justify-content-center align-items-center v-100"
      >
        <h1>Services</h1>
      </div>
    </div>
    <ServicesComponent />
    <div class="row services">
      <div
        class="col-12 col-md-12 d-flex align-items-center justify-content-center"
      >
        <p>
          We work across design, digital and motion to tell our clients'
          stories.
        </p>
      </div>
    </div>

    <div class="row projects">
      <div
        class="col-12 col-md-12 d-flex justify-content-center align-items-center v-100"
      >
        <h1>Projects</h1>
      </div>
    </div>
    <div class="row projects">
      <div
        class="col-12 col-md-12 d-flex align-items-center justify-content-center"
      >
        <p>
          The Best Projects<br />
          Kind customers - The best Outcome
        </p>
      </div>
    </div>
    <LatestProjectsComponent />
    <div class="row projects">
      <div
        class="col-12 col-md-12 d-flex align-items-center justify-content-center"
      >
        <!-- CTA Button -->
        <a href="/projects" class="btn see-more-btn">
          See more projects
          <div class="arrow-circle">
            <span class="arrow-icon">➜</span>
          </div>
        </a>
      </div>
    </div>

    <div class="row clients">
      <div
        class="col-12 col-md-12 d-flex justify-content-center align-items-center v-100"
      >
        <h1>Clients</h1>
      </div>
    </div>

    <ClientsComponent />

    <ClientsLogoComponent />
  </div>
</template>

<script>
import ServicesComponent from '../components/ServicesComponent.vue'
import LatestProjectsComponent from '../components/LatestProjectsComponent.vue'
import ClientsComponent from '../components/ClientsComponent.vue'
import ClientsLogoComponent from '../components/ClientsLogoComponent.vue'

export default {
  name: 'IndexPage',
  components: {
    ServicesComponent,
    LatestProjectsComponent,
    ClientsComponent,
    ClientsLogoComponent,
  },
}
</script>

<style scoped>
/* Import Merriweather Font for "UxiCode" */
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');

/* First View Section */
.first-view {
  background-color: #000 !important;
  color: #fff; /* White Text */
  min-height: 95vh; /* Full viewport height */
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
}

.first-view-bg-img {
  background: url('../assets/h-sign-landingpage.png') no-repeat center center;
  background-size: cover; /* Make sure the background image covers the section */
  height: 95%;
  width: 70%;
  position: absolute;
}

/* Overlay for better text visibility */
.first-view::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  z-index: 1;
}

.uvod {
  margin-top: 8rem;
}

/* Content */
.container {
  position: relative;
  z-index: 2;
}

.all_content {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Main Heading */
.main-heading {
  font-size: 12rem;
  font-weight: bold;
  font-family: 'Merriweather', serif;
  color: #fff;
  text-align: center;
}

/* Description */
.description {
  font-size: 1.9rem;
  color: #ddd;
}

/* Button Styling */
.btn-green {
  background-color: #baff44; /* Green Background */
  color: #000;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
}

.btn-green:hover {
  background-color: #5d8022;
  color: #fff;
}

.services {
  background-color: #000;
  margin: 0;
  padding: 0;
}
.services h1 {
  margin-top: 1rem;
  margin-left: 0rem;
  color: #baff44;
  font-size: 6rem;
  font-weight: 900;
  font-family: 'Merriweather', serif;
}
.services p {
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
}

.projects {
  background-color: #000;
  margin: 0;
  padding: 0;
}
.projects h1 {
  text-align: right;
  margin-top: 1rem;
  margin-right: 0rem;
  color: #5d8022;
  font-size: 6rem;
  font-weight: 900;
  font-family: 'Merriweather', serif;
}
.projects p {
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.see-more-btn {
  background-color: #baff44;
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  text-transform: uppercase;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: color 0.3s ease;
  margin-bottom: 4rem;
}
.see-more-btn:hover {
  background-color: #5d8022;
}
.see-more-btn:hover .arrow-icon {
  color: #5d8022;
}
.see-more-btn:hover {
  color: #fff;
}
.see-more-btn:hover .arrow-circle {
  transform: translateX(10px);
  background-color: #fff;
}

.arrow-circle {
  background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  transition: transform 0.3s ease;
}

.arrow-icon {
  color: #baff44;
  font-weight: bold;
}

.clients {
  background-color: #000;
  margin: 0;
  padding: 0;
}
.clients h1 {
  margin-top: 1rem;
  text-align: center;
  color: #baff44;
  font-size: 6rem;
  font-weight: 900;
  font-family: 'Merriweather', serif;
}

@media (max-width: 768px) {
  .first-view-bg-img {
    height: 100%;
    width: 100%;
  }

  .main-heading {
    font-size: 5rem;
  }

  .all_content {
    gap: 4rem;
  }

  .description {
    font-size: 1.5rem;
  }

  .services h1 {
    margin-top: 0rem;
    font-size: 5rem;
  }
  .services p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .projects h1{
    font-size: 5rem;
  }
  .projects p {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .clients h1 {
    font-size: 5rem;
  }

  .see-more-btn{
    margin-bottom: 2rem!important;
  }
}
</style>
