import { Container } from './index.styled';
import { Loader } from './Loader/Loader';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppState } from 'redux/app/selectors';
import { useEffect } from 'react';
import { getAllContactsThunk } from 'redux/contact/thunks';

const App = () => {
  const { isLoading, error } = useSelector(selectAppState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && <h1>Oooops! Something went wrong</h1>}
      <ContactList />
    </Container>
  );
};

export default App;
