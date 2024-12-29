process.env.NODE_ENV = 'test'

const Admin = require('../models/Admin')
const Contact = require('../models/Contact')

beforeEach(async () => {
  await Admin.deleteMany({}); // Clears the Admin collection
  await Contact.deleteMany({}); // Clears the Contact collection
});

afterEach(async () => {
  await Admin.deleteMany({}); // Clears the Admin collection
  await Contact.deleteMany({}); // Clears the Contact collection
});
