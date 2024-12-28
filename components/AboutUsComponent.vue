<template>
  <section class="about-us py-5">
    <div class="container">
      <!-- Who Are We Section -->
      <div class="row align-items-center mb-5 whoarewe">
        <div class="col-lg-6 col-md-12 whoarewe-text">
          <h1 class="section-title">{{ aboutUs.title }}</h1>
          <div v-for="(paragraph, index) in aboutUs.paragraphs" :key="index">
            <p class="section-text">{{ paragraph }}</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 text-center whoarewe-img">
          <img
            :src="aboutUs.image"
            :alt="aboutUs.imageAlt"
            class="img-fluid rounded shadow"
          />
        </div>
      </div>

      <!-- Mission, Vision, Values Section -->
      <div class="row text-center mission-vision-values">
        <div
          v-for="(item, index) in missionVisionValues"
          :key="index"
          class="col-lg-4 col-md-6 d-flex flex-column align-items-center mb-4"
          :class="item.class"
        >
          <div class="icon-box d-flex justify-content-center align-items-center">
            <img :src="item.icon" :alt="item.title" class="icon img-fluid" />
          </div>
          <h3 class="mv-title">{{ item.title }}</h3>
          <p class="mv-text"  >{{ item.text }}</p>
        </div>
      </div>

      <!-- Our Team Section -->
      <div class="row text-center our-team mt-5">
        <div class="col-12">
          <h1 class="team-title">{{ team.title }}</h1>
        </div>
        <div
          v-for="(member, index) in team.members"
          :key="index"
          class="col-lg-6 col-md-6 d-flex flex-column "
          :class="member.class"
        >
          <div 
          class="team-member"
          :class="member.classdiv"
          >
            <a :href="member.linkedIn" target="_blank">
              <img :src="member.photo" :alt="member.name" class="team-photo" />
            </a>
            <a :href="member.linkedIn" target="_blank">
              <h4 class="team-name">{{ member.name }}</h4>
            </a>
            <p class="team-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'AboutUsComponent',
  data() {
    return {
      aboutUs: {
        title: 'Who are we?',
        paragraphs: [
          `At our company, we are passionate about delivering top-notch IT and
          digital solutions tailored to meet the unique needs of businesses.
          From web development and UX/UI design to branding, SEO, and social
          media marketing, we combine creativity, innovation, and modern
          technologies to help our clients achieve their goals.`,
          `Our team of dedicated professionals focuses on providing solutions
          that are not only visually stunning but also functional,
          user-friendly, and results-driven. Whether you’re a startup looking
          to build your brand or an established company aiming to grow your
          online presence, we’re here to bring your vision to life.`,
          `Driven by a commitment to quality and customer satisfaction, we take
          pride in turning challenges into opportunities. Let us help you tell
          your story, reach new heights, and achieve success in the digital
          world.`,
        ],
        image: require('../assets/aboutus/office.jpg'),
        imageAlt: 'Office Image',
      },
      missionVisionValues: [
        {
          title: 'Mission',
          text: `To provide innovative IT solutions tailored to our clients’ needs,
          delivering exceptional results in web development, branding, and
          digital services. We aim to empower businesses with creative,
          functional, and modern solutions that drive growth and success.`,
          icon: require('../assets/aboutus/mission-g.png'),
          class: 'mission',
        },
        {
          title: 'Vision',
          text: `To become a leading provider of IT and digital services, known for
          delivering cutting-edge solutions that help businesses thrive. We
          envision building long-term partnerships by consistently exceeding
          expectations and staying ahead in innovation.`,
          icon: require('../assets/aboutus/vision-g.png'),
          class: 'vision',
        },
        {
          title: 'Values',
          text: `Customer Focus – Prioritizing clients’ needs to
          deliver meaningful and impactful results.
          Innovation – Leveraging creativity and modern
          technologies to bring the best solutions.
          Integrity – Building trust through transparency,
          honesty, and quality in all we do.`,
          icon: require('../assets/aboutus/values-g.png'),
          class: 'values',
        },
      ],
      team: {
        title: 'Our team',
        members: [
          {
            name: 'Zuzana Gabonayová',
            role: 'CEO, Web Developer',
            photo: require('../assets/aboutus/zuzana.jpg'),
            linkedIn: 'https://www.linkedin.com/in/zuzanagabonayova/',
            class: 'zuzana-div',
            classdiv: 'zuzana',
          },
          {
            name: 'Katarína Hudáková',
            role: 'CEO, Team Leader',
            photo: require('../assets/aboutus/katarina.jpg'),
            linkedIn: 'https://www.linkedin.com/in/katarinahudakova/',
            class: 'katarina-div',
            classdiv: 'katarina',
          },
        ],
      },
    };
  },
};
</script>


<style scoped>
.about-us {
  background-color: #000; /* Black background */
  color: #baff44; /* Light green text */
}

/* Section Title */
.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #5d8022;
}

/* Section Text */
.section-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #fff;
}

/* Image Styling */
.img-fluid {
  max-width: 100%;
  height: auto;
}

/* Mission, Vision, Values */
.mission-vision-values {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.mission-vision-values .icon-box {
  height: 150px; 
  display: flex;
  align-items: center;
}

.mission-vision-values .icon {
  width: 120px; 
  height: auto;
}

.mission, .vision{
    border-right: 1px solid #baff44;
}

.mv-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #5d8022;
}

.mv-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;
  text-align: center;
  max-width: 90%;
}

.mission-vision-values .col-lg-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Team Section */
.team-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #5d8022;
}

.team-photo {
  width: 220px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.team-photo:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 15px #BAFF44; /* Glowing neon green shadow */
}

.team-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease;
}
.team-name:hover{
    color:#BAFF44;
}

.team-role {
  font-size: 1rem;
  font-style: italic;
  color: #fff
}

.our-team .team-member {
  margin-bottom: 3rem;
}

.zuzana{
    margin-right: 2rem;
}
.katarina{
    margin-left: 2rem;
}
.team-member a{
    text-decoration: none;
}

.zuzana-div{
  align-items: flex-end;
}
.katarina-div{
  align-items: flex-start;
}

@media (max-width: 768px){
  .whoarewe{
    justify-content: center;
    align-items: center;
  }

  .whoarewe .whoarewe-text, 
  .whoarewe .whoarewe-img{
    width: 90%;
  }

  .whoarewe .whoarewe-text h1{
    text-align: center;
  }

  .mission,
  .vision,
  .values{
    width: 90%;
    border-right: 0px;
    padding: 0;
  }
  
  .mission-vision-values .icon-box{
    height: 120px;
  }

  .zuzana,
  .katarina{
    margin: 1rem!important;
  }

  .zuzana-div,
  .katarina-div{
    align-items: center!important;;
  }
}
</style>
