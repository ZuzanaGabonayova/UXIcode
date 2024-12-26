<template>
  <section class="about-services py-5">
    <div class="container services-container">
      <!-- Dynamically Render Services -->
      <div
        v-for="(service, index) in services"
        :id="service.id"
        :key="index"
        class="row align-items-center service-card"
        :class="{ 'mt-5': index !== 0 }"
      >
        <!-- Conditional Image/Text Order -->
        <div
          v-if="index % 2 === 0"
          class="col-lg-4 col-md-4 col-sm-12 text-center"
        >
          <div class="service-icon">
            <img :src="service.icon" :alt="service.title" class="icon" />
          </div>
        </div>
        <div
          v-else
          class="col-lg-8 col-md-8 col-sm-12 order-lg-1 order-2"
        >
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
        <div
          v-if="index % 2 !== 0"
          class="col-lg-4 col-md-4 col-sm-12 text-center order-lg-2 order-1"
        >
          <div class="service-icon">
            <img :src="service.icon" :alt="service.title" class="icon" />
          </div>
        </div>
        <div
          v-else
          class="col-lg-8 col-md-8 col-sm-12"
        >
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="row align-items-center mt-5">
        <div
          class="col-12 col-md-12 d-flex justify-content-center align-items-center"
        >
          <a href="#" class="btn getintouch">
            Get in touch with us
            <div class="arrow-circle">
              <span class="arrow-icon">➜</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'AboutServicesComponent',
  data() {
    return {
      services: [
        {
          id: 'uxuidesign',
          title: 'UX/UI Design',
          description:
            'We specialize in creating intuitive, user-friendly designs for websites and applications that captivate your audience and enhance usability. From wireframes to stunning interfaces, we combine creativity with functionality to ensure your digital presence stands out. Whether you’re launching a new product or improving an existing one, we focus on delivering an engaging and seamless experience for your customers.',
          icon: require('../assets/services/user-experience-white.png'),
        },
        {
          id: 'webdev',
          title: 'Web Development',
          description:
            'We specialize in creating intuitive, user-friendly designs for websites and applications that captivate your audience and enhance usability. From wireframes to stunning interfaces, we combine creativity with functionality to ensure your digital presence stands out. Whether you’re launching a new product or improving an existing one, we focus on delivering an engaging and seamless experience for your customers.',
          icon: require('../assets/services/software-developer-white.png'),
        },
        {
          id: 'branding',
          title: 'Branding',
          description:
            'Starting a new business or revamping your brand identity? We’re here to help you build a strong, cohesive brand that resonates with your audience. Our services include logo creation, website design, and color palette selection to ensure your brand’s message is clear and visually impactful. We bring your vision to life with designs that leave a lasting impression.',
          icon: require('../assets/services/light-bulb-white.png'),
        },
        {
          id: 'seo',
          title: 'Search Engine Optimization (SEO)',
          description:
            'Want your website to rank at the top of Google searches and attract more customers? Our SEO services are designed to improve your website’s visibility and performance. We optimize your content, structure, and keywords to drive organic traffic and position your business ahead of the competition. More visibility means more leads and growth for your business.',
          icon: require('../assets/services/seo-icon-design-vector-white.png'),
        },
        {
          id: 'some',
          title: 'Social Media Marketing (SOME)',
          description:
            'Struggling to keep your social media active? We take care of everything, from content creation to scheduling posts, ensuring your social media profiles remain engaging and up-to-date. Our strategies are designed to connect with your audience, boost your online presence, and drive higher reach, helping you build lasting relationships with customers.',
          icon: require('../assets/services/social-media-white.png'),
        },
        {
          id: 'photo',
          title: 'Photography and Videography',
          description:
            'Do you need high-quality visuals for your website, social media, or events? We offer professional photography and videography services to capture memorable moments, promote your products, or showcase your brand. Whether it’s a corporate event, a product shoot, or content creation, we deliver visuals that tell your story and engage your audience.',
          icon: require('../assets/services/photography-white.png'),
        },
      ],
    };
  },
  mounted() {
    if (this.$route.hash) {
      const element = document.querySelector(this.$route.hash);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 180;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
};
</script>


<style scoped>
.about-services {
  background-color: #000; /* Fallback color */
  background-image: url('../assets/spiral.png'); /* Path to the spiral image */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: #baff44;
  width: 100%;
  position: relative; /* Ensure background covers entire section */
  overflow: hidden;
}

.service-card {
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #baff44;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
}

.service-card:hover {
  transform: scale(1.03);
  box-shadow: 0px 4px 20px rgba(186, 255, 68, 0.5);
}

.service-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: #5D8022;
  border-radius: 50%;
  margin: 0 auto;
}

.icon {
  width: 60%;
  height: auto;
}

.service-content {
  text-align: left;
}

.service-title {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;
}


.getintouch {
  width: fit-content!important;
  background-color: #baff44;
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  text-transform: uppercase;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: color 0.3s ease;
  margin-bottom: 4rem;
}
.getintouch:hover{
  background-color: #5D8022;
}
.getintouch:hover .arrow-icon{
  color: #5D8022;
}
.getintouch:hover{
  color: #fff;
}
.getintouch:hover .arrow-circle {
  transform: translateX(10px);
  background-color: #fff;
}


.arrow-circle {
  background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  transition: transform 0.3s ease;
}

.arrow-icon {
  color: #baff44;
  font-weight: bold;
}

@media (max-width: 768px) {
  .service-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .service-icon {
    margin-bottom: 1rem;
    width: 180px;
    height: 180px;
  }

  .service-content {
    text-align: center;
  }

  .service-title {
    font-size: 1.5rem;
  }

  .service-description {
    font-size: 0.9rem;
  }

  .services-container{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .services-container .service-card{
    width: 90%;
    padding: 0.3rem;
  }

  .about-services{
    background-image: none;
  }
}
</style>
