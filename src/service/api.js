import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://653bd934d5d6790f5ec787e3.mockapi.io/',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/contact');
  return data;
};

export const addContact = async contact => {
  const { data } = await contactsInstance.post('/contact', contact);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await contactsInstance.delete(`/contact/${contactId}`);
  return data;
};
