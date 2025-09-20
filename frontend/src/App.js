import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Pagination from './components/Pagination';
import './App.css'; 

const API_URL = 'https://contact-book-app-rho.vercel.app/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContacts = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_URL}?page=${page}&limit=10`);
      setContacts(res.data.contacts);
      setTotalPages(res.data.totalPages);
      setCurrentPage(res.data.currentPage);
    } catch (err) {
      setError('Failed to fetch contacts.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts(currentPage);
  }, [currentPage]);

  const handleAddContact = async (contact) => {
    try {
      await axios.post(API_URL, contact);
      fetchContacts(currentPage); 
    } catch (err) {
      setError(err.response.data.error);
    
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    
    } catch (err) {
      setError('Failed to delete contact.');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Contact Book</h1>
      {error && <p className="error-message">{error}</p>}
      <ContactForm onAdd={handleAddContact} />
      {loading ? (
        <p>Loading contacts...</p>
      ) : (
        <ContactList contacts={contacts} onDelete={handleDeleteContact} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
