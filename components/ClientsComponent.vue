<template>
  <section class="clients-section py-5">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="carousel-container position-relative">
        <!-- Carousel -->
        <div
          id="clientsCarousel"
          class="carousel slide h-100 d-flex align-items-center"
          data-bs-ride="carousel"
          data-bs-interval="8000"
        >
          <!-- Carousel Items -->
          <div class="carousel-inner">
            <div
              v-for="(client, index) in clients"
              :key="index"
              class="carousel-item"
              :class="{ active: index === 0 }"
            >
              <div
                class="client-block d-flex align-items-center justify-content-center"
              >
                <div class="client-content text-center">
                  <p class="testimonial">“{{ client.testimonial }}”</p>
                  <div class="client-info d-flex align-items-center">
                    <div class="img">
                      <img
                        :src="client.logo"
                        :alt="client.logoAlt"
                        class="client-logo mb-3"
                      />
                    </div>
                    <div class="client-company">
                      <p class="client-name">{{ client.name }}</p>
                      <p class="client-title">{{ client.title }}</p>
                      <p class="client-company">{{ client.company }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Custom Line Indicators -->
          <div class="carousel-indicators">
            <button
              v-for="(client, index) in clients"
              :key="index"
              type="button"
              data-bs-target="#clientsCarousel"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
              :aria-label="'Slide ' + (index + 1)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ClientsComponent",
  data() {
    return {
      clients: [
        {
          testimonial:
            "UxiCode made for us entire branding, UI design of our website and we can only recommend them :).",
          name: "JUDr. Tomáš Jendrál",
          title: "CEO of the company",
          company: "CODAMORE s.r.o.",
          logo: require("../assets/clients/codamore.png"),
          logoAlt: "Codamore Logo",
        },
        {
          testimonial:
            "Our digital presence was outdated. We found UxiCode company as the best choice for our new web design and development. Really good experience!",
          name: "JUDr. Ján Gabonay",
          title: "Director of production base development",
          company: "SEZ Plaset s.r.o.",
          logo: require("../assets/clients/sez_plaset.png"),
          logoAlt: "SEZ Plaset Logo",
        },
        {
          testimonial:
            "UxiCode takes care of our whole digital presence, whether it is our website or social media. I have also experienced their photoshooting services on our events. I am really satisfied with outcomes.",
          name: "Dana Říhová",
          title: "Owner",
          company: "Nostalgie - Restaurant, Café",
          logo: require("../assets/clients/nostalgie.png"),
          logoAlt: "Nostalgie Logo",
        },
      ],
    };
  },
};
</script>


<style scoped>
/* Section Styling */
.clients-section {
  background-color: #000;
  padding: 60px 0;
  color: #fff;
  text-align: center;
}

.clients-section p {
  font-family: "Newsreader", serif;
}

/* Carousel Container Styling */
.carousel-container {
  background-color: #a59132;
  border-radius: 40px;
  width: 75%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
}

/* Client Block Styling */
.client-block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.client-content {
  width: 90%;
}

/* Testimonial Text */
.testimonial {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 30px;
  line-height: 1.5;
}

/* Client Info */
.client-info {
  margin-top: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}
.client-info .client-company {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
}

.client-logo {
  height: 80px;
  width: auto;
  margin: 0px!important;
}

.client-name {
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0;
  font-style: normal;
}

.client-title {
  font-size: 0.8rem;
  font-weight: 300;
  margin: 0;
}

.client-company {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  margin: 0;
}

/* Custom Line Indicators */
.carousel-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 20px;
}

.carousel-indicators button {
  width: 50px;
  height: 4px;
  background-color: #5d8022;
  border: none;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}

.carousel-indicators .active {
  background-color: #baff44;
}

/* Responsiveness */
@media (max-width: 768px) {
  .carousel-container {
    width: 90%;
    height: 65vh;
  }

  .testimonial {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  .client-logo {
    height: 80px;
  }

  .carousel-indicators button {
    width: 30px;
    height: 3px;
  }

  .client-info{
    flex-direction: column;
    margin-top: 20px;
    gap: 1rem;
  }

  .client-info .client-company{
    order: 1;
    justify-content: center;
    align-items: center;
  }
  .client-info .img{
    order: 2;
  }

  .clients-section{
    padding-bottom: 2rem!important;
    padding-top: 2rem!important;
  }
}
</style>
