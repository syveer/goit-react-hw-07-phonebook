import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>Phone Book</h2>
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.contactItem}>
            <strong className={styles.contactName}>{contact.name}</strong>:
            <span className={styles.contactPhone}>{contact.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
