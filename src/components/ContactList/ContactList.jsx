import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
