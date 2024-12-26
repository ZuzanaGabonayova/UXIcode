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
        title: 'Nostalgie',
        hashtags: '#webdesign #uxui #responsivewebsite #wordpress',
        logo: require('../assets/clients/nostalgie.png'),
        content: [
          {
            title: 'What was our assignment?',
            text: [
              'To deliver a completely new website design for well-known restaurant in eastern Slovakia.',
            ],
          },
          {
            title: 'Implementation process',
            text: [
              'During the implementation process, We began by creating new designs in Adobe XD, ensuring they aligned with the project vision. After receiving approval od new web design from the client, we developed a custom WordPress theme using Lazy Blocks for flexible content management. The template was delivered using PHP and JavaScript, ensuring a dynamic and responsive user experience tailored to the approved designs.',
            ],
          },
        ],
        technologies: [
          {
            name: 'Adobe Illustrator',
            icon: require('../assets/tech/illustrator.svg'),
          },
          {
            name: 'Adobe Photoshop',
            icon: require('../assets/tech/photoshop.svg'),
          },
          { name: 'Adobe XD', 
            icon: require('../assets/tech/xd.svg') 
          },
          {
            name: 'JavaScript',
            icon: require('../assets/tech/javascript.svg'),
          },
          {
            name: 'PHP',
            icon: require('../assets/tech/php.svg'),
          },
          {
            name: 'WordPress',
            icon: require('../assets/tech/wordpress.svg'),
          },
        ],
      },

      galleryData: {
        title: 'Gallery',
        images: [
          {
            src: require('../assets/projects/nostalgie-mockup.png'),
            alt: 'Nostalgie',
          },
          {
            src: require('../assets/projects/nostalgie/nostalgie1.png'),
            alt: 'Nostalgie',
          },
          {
            src: require('../assets/projects/nostalgie/nostalgie2.png'),
            alt: 'Nostalgie',
          },
          {
            src: require('../assets/projects/nostalgie/nostalgie3.png'),
            alt: 'Nostalgie',
          },
          {
            src: require('../assets/projects/nostalgie/nostalgie4.png'),
            alt: 'Nostalgie',
          },
          {
            src: require('../assets/projects/nostalgie/nostalgie5.png'),
            alt: 'Nostalgie',
          },
          {
            src: require('../assets/projects/nostalgie/nostalgie6.png'),
            alt: 'Nostalgie',
          },
        ],
      },
    }
  },
}
</script>
