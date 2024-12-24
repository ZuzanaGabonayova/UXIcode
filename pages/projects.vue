<template>
  <div>
    <MainBackgroundComponent
      :img-src="require('../assets/background/projects.jpg')"
      heading="Projects"
    />

    <ProjectsComponent />
  </div>
</template>

<script>
import MainBackgroundComponent from '../components/MainBackgroundComponent.vue'
import ProjectsComponent from '../components/ProjectsComponent.vue';

export default {
  components: {
    MainBackgroundComponent,
    ProjectsComponent,
  },
}
</script>
