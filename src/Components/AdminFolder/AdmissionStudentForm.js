import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdmissionStudentForm = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAdmission = async () => {
      try {
        const response = await axios.get('https://dbmsc-server.onrender.com/api/getAllAdmission');
        setMessages(response.data);
        console.log(response.data);
      } catch (error) {
        setError('Error retrieving contact messages');
      }
    };

    fetchAdmission();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://dbmsc-server.onrender.com/api/deleteAdmissionForm/${id}`);
      console.log(response.data.message);
      // Refresh the contact messages after deletion
      window.location.reload()
    } catch (error) {
      console.error('Error deleting contact message:', error);
    }
  };

  return (
    <div className='p-4' style={{fontFamily: 'Montserrat, sans-serif', textAlign: "start"}}>
      <h3 className='m-2'> Admission for Submitted</h3>
      
        <div>
         {messages && messages.length > 0 ? (
             messages.map((message) => (
                <div className='m-3 p-3' key={message._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', textAlign: "start" }}>
                  <p><strong>Name:</strong> {message.surname} {message.firstname}</p>
                  <p><strong>Email:</strong> {message.email}</p>
                  <p><strong>Phone Number:</strong> {message.phone}</p>
                  <p><strong>Class of Interest:</strong> {message.classInterested}</p>
                  <p><strong>Gender:</strong> {message.gender}</p>
                  <p><strong>Date of Birth:</strong> {message.birth}</p>
                  <p><strong>Address:</strong> {message.address}</p>
                  <p><strong>State of Origin:</strong> {message.origin}</p>
                  <p><strong>Local Government:</strong> {message.lga}</p>
                  <p><strong>Guidian's Name:</strong> {message.guidianceName}</p>
                  <p><strong>Guidian's Phone Number:</strong> {message.guidiancePhone}</p>
                  <p><strong>Previous School:</strong> {message.previousSchool}</p>
                  <p><strong>Previous Class:</strong> {message.previousClass}</p>
                  <p><strong>Reason for Leaving:</strong> {message.reason}</p>
                  <p><strong>Reason for Choosing DBMS:</strong> {message.description}</p>
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

export default AdmissionStudentForm;
