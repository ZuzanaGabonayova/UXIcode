<template>
    <div>
      <NavbarComponent />
      <Nuxt />
      <FooterComponent />
    </div>
</template>


<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
    components: {
      NavbarComponent,
      FooterComponent
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=K2D:wght@300;400;500;600;700&display=swap');

/* Apply the K2D font globally */
* {
  font-family: 'K2D', sans-serif;
}

</style>
