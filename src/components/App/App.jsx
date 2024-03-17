import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './App.module.css';
import { selectContacts } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>

      <ContactForm />
      {contacts.length > 0 && (
        <>
          <h2 className={styles.subtitle}>Contacts</h2>

          <Filter />
          <ContactList />
        </>
      )}
      {contacts.length === 0 && (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
    </div>
  );
};

export default App;
