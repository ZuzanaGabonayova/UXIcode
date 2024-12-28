<template>
  <section id="contactform" class="contactform-section py-5">
    <div class="container contact-form-container">
      <div class="row contact-form-wrapper">
        <!-- Left Side: Contact Form -->
        <div class="col-md-6 col-sm-12 ">
          <div class="contact-form-title">
            <h1>Tell us about your vision</h1>
            <p>
              Thinking about a new project? Interested in collaboration? Let’s
              connect and create something amazing together!
            </p>
          </div>
          <form class="contact-form" @submit.prevent="submitForm" >
            <div class="form-group">
              <label for="name">Name *</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="form-input"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="form-group">
              <label for="company">Company Name</label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                class="form-input"
                placeholder="Enter Your Company Name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="form-input"
                placeholder="Enter Your Email"
              />
            </div>
            <div class="form-group">
              <label for="message">Tell Us About Your Project *</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                class="form-textarea"
                placeholder="Write Us A Message..."
                rows="4"
              ></textarea>
            </div>
            <button type="submit" class="submit-button">
              SEND US MESSAGE <i class="far fa-comments"></i>
            </button>
          </form>
          <div v-if="error" class="error-message">{{ error }}</div>
          <div v-if="success" class="success-message">{{ success }}</div>
        </div>

        <!-- Right Side: Logo and Call-to-Action -->
        <div
          class="col-md-6 d-flex flex-column align-items-center book-call"
        >
          <div class="contact-form-title">
            <h1>Become part of our team</h1>
            <p>
              Interested in collaboration? Let’s connect and create something
              amazing together! 15-minute call to see how we can help each other.
            </p>
          </div>
          <img src="../assets/logo.svg" alt="UXI Studio Logo" class="logo" />
          <button class="cta-button" onclick="document.location.href = 'tel:+421950797735'">
            CALL US <i class="far fa-calendar"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import baseUrl from '../src/config.js'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        message: '',
      },
      error: null,
      success: null,
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          `${baseUrl}/api/contact`,
          this.form
        )
        this.success = response.data.message // Success message from backend
        this.error = null
        this.form = { name: '', email: '', company: '', message: '' } // Reset form
      } catch (err) {
        this.success = null
        if (err.response && err.response.data && err.response.data.error) {
          this.error = err.response.data.error // Error message from backend
        } else {
          this.error = 'An unexpected error occurred. Please try again.'
        }
      }
    },
  },
}
</script>

<style scoped>
.contact-form-container {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 80vw;
}

.contact-form-wrapper {
  padding: 1rem;
  background-color: #baff44;
  border-radius: 8px;
}

.contact-form-title h1 {
  font-family: 'Merriweather', serif;
  text-decoration: underline;
  font-size: 1.8rem;
  color: #000000;
}

.contact-form-title p {
  font-size: 1rem;
  color: #000;
  font-weight: 100;
  margin-top: 0.5rem;
}

.contact-form {
  margin-top: 0.5rem;
}

.form-group {
  margin-bottom: 0.5rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #000000;
}

.form-input,
.form-textarea {
  width: 100%;
  border: 1px solid #5D8022;
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #1b5e20;
}

.submit-button {
  background-color: #000000;
  color: #d4ff44;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  margin: 0 auto;
}

.submit-button:hover {
  background-color: #333333;
}

.book-call {
  justify-content: space-between;
  border-left: 1px solid #000;
}

.book-call .logo {
  width: 80%;
  height: auto;
}

.cta-button {
  background-color: #000000;
  color: #d4ff44;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.cta-button:hover {
  background-color: #333333;
}

@media (max-width: 768px){
  .contact-form-container {
    width: 90vw;
  }

  .book-call{
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 2rem;
    border-left: 0px;
    border-top: 1px solid;
  }

  .book-call .logo{
    width: 80%;
    margin-bottom: 1rem;
  }

  
  .contact-form-title h1 {
    font-size: 1.5rem;
    color: #000000;
  }

  .contact-form-title p {
    font-size: 0.8rem;
  }
}
</style>
