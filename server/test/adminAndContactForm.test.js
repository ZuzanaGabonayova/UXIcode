const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../index')

chai.use(chaiHttp)

describe('Admin and Contact from workflow tests', () => {
  // should register new admin and later login admin to system
  it('should register a new admin successfully followed by admin login', (done) => {
    const adminData = {
      username: 'testAdmin',
      email: 'testadmin@test.com',
      password: 'password123',
    }

    // Step 1: Register the admin
    chai
      .request(server)
      .post('/api/admin/register')
      .send(adminData)
      .end((err, res) => {
        expect(res.status).to.be.equal(201)
        expect(res.body)
          .to.have.property('message')
          .eql(
            'Admin registered successfully! You can now log in with your credentials.'
          )

        // Step 2: Login with the registered admin credentials
        chai
          .request(server)
          .post('/api/admin/login')
          .send({
            username: adminData.username,
            password: adminData.password,
          })
          .end((loginErr, loginRes) => {
            expect(loginRes).to.have.status(200)
            expect(loginRes.body).to.have.property('token') // Check if token is received
            done() // Mark the test as done
          })
      })
  })

  // should register 2 admins, login and then fetch all admins from database
  it('should register 2 admins, login as one of them, and fetch all admins from the database', (done) => {
    const admin1 = {
      username: 'admin1',
      email: 'admin1@test.com',
      password: 'admin123',
    }

    const admin2 = {
      username: 'admin2',
      email: 'admin2@test.com',
      password: 'admin123',
    }

    // Step 1: Register Admin 1
    chai
      .request(server)
      .post('/api/admin/register')
      .send(admin1)
      .end((err, res) => {
        expect(res.status).to.be.equal(201)

        // Step 2: Register Admin 2
        chai
          .request(server)
          .post('/api/admin/register')
          .send(admin2)
          .end((err2, res2) => {
            expect(res2.status).to.be.equal(201)

            // Step 3: Login as Admin 1
            chai
              .request(server)
              .post('/api/admin/login')
              .send({
                username: admin1.username,
                password: admin1.password,
              })
              .end((loginErr, loginRes) => {
                expect(loginRes).to.have.status(200)
                expect(loginRes.body).to.have.property('token')

                const token = loginRes.body.token

                // Step 4: Fetch all admins
                chai
                  .request(server)
                  .get('/api/admin')
                  .set('Authorization', `Bearer ${token}`)
                  .end((fetchErr, fetchRes) => {
                    fetchRes.should.have.status(200)
                    fetchRes.body.should.be.an('array') // Response should be an array of admins
                    expect(fetchRes.body.length).to.be.equal(2) // Should contain 2 admins
                    done()
                  })
              })
          })
      })
  })

  // should fill out the contact form
  it('should fill out the contact form successfully', (done) => {
    const contactData = {
      name: 'John Doe',
      company: 'Joe',
      email: 'johndoe@example.com',
      message:
        'This is a test message for the contact form, testing with Mocha and Chai end-to-end testing.',
    }

    // Send a POST request to submit the contact form
    chai
      .request(server)
      .post('/api/contact')
      .send(contactData)
      .end((err, res) => {
        // Expect the response to be successful
        expect(res.status).to.be.equal(201)
        expect(res.body)
          .to.have.property('message')
          .eql('Form submitted successfully!')
        done()
      })
  })

  // should fill out the contact form 2 times, register admin, login admin, retrieve all submissions and delete one of them based on its ID, then check if there is only 1 submission left
  it('should fill out the contact form twice, register an admin, log in, retrieve all submissions, and delete one submission', function (done) {
    this.timeout(10000)

    const contactData1 = {
      name: 'John Doe',
      company: 'Company1',
      email: 'john@example.com',
      message: 'First contact form submission.',
    }

    const contactData2 = {
      name: 'Jane Doe',
      company: 'Company2',
      email: 'jane@example.com',
      message: 'Second contact form submission.',
    }

    const adminData = {
      username: 'adminUser',
      email: 'admin@example.com',
      password: 'admin123',
    }

    // Step 1: Submit the first contact form
    chai
      .request(server)
      .post('/api/contact')
      .send(contactData1)
      .end((err, res) => {
        expect(res.status).to.be.equal(201)

        // Step 2: Submit the second contact form
        chai
          .request(server)
          .post('/api/contact')
          .send(contactData2)
          .end((err2, res2) => {
            expect(res2.status).to.be.equal(201)

            // Step 3: Register an admin
            chai
              .request(server)
              .post('/api/admin/register')
              .send(adminData)
              .end((err3, res3) => {
                expect(res3.status).to.be.equal(201)

                // Step 4: Login the admin
                chai
                  .request(server)
                  .post('/api/admin/login')
                  .send({
                    username: adminData.username,
                    password: adminData.password,
                  })
                  .end((loginErr, loginRes) => {
                    expect(loginRes.status).to.be.equal(200)
                    expect(loginRes.body).to.have.property('token')

                    const token = loginRes.body.token

                    // Step 5: Retrieve all contact form submissions
                    chai
                      .request(server)
                      .get('/api/contact')
                      .set('Authorization', `Bearer ${token}`)
                      .end((fetchErr, fetchRes) => {
                        expect(fetchRes.status).to.be.equal(200)
                        fetchRes.body.should.be.an('array')
                        expect(fetchRes.body.length).to.be.equal(2)

                        // Step 6: Delete the first contact form submission
                        const contactToDelete = fetchRes.body[0]
                        chai
                          .request(server)
                          .delete(`/api/contact/${contactToDelete._id}`)
                          .set('Authorization', `Bearer ${token}`)
                          .end((deleteErr, deleteRes) => {
                            expect(deleteRes.status).to.be.equal(200)
                            expect(deleteRes.body)
                              .to.have.property('message')
                              .eql(
                                'Contact form submission deleted successfully!'
                              )

                            // Step 7: Fetch all contact form submissions again
                            chai
                              .request(server)
                              .get('/api/contact')
                              .set('Authorization', `Bearer ${token}`)
                              .end((finalFetchErr, finalFetchRes) => {
                                expect(finalFetchRes.status).to.be.equal(200)
                                finalFetchRes.body.should.be.an('array')
                                expect(finalFetchRes.body.length).to.be.equal(1) // Check that only 1 submission remains
                                done() 
                              })
                          })
                      })
                  })
              })
          })
      })
  })
})
