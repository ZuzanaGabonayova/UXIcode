<template>
  <section class="gallery-component">
    <div class="container">
      <h2 class="text-center gallery-title">{{ galleryData.title }}</h2>
      <div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel">
        <!-- Line Indicators -->
        <div class="carousel-indicators">
          <button
            v-for="(image, index) in galleryData.images"
            :key="index"
            :data-bs-target="'#galleryCarousel'"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-label="'Slide ' + (index + 1)"
            :aria-current="index === 0 ? 'true' : null"
          ></button>
        </div>

        <!-- Carousel Items -->
        <div class="carousel-inner">
          <div
            v-for="(image, index) in galleryData.images"
            :key="index"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <div class="d-flex justify-content-center align-items-center">
              <img
                :src="image.src"
                class="d-block carousel-image"
                :alt="image.alt"
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
  name: 'GalleryLayout',
  props: {
    galleryData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.gallery-component {
  background-color: #000;
  color: #baff44;
  padding-bottom: 1.5rem;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #5d8022;
  margin-bottom: 30px;
}

.carousel-inner {
  height: 70vh;
}

.carousel-image {
  max-height: 60vh;
  object-fit: contain;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 20px;
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

@media (max-width: 768px) {
  .carousel-inner {
    height: 28vh;
  }

  .carousel-image {
    max-height: 20vh;
  }

  .carousel-indicators button {
    width: 20px;
    height: 3px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
