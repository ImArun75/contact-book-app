import React from 'react';
import './index.css'

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts found. Add one!</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id} className="contact-item">
              <div className="contact-info">
                <strong>{contact.name}</strong>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>
              <button onClick={() => onDelete(contact._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;