<template>
    <div>
      <NavbarComponent />
      <Nuxt />
    </div>
</template>


<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComponent from '../components/NavbarComponent.vue'

export default {
    components: {
      NavbarComponent
    }
}

</script>
