<template>
  <div>
    <ProjectLayout :project-data="projectData" />
    <GalleryLayout :gallery-data="galleryData" />
  </div>
</template>

<script>
import ProjectLayout from "@/components/ProjectLayout.vue";
import GalleryLayout from "@/components/GalleryLayout.vue";

export default {
  name: "SezPlaset",
  components: { 
    ProjectLayout,
    GalleryLayout
   },
  data() {
    return {
      projectData: {
        title: "SEZ Plaset",
        hashtags: "#webdesign #sezplaset #uxui #branding",
        logo: require("../assets/clients/sez_plaset.png"),
        content: [
          {
            title: "What was our assignment?",
            text: [
              "The main task was designing and development of modern, responsive website and its content, ensuring the design follows the brand identity. Website needs to be accessible in different languages as the company has customers from around the world.",
            ],
          },
          {
            title: "Implementation process",
            text: [
              "As the company didn’t have content for the website, we began by visiting their production halls to capture professional photos and videos that showcase their work environment and operations. We also created minimalist product shots to highlight key offerings in a clean and modern style.",
              "Once we had all the necessary content, we conducted thorough competitor research to analyze what similar companies offer on their websites and identify opportunities for improvement. With this insight, we proceeded to design the website, ensuring it aligned with the brand’s identity and goals.",
              "Finally, we developed the website to its final state with dynamic content, a fully responsive design, and a multi-language option to cater to the company’s global customer base. The result is a modern, user-friendly platform that reflects the company’s values and vision.",
            ],
          },
        ],
        technologies: [
          { name: "Adobe Premiere", icon: require("../assets/tech/premiere-pro.svg") },
          { name: "Adobe Illustrator", icon: require("../assets/tech/illustrator.svg") },
          { name: "Adobe Photoshop", icon: require("../assets/tech/photoshop.svg") },
          { name: "Figma", icon: require("../assets/tech/figma.svg") },
          { name: "JavaScript", icon: require("../assets/tech/javascript.svg") },
          { name: "Nuxt2", icon: require("../assets/tech/nuxt2.svg") },
        ],
      },

      galleryData: {
        title: "Gallery",
        images: [
          {
            src: require("../assets/projects/sez-plaset-mockup.png"),
            alt: "SEZ Plaset",
          },
          {
            src: require("../assets/projects/sezplaset/plaset1.png"),
            alt: "SEZ Plaset",
          },
          {
            src: require("../assets/projects/sezplaset/plaset2.png"),
            alt: "SEZ Plaset",
          },
          {
            src: require("../assets/projects/sezplaset/plaset3.png"),
            alt: "SEZ Plaset",
          },
          {
            src: require("../assets/projects/sezplaset/plaset4.png"),
            alt: "SEZ Plaset",
          },
          {
            src: require("../assets/projects/sezplaset/plaset5.png"),
            alt: "SEZ Plaset",
          },
        ],
      },
    };
  },
};
</script>
