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
        title: '1811 Rengoring',
        hashtags: '#webmarketing #seo #wordpress #advertisementmaterials',
        logo: require('../assets/clients/1811Rengoring.png'),
        content: [
          {
            title: 'What was our assignment?',
            text: [
              'Maintenance of website, website marketing and creation of advertisement materials.',
            ],
          },
          {
            title: 'Implementation process',
            text: [
              'For 1811 Rengøring, We have handled the ongoing maintenance of their website, ensuring it remained updated, secure, and fully functional. We have also managed website marketing efforts, optimizing the site for better visibility and engagement. Additionally, We have created advertisement materials to support their branding and promotional campaigns, tailoring the content to resonate with their target audience. All tasks were carried out within the WordPress environment, leveraging its flexibility to deliver a user-friendly and visually appealing online presence. This comprehensive approach helped enhance the company’s digital footprint and support their business growth.',
            ],
          },
        ],
        technologies: [
          {
            name: 'Adobe Illustrator',
            icon: require('../assets/tech/illustrator.svg'),
          },
          {
            name: 'Wordpress',
            icon: require('../assets/tech/wordpress.svg'),
          },
        ],
      },

      galleryData: {
        title: 'Gallery',
        images: [
          {
            src: require('../assets/projects/1811rengoring-mockup.png'),
            alt: '1811 Rengoring',
          },
          {
            src: require('../assets/projects/1811rengoring/1811ren1.png'),
            alt: '1811 Rengoring',
          },
        ],
      },
    }
  },
}
</script>
