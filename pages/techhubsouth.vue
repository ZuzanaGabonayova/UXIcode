<template>
  <div>
    <ProjectLayout :project-data="projectData" />
    <GalleryLayout :gallery-data="galleryData" />
  </div>
</template>

<script>
import ProjectLayout from '@/components/ProjectLayout.vue'
import GalleryLayout from '@/components/GalleryLayout.vue'

export default {
  name: 'SezPlaset',
  components: {
    ProjectLayout,
    GalleryLayout,
  },
  data() {
    return {
      projectData: {
        title: 'Techhub South',
        hashtags:
          '#webdesign #techhub #responsivewebsite #vuejs',
        logo: require('../assets/clients/techhub.jpeg'),
        content: [
          {
            title: 'What was our assignment?',
            text: [
              'To deliver a new modern, responsive website design for startup company that supports tech startups, students and investors.',
            ],
          },
          {
            title: 'Implementation process',
            text: [
              'During the implementation process, We started by creating detailed and visually engaging designs in Adobe XD, focusing on both functionality and aesthetics to align with the project´s goals. Once the designs were reviewed and approved by the client, our team of delevopers moved on to development of web app using VueJS framework. Every step of the process was meticulously crafted to bring the approved designs to life while ensuring optimal performance, responsiveness, and a seamless user experience.',
            ],
          },
        ],
        technologies: [
          {
            name: 'Adobe Illustrator',
            icon: require('../assets/tech/illustrator.svg'),
          },
          { name: 'Adobe XD', icon: require('../assets/tech/xd.svg') },
          {
            name: 'JavaScript',
            icon: require('../assets/tech/javascript.svg'),
          },
          {
            name: 'VueJS',
            icon: require('../assets/tech/vue.svg'),
          },
          {
            name: 'Bootstrap',
            icon: require('../assets/tech/bootstrap5.svg'),
          },
        ],
      },

      galleryData: {
        title: 'Gallery',
        images: [
          {
            src: require('../assets/projects/techhubsouth-mockup.png'),
            alt: 'Techhub South',
          },
          {
            src: require('../assets/projects/techhub/techhub1.png'),
            alt: 'Techhub South',
          },
          {
            src: require('../assets/projects/techhub/techhub2.png'),
            alt: 'Techhub South',
          },
          {
            src: require('../assets/projects/techhub/techhub3.png'),
            alt: 'Techhub South',
          },
          {
            src: require('../assets/projects/techhub/techhub4.png'),
            alt: 'Techhub South',
          },
        ],
      },
    }
  },
}
</script>
