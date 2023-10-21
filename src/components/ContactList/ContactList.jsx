import ContactItem from 'components/ContactItem/ContactItem';
import { ContactBook } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contact/selectors';

export const ContactList = () => {
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);
  const getFilterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  const filterContacts = getFilterContacts();
  return (
    <ContactBook>
      <ContactItem contacts={filterContacts} />
    </ContactBook>
  );
};

export default ContactList;
