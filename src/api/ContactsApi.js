import axios from 'axios';

axios.defaults.baseURL = 'https://6532802ed80bd20280f5a7ec.mockapi.io';

export const getAllContacts = async () => {
  return (await axios.get('/contacts')).data;
};

export const createContact = async data => {
  return (await axios.post('/contacts', data)).data;
};

export const deleteContact = async id => {
  return (await axios.delete(`/contacts/${id}`)).data;
};
