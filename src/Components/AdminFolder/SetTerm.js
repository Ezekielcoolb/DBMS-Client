// SetTermForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { OverlayProgress } from '../../custom/overlayProgress';
import styled from "styled-components";

// import { Icon } from '@iconify/react';


const ErrorMessage = styled.div`
  color: blue;
  text-align: end;
  position: fixed;
  top: 10px;
padding: 10px;
  left: 50%;
  transform: translateX(100%);
  z-index: 999;
  background-color: white; /* Set your desired background color */
  
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Customize the shadow effect */
  transition: box-shadow 0.9s ease; /* Add a transition for a smooth effect */
  @media (max-width: 700px) {
    transform: translateX(50%);
  }
  @media (max-width: 530px) {
    transform: translateX(20%);
  }
  @media (max-width: 420px) {
    transform: translateX(0%);
  }
  @media (max-width: 355px) {
    transform: translateX(-20%);
    text-align: start;
  }
`;

const TermRap = styled.div`

@media (max-width: 790px) {
    .term {
        width: 70% !important;
    }
}
@media (max-width: 570px) {
  .term {
    width: 90% !important;
}
}
`

const SetTermForm = () => {
  const [formData, setFormData] = useState({
    session: '',
    term: '', // Default value for the term select
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [termData, setTermData] = useState([])
  // const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const response = await axios.get(`https://dbmsc-server.onrender.com/api/term`);
        setFormData({
          session: response.data[0].session,
          term: response.data[0].term,
         
  
  
        }
        
        )
        setTermData(response.data)
        // setLoading(false)
      } catch (error) {
        console.error('Error fetching registration by surname:', error);
        // Handle error (display error message, etc.)
      }
    };
  
    // Fetch data on screen load
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateData = async () => {
    try {
    //   const dataId = 'your-data-id'; 
      await axios.put(`https://dbmsc-server.onrender.com/api/updateTerm`, formData);
      console.log('Data updated successfully');
      setErrorMessage('Data updated successfully');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      // Handle success (redirect, display success message, etc.)
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle error (display error message, etc.)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dbmsc-server.onrender.com/api/set-terms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
   <>
  
        <div>
        {errorMessage && (
        <ErrorMessage>
          {errorMessage}
          
          
        </ErrorMessage>
      )}
    <TermRap>
    <div className='term' style={{width: "50%", textAlign: "start", fontFamily: 'Montserrat, sans-serif', fontSize: "16px", fontWeight: "bold", margin: "30px", padding: "30px"}}>
      <div>
        <h3 className='m-0'>Set Current Session and Term</h3>
        <p style={{fontWeight: "lighter"}}>Is this a new session or term? Make changes!</p>
    </div>
    <form onSubmit={handleSubmit}>


        <div class="form-group">
            <label for="exampleInputSession">Current Academic Session: </label>
            <input type="text" class="form-control" id="exampleInputSession" aria-describedby="session" 
            placeholder="2023/2024 Academic Session" name="session" value={formData.session} onChange={handleChange} required/>
        </div>
        <div class="form-group ">
        <label for="inputStateTerm">Current Academic Term: </label>
        <select name="term" value={formData.term} onChange={handleChange}  id="inputStateTerm" class="form-control" required>
            <option selected>Choose...</option>
            <option value="First Term">First Term</option>
            <option value="Second Term ">Second Term </option>
            <option value="Third Term">Third Term </option>
        </select>
        </div>

        {
        termData.length ?       <button style={{width: '50%'}} class="btn btn-info" onClick={handleUpdateData}>Update Data</button> : <button  style={{width: '50%'}} class="btn btn-info" onClick={handleSubmit}>Set Data</button>

      }
    </form>
    </div>
    </TermRap>
    </div>
    
   </>
  );
};

export default SetTermForm;
