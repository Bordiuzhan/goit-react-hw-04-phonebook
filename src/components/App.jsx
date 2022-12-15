import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsLS = localStorage.getItem('contacts');
    if (contactsLS !== null) {
      return JSON.parse(contactsLS);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    for (let contact of contacts) {
      if (contact.name.toLowerCase().includes(name.toLowerCase())) {
        return alert(`${name} is alredy in contacts`);
      }
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredName = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredName = getFilteredName();
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}></ContactForm>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter}></Filter>
      <ContactList
        items={filteredName}
        onDeleteContact={deleteContact}
      ></ContactList>
    </Layout>
  );
}
