import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './Store/ContactSlice/ContactSlice';
import ContactList from './ContactList/ContactList';
import AddContactForm from './ContactForm/AddContactForm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Phone Book</h1>
      <AddContactForm />
      <ContactList />
    </div>
  );
}

export default App;
