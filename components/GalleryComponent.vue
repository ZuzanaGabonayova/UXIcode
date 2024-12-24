<template>
  <section class="gallery-component">
    <div class="container">
      <h2 class="text-center gallery-title">Gallery</h2>
      <div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel">
        <!-- Line Indicators -->
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#galleryCarousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        <!-- Carousel Items -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex justify-content-center align-items-center">
              <img
                src="../assets/projects/sez-plaset-mockup.png"
                class="d-block carousel-image"
                alt="SEZ Plaset"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center">
              <img
                src="../assets/projects/nostalgie-mockup.png"
                class="d-block carousel-image"
                alt="Nostalgie"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center">
              <img
                src="../assets/projects/1811rengoring-mockup.png"
                class="d-block carousel-image"
                alt="1811 Rengoring"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center">
              <img
                src="../assets/projects/codamore-mockup.png"
                class="d-block carousel-image"
                alt="Codamore"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center">
              <img
                src="../assets/projects/techhubsouth-mockup.png"
                class="d-block carousel-image"
                alt="Tech Hub South"
              />
            </div>
          </div>
        </div>

        <!-- Navigation Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GalleryComponent',
}
</script>

<style scoped>
/* General Styling */
.gallery-component {
  background-color: #000;
  color: #baff44;
  padding-bottom: 1.5rem;
}

/* Title Styling */
.gallery-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #5d8022;
  margin-bottom: 30px;
}

/* Carousel Styling */
.carousel-inner {
  height: 70vh; /* Maximum height for desktop */
}

.carousel-image {
  max-height: 60vh;
  object-fit: contain;
}

/* Carousel Controls */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #baff44;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

/* Custom Line Indicators */
.carousel-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 20px;
  left: 0;
  right: 0;
}

.carousel-indicators button {
  width: 50px;
  height: 4px;
  background-color: #5d8022;
  border: none;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}

.carousel-indicators .active {
  background-color: #baff44;
}

/* Responsiveness */
@media (max-width: 768px) {
  .carousel-inner {
    height: 60vh;
  }

  .carousel-image {
    max-height: 50vh;
  }

  .gallery-title {
    font-size: 2rem;
  }

  .carousel-indicators button {
    width: 30px;
    height: 3px;
  }
}
</style>
