<template>
  <div class="clients-logo-section">
    <div class="clients-logos">
      <div class="logo-carousel">
        <div class="logo-track">
          <div v-for="(logo, index) in logos" :key="index" class="logo-slide">
            <img :src="logo.src" :alt="logo.name" class="logo-image" />
          </div>
          <!-- Duplicate the logos for seamless infinite scrolling -->
          <div
            v-for="(logo, index) in logos"
            :key="'duplicate-' + index"
            class="logo-slide"
          >
            <img :src="logo.src" :alt="logo.name" class="logo-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsLogoSection',
  data() {
    return {
      logos: [
        { name: 'codamore', src: require('../assets/clients/codamore.png') },
        { name: 'nostalgie', src: require('../assets/clients/nostalgie.png') },
        { name: 'sez plaset', src: require('../assets/clients/sez_plaset.png')},
        { name: 'strky-piesky', src: require('../assets/clients/strky-piesky.png')},
        { name: 'carbax', src: require('../assets/clients/carbax.png') },
        { name: '1811 Rengoring', src: require('../assets/clients/1811Rengoring.png')},
        { name: 'VisibleMonay', src: require('../assets/clients/visiblemoney.png') },
        { name: 'Samosprava na kluc', src: require('../assets/clients/samosprava.png') },
      ],
    }
  },
}
</script>

<style scoped>
.clients-logo-section {
  background-color: #000;
  text-align: center;
  height: fit-content;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.clients-logos{
  background-color: #aaaaaaaa;
}
/* Logo Carousel Container */
.logo-carousel {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.logo-track {
  display: flex;
  width: calc(
    (250px + 40px) * 16
  ); 
  animation: scroll 40s linear infinite; 
}

.logo-slide {
  flex-shrink: 0;
  width: 250px;
  height: 100px;
  margin: 0 20px; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: 1rem 0;
  filter: grayscale(100%);
}

/* Infinite scrolling animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      -50%
    ); 
  }
}

@media (max-width: 990px) {
  .logo-track {
    width: calc(
      (125px + 40px) * 16
    ); 
  }

  .logo-slide {
    width: 125px;
    height: 90px;
  }

  .section-title {
    font-size: 2.2rem;
  }
}
</style>
