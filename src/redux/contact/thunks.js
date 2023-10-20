import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContacts, createContact, deleteContact } from 'api/ContactsApi';

export const getAllContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getAllContacts()
);

export const createContactThunk = createAsyncThunk(
  'contacts/addContact',
  data => createContact(data)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
