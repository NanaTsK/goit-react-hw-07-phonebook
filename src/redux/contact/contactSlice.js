import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './contactInitialState';

import {
  createContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
} from './thunks';
import {
  handleFulfilledCreateContacts,
  handleFulfilledDeleteContacts,
  handleFulfilledGetContacts,
} from './helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfilledGetContacts)
      .addCase(createContactThunk.fulfilled, handleFulfilledCreateContacts)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDeleteContacts);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContactAction, removeContactAction } = contactsSlice.actions;
