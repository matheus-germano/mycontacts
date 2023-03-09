const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Matheus',
    email: 'matheus@gmail.com',
    phone: '19971171341',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Joao',
    email: 'joao@gmail.com',
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

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }
}

module.exports = new ContactsRepository();
