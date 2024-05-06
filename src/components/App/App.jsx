import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import contactsObj from "../../Data/ContactList.json";
import css from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setСontacts] = useState(() => {
    const savedСontacts = localStorage.getItem("contacts");
    return savedСontacts !== null ? JSON.parse(savedСontacts) : contactsObj;
  });
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [search, setSearch] = useState("");

  const addСontact = (newContact) => {
    setСontacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteСontact = (taskId) => {
    setСontacts((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleContacts = contacts.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm initialValues={contacts} onAdd={addСontact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteСontact} />
    </div>
  );
}

export default App;
