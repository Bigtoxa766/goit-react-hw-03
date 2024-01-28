// import { Formik } from 'formik';
// import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';

function App() {  
  const userContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(() => {

    const svedContacts = window.localStorage.getItem("saved-contacts");

    if (svedContacts !== null) {
      return JSON.parse(svedContacts)
    }
    return userContacts;
  });

  const showUserContact = contacts.filter(cont =>
    cont.name.toLowerCase().includes(inputValue.toLowerCase()));
  
  const deleteUserContact = contactId => {
    
    setContacts((actualContacts) => {
      return actualContacts.filter(item =>
        item.id !== contactId)
    })
  };

  const addContact = ({ name, number }) => {
    
    setContacts(actual => {
      return [...actual,
        {
        id: nanoid(),
        name: name,
        number: number,
      }]
    })
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <div className={css.form_container}>
        <ContactForm onAdd={addContact} />
        <SearchBar value={inputValue} onChange={setInputValue} />
      </div>
      
      <ContactList userContacts={showUserContact} onDelete={deleteUserContact} />
    </>
)
}

export default App
