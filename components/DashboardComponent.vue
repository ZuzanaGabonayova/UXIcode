<template>
  <div class="dashboard-container py-5 mt-4">
    <div class="dashboard-header">
      <h1 class="dashboard-title">Admin Dashboard</h1>
      <div class="admin-info">
        <span class="admin-name">
          <i class="fas fa-user"></i> {{ adminName }}
        </span>
        <button class="logout-button" @click="logout">Logout</button>
      </div>
      
    </div>
    <div class="table-wrapper">
      <table class="submissions-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Message</th>
            <th>Submitted At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="submission in submissions" :key="submission._id">
            <td>{{ submission.name }}</td>
            <td>{{ submission.email }}</td>
            <td>{{ submission.company || 'N/A' }}</td>
            <td>{{ submission.message }}</td>
            <td>{{ new Date(submission.createdAt).toLocaleString() }}</td>
            <td>
              <button
                class="delete-button"
                @click="confirmDelete(submission._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>

    <!-- Delete Confirmation Popup -->
    <div v-if="showDeletePopup" class="delete-popup">
      <div class="popup-content">
        <p>
          Are you sure you want to delete submission with ID: {{ deleteId }}?
        </p>
        <div class="popup-actions">
          <button class="confirm-button" @click="deleteSubmission">Yes</button>
          <button class="cancel-button" @click="cancelDelete">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import baseUrl from '../src/config.js'

export default {
  data() {
    return {
      submissions: [],
      error: null,
      showDeletePopup: false,
      deleteId: null, // ID of the submission to delete
      adminName: '', // Name of the logged-in admin
    }
  },
  async created() {
    try {
      const token = localStorage.getItem('adminToken')
      if (!token) {
        this.$router.push('/login') // Redirect to login if not authenticated
        return
      }

      // Decode token to get admin name
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      this.adminName = tokenPayload.username;

      const response = await axios.get(`${baseUrl}/api/contact`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      this.submissions = response.data
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        this.error = err.response.data.error
      } else {
        this.error = 'Failed to load submissions. Please try again later.'
      }
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('adminToken') // Clear the token
      this.$router.push('/login') // Redirect to login page
    },
    confirmDelete(id) {
      this.deleteId = id // Set the ID of the submission to delete
      this.showDeletePopup = true // Show the popup
    },
    async deleteSubmission() {
      try {
        const token = localStorage.getItem('adminToken')
        await axios.delete(
          `${baseUrl}/api/contact/${this.deleteId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        this.submissions = this.submissions.filter(
          (submission) => submission._id !== this.deleteId
        ) // Remove the deleted submission from the list
        this.showDeletePopup = false // Close the popup
        this.deleteId = null
      } catch (err) {
        this.error = 'Failed to delete the submission. Please try again.'
      }
    },
    cancelDelete() {
      this.showDeletePopup = false // Close the popup
      this.deleteId = null // Clear the delete ID
    },
  },
}
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.dashboard-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #d4ff44;
}

.admin-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffff;
}

.admin-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.logout-button {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.logout-button:hover {
  background-color: #d32f2f;
}

.table-wrapper {
  overflow-x: auto;
  width: 100%;
}

.submissions-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #2a2a2a;
}

.submissions-table th,
.submissions-table td {
  border: 1px solid #444444;
  text-align: left;
  padding: 8px;
  color: #ffffff;
}

.submissions-table th {
  background-color: #5D8022;
  color: white;
  font-weight: bold;
}

.submissions-table tr:nth-child(even) {
  background-color: #3b3b3b;
}

.delete-button {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.delete-button:hover {
  background-color: #d32f2f;
}

.error-message {
  color: red;
  margin-top: 1rem;
  text-align: center;
}

.delete-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: #ffffff;
  color: #000;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.popup-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.confirm-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.confirm-button:hover {
  background-color: #45a045;
}

.cancel-button {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.cancel-button:hover {
  background-color: #d32f2f;
}
</style>
