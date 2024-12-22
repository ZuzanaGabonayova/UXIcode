<template>
  <div>
    <MainBackgroundComponent
      :img-src="require('../assets/background/services.jpg')"
      heading="Services"
    />

    <ServicesComponent />
    <AboutServicesComponent />

  </div>
</template>

<script>
import MainBackgroundComponent from '../components/MainBackgroundComponent.vue';
import ServicesComponent from '../components/ServicesComponent.vue';
import AboutServicesComponent from '../components/AboutServicesComponent.vue';

export default {
    components: {
        MainBackgroundComponent,
        ServicesComponent,
        AboutServicesComponent
    }
}
</script>