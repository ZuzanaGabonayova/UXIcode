<template>
  <div class="background-container">
    <!-- Background Image Section -->
    <div class="background-img-container">
      <img :src="imgSrc" alt="Background" class="img-bg" />
      <!-- Dynamic Heading -->
      <h1 class="centered-heading">{{ heading }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBackgroundComponent",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.background-container {
  position: relative;
  width: 100%; /* Ensure it fits within the viewport */
  height: 80vh; /* Adjust height as needed */
  margin: 0;
  padding: 0;

}

.background-img-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.img-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(2px); /* Slight blur for background */
  object-fit: cover; /* Ensures the image covers the area */
  z-index: 1;
}

.centered-heading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #baff44; 
  font-size: 9rem; 
  font-weight: bolder; 
  text-align: center;
  -webkit-text-stroke: 3px #000;
  text-stroke: 3px #000;
}

@media (max-width: 990px) {
  .background-container {
    height: 40vh;
  }

  .centered-heading {
    width: 90%;
    font-size: 5rem; 
    margin-bottom: 0;
    top: 60%;
  }
}
</style>
