import React, { useState } from "react";
import Table from "./components/Table";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import "./App.css";
import axios from "axios";
import EditContact from "./components/EditContact";

const App = () => {
  const API = "http://localhost:8000/contacts";
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  // ! CREATE (post request)
  const addContact = (newContact) => {
    axios.post(API, newContact);
  };

  // !READ (get request)
  const getContacts = async () => {
    const result = await axios.get(API);
    setContacts(result.data);
  };

  // ! DELETE

  async function handleDelete(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  // !EDIT

  async function getOneContact(id) {
    const result = await axios(`${API}/${id}`);
    setOneContact(result.data);
  }

  async function saveContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/add" element={<AddContact addContact={addContact} />} />
        <Route
          path="/table"
          element={
            <Table
              contacts={contacts}
              handleDelete={handleDelete}
              getContacts={getContacts}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditContact
              getOneContact={getOneContact}
              saveContact={saveContact}
              oneContact={oneContact}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
