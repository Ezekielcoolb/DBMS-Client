import React, { useState } from 'react';
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

const StudentRap = styled.div`

@media (max-width: 790px) {
    .student {
        width: 90% !important;
    }
}
@media (max-width: 570px) {
    .student-block {
        display: block !important;
    }
    .student2 {
        width: 100% !important;
    }
}
`
const StudentForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    firstname: '',
    class: '',
    department: '',
    admission: '',
    birth: '',
    guidiance: '',
    address: '',
    status: '',
    origin: '',
    lga: '',
    gender: '',
    amount: '',
    category: '', 
    subjectsOffer: [],
  });


  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle checkboxes separately
    if (type === 'checkbox') {
      const updatedSubjects = checked
        ? [...formData.subjectsOffer, value]
        : formData.subjectsOffer.filter((subject) => subject !== value);

      setFormData({ ...formData, subjectsOffer: updatedSubjects });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://dbmsc-server.onrender.com/api/register', formData);
      console.log('Registration successful');
      localStorage.setItem("user", JSON.stringify(formData))
      window.location.reload()
       setErrorMessage('Student registered successfully');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      // You can redirect or display a success message here
    } catch (error) {
      console.error('Registration failed');
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
    <StudentRap>
    <div className='student' style={{width: "50%", textAlign: "start", fontFamily: 'Montserrat, sans-serif', fontSize: "16px", fontWeight: "bold", margin: "30px", padding: "30px"}}>
        <div>
        <h3 className='m-0'>Register a New Student</h3>
        <p style={{fontWeight: "lighter"}}>Enter student's details to create his/her account</p>
        </div>

        <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-between student-block'>
                <div class="form-group">
                        <label for="exampleInputSurname">Surname: </label>
                        <input type="text" class="form-control" id="exampleInputSurname" aria-describedby="surname" 
                        placeholder="Surname"  name = "surname" value={formData.surname} onChange={handleChange}  required/>
                </div>
                <div class="form-group">
                        <label for="exampleInputFirstName">First Name: </label>
                        <input type="text" class="form-control" id="exampleInputFirstName" aria-describedby="firstname" 
                        placeholder="First Name"  name = "firstname" value={formData.firstname} onChange={handleChange}  required/>
                </div>
            </div>
            <div className='d-flex justify-content-between student-block'>
               
                <div class="form-group ">
                <label for="exampleInputClass">Student Class: </label>
                <select   name="class" value={formData.class} onChange={handleChange} 
                id="exampleInputClass" class="form-control" required>
                    <option selected>Choose...</option>
                    <option value="Jss One" >JSS ONE</option>
                    <option value="Jss Two" >JSS TWO</option>
                    <option value="Jss Three" >JSS THREE</option>
                    <option value="Sss One" >SSS ONE</option>
                    <option value="Sss Two" >SSS TWO</option>
                    <option value="Sss Three" >SSS THREE</option>
                </select>
                </div>
                <div class="form-group ">
                <label for="exampleInputDepartment">Student Department: </label>
                <select   name="department" value={formData.department} onChange={handleChange} 
                id="exampleInputDepartment" class="form-control" required>
                    <option selected>Choose...</option>
                    <option value="Jss" >JSS </option>
                    <option value="Science" >SCIENCE</option>
                    <option value="Art" >ART</option>
                    <option value="Commercial" >COMMERCIAL</option>
                    
                </select>
                </div>
            </div>
            <div className='d-flex justify-content-between student-block'>
                <div style={{width: "50%"}} class="form-group">
                        <label for="exampleInputAdmission">Admission Number: </label>
                        <input type="text" class="form-control" id="exampleInputAdmission" aria-describedby="admission" 
                        placeholder="DMS/"  name = "admission" value={formData.admission} onChange={handleChange} required/>
                </div>
                <div style={{width: "45%"}}  class="form-group">
                        <label for="exampleInputBirth">Date of Birth: </label>
                        <input type="date" class="form-control" id="exampleInputBirth" aria-describedby="birth" 
                        placeholder="Date of Birth"  name = "birth" value={formData.birth} onChange={handleChange} required/>
                </div>
            </div>
            <div className='d-flex justify-content-between student-block'>
                <div class="form-group">
                    <label for="exampleInputAddress">Address: </label>
                    <input type="text" class="form-control" id="exampleInputAddress" 
                    placeholder="Address"  name = "address" value={formData.address} onChange={handleChange} required/>
                </div>
                <div class="form-group">
                        <label for="exampleInputStatus">Academic Status: </label>
                        <input type="text" class="form-control" id="exampleInputStatus" aria-describedby="status" 
                        placeholder="Active or Inactive" name = "status" value={formData.status} onChange={handleChange} required/>
                </div>
            </div>
            <div className='d-flex justify-content-between student-block'>
                <div class="form-group">
                    <label for="exampleInputOrigin">State of Origin: </label>
                    <input type="text" class="form-control" id="exampleInputOrigin" 
                    placeholder="State of Origin"  name = "origin" value={formData.origin} onChange={handleChange} required/>
                </div>
                <div class="form-group">
                        <label for="exampleInputlga">Local Government: </label>
                        <input type="text" class="form-control" id="exampleInputlga" aria-describedby="lga" 
                        placeholder="LGA" name = "lga" value={formData.lga} onChange={handleChange} required/>
                </div>
            </div>
            <div className='d-flex justify-content-between student-block'>
                <div className='student2' style={{width: "50%"}}  class="form-group ">
                <label for="inputStateGender">Gender: </label>
                <select  name="gender" value={formData.gender} onChange={handleChange}  id="inputStateGender" class="form-control" required>
                    <option selected>Choose...</option>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                </select>
                </div>
                <div className='student2' style={{width: "45%"}}  class="form-group ">
                <label for="inputStateCategory">Payment Category: </label>
                <select name='category' value={formData.category} onChange={handleChange}  id="inputStateCategory" class="form-control" required>
                    <option selected>Choose...</option>
                    <option value="jssGeneral">jssGeneral</option>
                    <option value="jssThree">jssThree</option>
                    <option value="sssGeneral">sssGeneral</option>
                    <option value="sssThree">sssThree</option>
                </select>
                </div>
            </div>
            <div className='d-flex justify-content-between student-block'>
                <div class="form-group">
                        <label for="exampleInputPaid">Amount Paid: </label>
                        <input type="number" class="form-control" id="exampleInputpaid" aria-describedby="paid" 
                        placeholder="School fees already paid" name = "amount" value={formData.amount} onChange={handleChange} required/>
                </div>
                <div class="form-group">
                        <label for="exampleInputguidian">Guidian's Number: </label>
                        <input type="number" class="form-control" id="exampleInputguidian" aria-describedby="guidian" 
                        placeholder="Guidian's Number" name = "guidiance" value={formData.guidiance} onChange={handleChange} required/>
                </div>
            </div>

           

             <button style={{width: '50%'}} type="button" class="btn btn-info" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    </StudentRap>
    </div>
  );
}

export default StudentForm;