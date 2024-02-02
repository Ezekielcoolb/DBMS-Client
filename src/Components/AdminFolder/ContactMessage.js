import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContactMessages = async () => {
      try {
        const response = await axios.get('https://dbmsc-server.onrender.com/api/getContact');
        setMessages(response.data.messages);
        console.log(response.data);
      } catch (error) {
        setError('Error retrieving contact messages');
      }
    };

    fetchContactMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://dbmsc-server.onrender.com/api/deletecontact/${id}`);
      console.log(response.data.message);
      // Refresh the contact messages after deletion
      window.location.reload()
    } catch (error) {
      console.error('Error deleting contact message:', error);
    }
  };

  return (
    <div className='p-4' style={{fontFamily: 'Montserrat, sans-serif', textAlign: "start"}}>
      <h3 className='m-2'> Messages From Contact</h3>
      
        <div>
         {messages && messages.length > 0 ? (
             messages.map((message) => (
                <div className='m-3 p-3' key={message._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', textAlign: "start" }}>
                  <p><strong>Name:</strong> {message.name}</p>
                  <p><strong>Email:</strong> {message.email}</p>
                  <p><strong>Phone Number:</strong> {message.number}</p>
                  <p><strong>Subject Interested In:</strong> {message.interest}</p>
                  <p><strong>Appointment Time:</strong> {message.appointment}</p>
                  <p><strong>Message:</strong> {message.message}</p>
                  <button class="btn btn-danger" onClick={() => handleDelete(message._id)}>Delete</button>
                </div>
              ))
         ) : (
            <p>No Message</p>
         )}
        </div>
   
    </div>
  );
};

export default ContactMessages;
