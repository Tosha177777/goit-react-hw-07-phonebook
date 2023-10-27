import Contacts from './Form/Contacts';
import Title from 'components/Title/Title';
import ContactList from './ContactList/ContactItemRender';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  // addContact,
  // deleteContact,
  filtersChange,
} from 'redux/contactFilterReducer';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { addContacts, deleteContacts, getContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onDelete = name => {
    dispatch(deleteContacts(name));
  };

  const handleContact = newContact => {
    if (
      contacts.some(
        name => name.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    } else if (!newContact.name || !newContact.number) {
      alert('Fill the form');
      return;
    }

    dispatch(addContacts(newContact));
  };

  const onFilterChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'filter':
        dispatch(filtersChange(value));
        break;

      default:
        return;
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  return (
    <div>
      <Title title={'Phonebook'}>
        <Contacts handleContact={handleContact} />
      </Title>
      <Title title={'Contacts'}>
        <Filter filter={filters} onFilterChange={onFilterChange} />
        {isLoading && <ColorRing />}
        {error && <p>{error}</p>}
        {filteredContacts !== null && (
          <ContactList contacts={filteredContacts} onDelete={onDelete} />
        )}
      </Title>
    </div>
  );
};
export default App;
