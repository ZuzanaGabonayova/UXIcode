<template>
  <section class="login-container">
    <div class="admin-login-wrapper">
      <h1 class="admin-login-title">Admin Login</h1>
      <form class="admin-login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="form.username"
            type="text"
            class="form-input"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="form-input"
            required
          />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div v-if="error" class="error-message">{{ error }}</div>
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
        username: '',
        password: '',
      },
      error: null,
    }
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post(
          `${baseUrl}/api/admin/login`,
          this.form
        )
        const token = response.data.token // Store token securely (e.g., in localStorage)
        localStorage.setItem('adminToken', token)
        this.error = null
        this.$router.push('/dashboard') // Redirect to admin dashboard
      } catch (err) {
        if (err.response && err.response.data && err.response.data.error) {
          this.error = err.response.data.error
        } else {
          this.error = 'An unexpected error occurred. Please try again.'
        }
      }
    },
  },
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  color: #ffffff;
}

.admin-login-wrapper {
  max-width: 400px;
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #000000;
}

.admin-login-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.admin-login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #1b5e20;
}

.login-button {
  background-color: #000000;
  color: #d4ff44;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.login-button:hover {
  background-color: #333333;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 1rem;
}
</style>
