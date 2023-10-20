import { combineReducers } from 'redux';
import { contactsReducer } from './contact/contactSlice';
import { filterReducer } from './filter/filterSlice';
import { reducerApp } from './app/appSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  app: reducerApp,
});
