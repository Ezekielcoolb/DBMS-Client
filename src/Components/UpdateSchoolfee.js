import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from "styled-components";

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
`;

const FeeRap = styled.div`

@media (max-width: 790px) {
    .fee {
        width: 70% !important;
    }
}
@media (max-width: 570px) {
  .fee {
    width: 90% !important;
}
}
`

const UpdateDataForm = () => {
  const [formData, setFormData] = useState({
    jssGeneral: '',
    jssThree: '',
    sssGeneral: '',
    sssThree: '',
  });
const [schoolData, setSchoolData] = useState([])
const [errorMessage, setErrorMessage] = useState('');

useEffect(() => {
  const fetchData = async () => {
   
    try {
      const response = await axios.get(`https://dbmsc-server.onrender.com/api/studentSchoolfee`);
      setFormData({
        jssGeneral: response.data[0].jssGeneral,
        jssThree: response.data[0].jssThree,
        sssGeneral: response.data[0].sssGeneral,
        sssThree: response.data[0].sssThree,


      }
      
      )
      setSchoolData(response.data)
    } catch (error) {
      console.error('Error fetching registration by surname:', error);
      // Handle error (display error message, etc.)
    }
  };

  // Fetch data on screen load
  fetchData();
}, []);


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateData = async () => {
    try {
    //   const dataId = 'your-data-id'; 
      await axios.put(`https://dbmsc-server.onrender.com/api/updateNewSchoolFees`, formData);
      console.log('Data updated successfully');
      // Handle success (redirect, display success message, etc.)
    } catch (error) {
      console.error('Error updating data:', error);
      setErrorMessage('School fees updated successfully');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      // Handle error (display error message, etc.)
    }
  };
  const setData = async () => {
    try {
    //   const dataId = 'your-data-id'; 
      await axios.post(`https://dbmsc-server.onrender.com/api/schoolfee`, formData);


      console.log('Data set successfully');
      setErrorMessage('School fees set successfully');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      // Handle success (redirect, display success message, etc.)
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div>
          {errorMessage && (
        <ErrorMessage>
          {errorMessage}
          
          
        </ErrorMessage>
      )}
    <FeeRap>
    <div className='fee' style={{width: "50%", textAlign: "start", fontFamily: 'Montserrat, sans-serif', fontSize: "16px", fontWeight: "bold", margin: "30px", padding: "30px"}}>
       <div>
        <h3 className='m-0'>Set School Fees</h3>
        <p style={{fontWeight: "lighter"}}>Set new school fees for a new term</p>
        </div>
      <form>
        <div class="form-group">
              <label for="exampleInputGeneral"> JSS General: </label>
              <input type="number" class="form-control" id="exampleInputGeneral" aria-describedby="general" 
              placeholder="Enter schoolfees for Jss1 - Jss2" name="jssGeneral" value={formData.jssGeneral} onChange={handleInputChange} required/>
        </div>
        <div class="form-group">
              <label for="exampleInputJss"> JSS Three: </label>
              <input type="number" class="form-control" id="exampleInputJss" aria-describedby="jss" 
              placeholder="Enter schoolfees for Jss3" name="jssThree" value={formData.jssThree} onChange={handleInputChange} required/>
        </div>
        <div class="form-group">
              <label for="exampleInputGeneral2"> SSS General: </label>
              <input type="number" class="form-control" id="exampleInputGeneral2" aria-describedby="general2" 
              placeholder="Enter schoolfees for sss1 - sss2" name="sssGeneral" value={formData.sssGeneral} onChange={handleInputChange} required/>
        </div>
        <div class="form-group">
              <label for="exampleInputSss"> SSS Three: </label>
              <input type="number" class="form-control" id="exampleInputSss" aria-describedby="sss" 
              placeholder="Enter schoolfees for sss3" name="sssThree" value={formData.sssThree} onChange={handleInputChange} required/>
        </div>
        {
        schoolData.length ?       <button style={{width: '50%'}} class="btn btn-info" onClick={handleUpdateData}>Update Data</button> : <button  style={{width: '50%'}} class="btn btn-info" onClick={setData}>Set Data</button>

      }
      </form>



      
      

    </div>
    </FeeRap>
    </div>
  );
};

export default UpdateDataForm;
