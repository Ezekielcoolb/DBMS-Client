import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { OverlayProgress } from '../../custom/overlayProgress';


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

const TeacherRap = styled.div`

@media (max-width: 745px) {
    .teach {
        width: 70% !important;
    }
}
@media (max-width: 540px) {
    .teach {
        width: 90% !important;
    }
}
`

const UpdateMyStudentForm = () => {
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
      const [loading, setLoading] = useState(true)
      const surname = localStorage.getItem('selectedSurname');
      const firstname = localStorage.getItem('selectedFirstname');
//   const [teacher, setTeacher] = useState('')
//   console.log(teacher);

  useEffect(() => {
      const fetchStudentById = async () => {
       
        try {
          const response = await axios.get(`https://dbmsc-server.onrender.com/api/getstudents/${surname}/${firstname}`);
          setFormData({
            surname: response.data.surname,
            firstname: response.data.firstname,
            gender: response.data.gender,
            class: response.data.class,
            department: response.data.department,
            admission: response.data.admission,
            address: response.data.address,
            birth: response.data.birth,
            guidiance: response.data.guidiance,
            status: response.data.status,
            origin: response.data.origin,
            lga: response.data.lga,
            amount: response.data.amount,
            category: response.data.category,
            subjectsOffer: response.data.subjectsOffer,
            // jssThree: response.data[0].jssThree,
            // sssGeneral: response.data[0].sssGeneral,
            // sssThree: response.data[0].sssThree,
    
    
          }
          
          )
          setLoading(false)
        //   setCategory(response.data.category)
          
        } catch (error) {
          console.error('Error fetching teacher by Id:', error);
          // Handle error (display error message, etc.)
        }
      };
  
      // Fetch data on screen load
      fetchStudentById();
    }, [surname, firstname]);
    

  
  
 const handleUpdateData = async () => {
        try {
        //   const dataId = 'your-data-id'; 
          await axios.put(`https://dbmsc-server.onrender.com/api/updateStudent/${surname}/${firstname}`, formData);
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        // Handle checkboxes separately
        if (type === 'checkbox') {
          const updatedSubjects = checked
            ? [...formData.subjectsAssigned, value]
            : formData.subjectsAssigned.filter((subject) => subject !== value);
    
          setFormData({ ...formData, subjectsAssigned: updatedSubjects });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };



  return (
    <>
    {
      loading ? <OverlayProgress/> : (
        <div>
             {errorMessage && (
      <ErrorMessage>
        {errorMessage}
        
        
      </ErrorMessage>
    )}
        <TeacherRap>
    <div className='teach' style={{width: "50%", textAlign: "start", fontFamily: 'Montserrat, sans-serif', fontSize: "16px", fontWeight: "bold", margin: "30px", padding: "30px"}}>
        <div>
        <h3 className='m-0'>Update Account</h3>
        <p style={{fontWeight: "lighter"}}>Only edit the changes you would like to make and leave the rest untouched.</p>
        </div>
  
    <form onSubmit={handleUpdateData}>
    
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
                    <option value="Jss " >JSS </option>
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

   
            
      {/* Add more subjects as needed */}

      <button style={{width: '50%'}} type="button" class="btn btn-info" onClick={handleUpdateData}>Update Account</button>

    </form>
    </div>
    </TeacherRap>
    </div>
      )
    }
    </>
  );
};

export default UpdateMyStudentForm;
