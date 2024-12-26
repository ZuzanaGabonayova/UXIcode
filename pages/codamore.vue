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
        title: 'Codamore',
        hashtags: '#photoshooting #photoshop #illustrator #socialmediacontent',
        logo: require('../assets/clients/codamore.png'),
        content: [
          {
            title: 'What was our assignment?',
            text: [
              'Photoshooting and capturing videos for Social Media from conference.',
            ],
          },
          {
            title: 'Implementation process',
            text: [
              'For Codamore, We were invited to a conference to capture high-quality photos and videos that would be used later for marketing and social media campaigns. During the event, We focused on capturing dynamic moments, engaging interactions, and the overall atmosphere to reflect the brand´s identity. After the event, We meticulously edited the photos using Photoshop to ensure they were visually striking and aligned with the desired aesthetic. The video content was edited in Premiere Pro, where we enhanced visuals, added transitions, and ensured the storytelling was compelling and professional. These edits were tailored to suit various marketing platforms, optimizing them for social media engagement. The final deliverables were designed to boost the brand’s visibility and effectively communicate the event´s success to its audience. This project showcased my ability to manage a creative workflow from capturing content to delivering polished marketing materials.',
            ],
          },
        ],
        technologies: [
          {
            name: 'Adobe Illustrator',
            icon: require('../assets/tech/illustrator.svg'),
          },
          {
            name: 'Photoshop',
            icon: require('../assets/tech/photoshop.svg'),
          },
          {
            name: 'Premiere Pro',
            icon: require('../assets/tech/premiere-pro.svg'),
          },
        ],
      },

      galleryData: {
        title: 'Gallery',
        images: [
          {
            src: require('../assets/projects/codamore-mockup.png'),
            alt: 'Codamore',
          },
          {
            src: require('../assets/projects/codamore/codamore1.jpg'),
            alt: 'Codamore',
          },
          {
            src: require('../assets/projects/codamore/codamore2.jpg'),
            alt: 'Codamore',
          },
          {
            src: require('../assets/projects/codamore/codamore3.jpg'),
            alt: 'Codamore',
          },
          {
            src: require('../assets/projects/codamore/codamore4.jpg'),
            alt: 'Codamore',
          },
          {
            src: require('../assets/projects/codamore/codamore5.jpg'),
            alt: 'Codamore',
          },
          {
            src: require('../assets/projects/codamore/codamore6.jpg'),
            alt: 'Codamore',
          },
        ],
      },
    }
  },
}
</script>
