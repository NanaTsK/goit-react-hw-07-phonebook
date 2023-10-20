import axios from 'axios';
// import { axios } from 'axios';

axios.defaults.baseURL =
  //   'https://6529710155b137ddc83ed64c.mockapi.io/phonebook/api';
  'https://6532802ed80bd20280f5a7ec.mockapi.io';

export const getAllContacts = async () => {
  return (await axios.get('/contacts')).data;
};

export const createContact = async data => {
  return (await axios.post('/contacts', data)).data;
};

export const deleteContact = async id => {
  return (await axios.delete(`/contacts/${id}`)).data;
};

// export const getAllContacts = async () => {
//   const { data } = await axios('/contacts');
//   return data;
// };

// export const createContact = async contact => {
//   const { data } = await axios.post('/contacts', contact);
//   return data;
// };

// export const deleteContact = async id => {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data.id;
// };
