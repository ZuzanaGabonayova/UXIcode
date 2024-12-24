<template>
  <section class="projects-section py-5">

    <LatestProjectsComponent />

    <div class="container">
      <!-- Projects Grid -->
      <div class="row gy-4">
        <!-- Project 1 -->
        <div class="col-12 col-md-4">
          <div class="project-card codamore">
            <div class="project-info">
              <h4 class="project-title">Codamore</h4>
              <p class="project-description">
                Photoshooting and capturing videos for Social Media from conference.
              </p>
            </div>
            <div class="image-container">
              <img
                src="../assets/projects/codamore-mockup.png"
                alt="codamore Mockup"
                class="project-image"
              />
            </div>
            <div class="project-view-container">
              <a href="/codamore" class="project-view">
                VIEW
                <div class="arrow-circle">
                  <span class="arrow-icon">➜</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="col-12 col-md-4">
          <div class="project-card rengoring">
            <div class="project-info">
              <h4 class="project-title">1811 Rengøring</h4>
              <p class="project-description">
                Maintenance of website, website marketing and creation of advertisement materials.
              </p>
            </div>
            <div class="image-container">
              <img
                src="../assets/projects/1811rengoring-mockup.png"
                alt="1811 rengoring Mockup"
                class="project-image"
              />
            </div>
            <div class="project-view-container">
              <a href="/1811rengoring" class="project-view">
                VIEW
                <div class="arrow-circle">
                  <span class="arrow-icon">➜</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </section>
</template>

<script>
import LatestProjectsComponent from './LatestProjectsComponent.vue';

export default {
  name: 'ProjectsComponent',
  components: {
    LatestProjectsComponent
  }
}
</script>

<style scoped>
/* Section Background */
.projects-section {
  background-color: #000;
  color: #fff;
  padding: 0px 0;
}

/* Project Cards */
.project-card {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 450px;
}

/* Project Info */
.project-info {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: #fff;
  text-align: left;
  flex-grow: 1;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.project-description {
  font-size: 1.2rem;
  color: #ddd;
}

/* Image Container */
.image-container {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.project-image {
  width: auto;
  height: 100%;
  object-fit: contain; /* Ensures full visibility of the image */
}

.codamore {
  background-color: #5D8022;
}
.codamore .project-view-container {
  background-color: #3C5512;
}
.codamore:hover {
  border: 1px solid #3C5512;
  box-shadow: 0 0 15px #5D8022;
}

.rengoring {
  background-color: #90323D;
}
.rengoring .project-view-container {
  background-color: #6F222B;
}
.rengoring:hover {
  border: 1px solid #6F222B;
  box-shadow: 0 0 15px #90323D;
}


/* View Link */
.project-view-container {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 50px;
  width: 100%;
}

.project-view {
  font-weight: bold;
  text-transform: uppercase;
  color: #baff44;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: color 0.3s ease;
}

.project-view-container:hover .arrow-circle {
  transform: translateX(10px);
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
</style>
