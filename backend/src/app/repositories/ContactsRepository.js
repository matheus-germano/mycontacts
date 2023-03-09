const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Matheus',
    email: 'matheus@gmail.com',
    phone: '19971171341',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
