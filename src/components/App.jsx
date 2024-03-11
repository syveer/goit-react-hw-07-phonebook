import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './Store/ContactSlice/ContactSlice';
import ContactList from './ContactList/ContactList';
import AddContactForm from './ContactForm/AddContactForm';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      {' '}
      {}
      <h1>Phone Book</h1>
      <AddContactForm />
      <ContactList />
    </div>
  );
}
export default App;
