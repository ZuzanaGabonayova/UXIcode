<template>
  <section class="clients-section py-5">
    <div class="container d-flex justify-content-center align-items-center">
      <!-- Div Block with Consistent Background Color -->
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
            <!-- First Slide -->
            <div class="carousel-item active">
              <div
                class="client-block d-flex align-items-center justify-content-center"
              >
                <div class="client-content text-center">
                  <p class="testimonial">
                    “UxiCode made for us entire branding, UI design of our
                    website and we can only recommend them :).”
                  </p>
                  <div class="client-info d-flex align-items-center">
                    <div class="img">
                      <img
                        src="../assets/clients/codamore.png"
                        alt="Codamore Logo"
                        class="client-logo mb-3"
                      />
                    </div>
                    <div class="client-company">
                      <p class="client-name">JUDr. Tomáš Jendrál</p>
                      <p class="client-title">CEO of the company</p>
                      <p class="client-company">CODAMORE s.r.o.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Second Slide -->
            <div class="carousel-item">
              <div
                class="client-block d-flex align-items-center justify-content-center"
              >
                <div class="client-content text-center">
                  <p class="testimonial">
                    “Our digital presence was outdated. We found UxiCode company
                    as the best choice for our new web design and development.
                    Really good experience!”
                  </p>
                  <div class="client-info d-flex align-items-center">
                    <div class="img">
                      <img
                        src="../assets/clients/sez_plaset.png"
                        alt="SEZ Plaset Logo"
                        class="client-logo mb-3"
                      />
                    </div>
                    <div class="client-company">
                      <p class="client-name">JUDr. Ján Gabonay</p>
                      <p class="client-title">
                        Director of production base development
                      </p>
                      <p class="client-company">SEZ Plaset s.r.o.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Third Slide -->
            <div class="carousel-item">
              <div
                class="client-block d-flex align-items-center justify-content-center"
              >
                <div class="client-content text-center">
                  <p class="testimonial">
                    “UxiCode takes care of our whole digital presence,
                    whether it is our website or social media. 
                    I have also experinced their photoshooting services on our events.
                    I am really satisfied with outcomes.”
                  </p>
                  <div class="client-info d-flex align-items-center">
                    <div class="img">
                      <img
                        src="../assets/clients/nostalgie.png"
                        alt="SEZ Plaset Logo"
                        class="client-logo mb-3"
                      />
                    </div>
                    <div class="client-company">
                      <p class="client-name">Dana Říhová</p>
                      <p class="client-title">
                        Owner
                      </p>
                      <p class="client-company">Nostalgie - Restaurant, Café</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Custom Line Indicators -->
          <div
            class="carousel-line-indicators position-absolute carousel-indicators"
          >
            <div class="line-indicator active"></div>
            <div class="line-indicator"></div>
            <div class="line-indicator"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClientsComponent',
  mounted() {
    const carousel = document.getElementById('clientsCarousel')
    carousel.addEventListener('slid.bs.carousel', (event) => {
      const indicators = document.querySelectorAll(
        '.carousel-line-indicators .line-indicator'
      )
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === event.to)
      })
    })
  },
}
</script>

<style scoped>
/* Section Styling */
.clients-section {
  background-color: #000;
  padding: 60px 0;
  color: #fff;
  text-align: center;
}

.clients-section p{
    font-family: 'Newsreader', serif;
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
.carousel-line-indicators {
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.line-indicator {
  width: 50px;
  height: 4px;
  background-color: #5d8022;
  transition: background-color 0.3s ease;
}

.line-indicator.active {
  background-color: #baff44;
}

/* Responsiveness */
@media (max-width: 768px) {
  .carousel-container {
    width: 90%;
    height: 60vh;
  }

  .testimonial {
    font-size: 1.2rem;
  }

  .client-logo {
    height: 60px;
  }
}
</style>
