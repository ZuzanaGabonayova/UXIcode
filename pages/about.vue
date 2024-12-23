<template>
  <div>
    <MainBackgroundComponent
      :img-src="require('../assets/background/aboutus.jpg')"
      heading="About us"
    />

    <AboutUsComponent />
  </div>
</template>

<script>
import MainBackgroundComponent from '../components/MainBackgroundComponent.vue'
import AboutUsComponent from '../components/AboutUsComponent.vue';

export default {
  components: {
    MainBackgroundComponent,
    AboutUsComponent
  },
}
</script>
