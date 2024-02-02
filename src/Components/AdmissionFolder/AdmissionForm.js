import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


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
    .form-group {
        width: 100% !important;
    }
}
`;
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

const AdmissionForm = () => {


    const [formData, setFormData] = useState({
        surname: '',
        firstname: '',

        email: '',

        birth: '',
        guidianceName: '',
        guidiancePhone: '',
        address: '',
        classInterested: '',
        previousClass: '',
        origin: '',
        lga: '',
        gender: '',

        previousSchool: '',
        reason: "",
        description: ''
    });


    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://dbmsc-server.onrender.com/api/studentadmissionform', formData);
            console.log('Form  submission successful');
            console.log(response.data.message);
            
            setErrorMessage(response.data.message);
            navigate("/admissionform/printout", { state: formData });
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
                <div className='student' style={{ textAlign: "start", marginTop: "-160px", fontFamily: 'Montserrat, sans-serif', fontSize: "16px", fontWeight: "bold", padding: "30px" }}>
                    <div>
                        <h3 className='m-0'>Admission Form</h3>
                        <p style={{ fontWeight: "lighter" }}>Fill Your Details Carefully</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='d-flex justify-content-around student-block'>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputSurname">Surname: </label>
                                <input type="text" class="form-control" id="exampleInputSurname" aria-describedby="surname"
                                    placeholder="Surname" name="surname" value={formData.surname} onChange={handleChange} required />
                            </div>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputFirstName">First Name: </label>
                                <input type="text" class="form-control" id="exampleInputFirstName" aria-describedby="firstname"
                                    placeholder="First Name" name="firstname" value={formData.firstname} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='d-flex justify-content-around student-block'>

                            <div style={{ width: "40%" }} className="form-group ">
                                <label for="exampleInputClass">Student Previous Class: </label>
                                <select name="previousClass" value={formData.previousClass} onChange={handleChange}
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
                            <div style={{ width: "40%" }} className="form-group ">
                                <label for="exampleInputClass">Class Applied For: </label>
                                <select name="classInterested" value={formData.classInterested} onChange={handleChange}
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
                        </div>
                        <div className='d-flex justify-content-around student-block'>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputAdmission">Email: </label>
                                <input type="email" class="form-control" id="exampleInputAdmission" aria-describedby="admission"
                                    placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputBirth">Date of Birth: </label>
                                <input type="date" class="form-control" id="exampleInputBirth" aria-describedby="birth"
                                    placeholder="Date of Birth" name="birth" value={formData.birth} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='d-flex justify-content-around student-block'>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputAddress">Address: </label>
                                <input type="text" class="form-control" id="exampleInputAddress"
                                    placeholder="Address" name="address" value={formData.address} onChange={handleChange} required />
                            </div>
                            <div style={{ width: "40%" }} className="form-group student2">
                                <label for="inputStateGender">Gender: </label>
                                <select name="gender" value={formData.gender} onChange={handleChange} id="inputStateGender" class="form-control" required>
                                    <option selected>Choose...</option>
                                    <option value="Male" >Male</option>
                                    <option value="Female" >Female</option>
                                </select>
                            </div>

                        </div>
                        <div className='d-flex justify-content-around student-block'>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputOrigin">State of Origin: </label>
                                <input type="text" class="form-control" id="exampleInputOrigin"
                                    placeholder="State of Origin" name="origin" value={formData.origin} onChange={handleChange} required />
                            </div>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputlga">Local Government: </label>
                                <input type="text" class="form-control" id="exampleInputlga" aria-describedby="lga"
                                    placeholder="LGA" name="lga" value={formData.lga} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='d-flex justify-content-around student-block'>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputStatus">Guidian's Name: </label>
                                <input type="text" class="form-control" id="exampleInputStatus" aria-describedby="status"
                                    placeholder="Guidian's Name" name="guidianceName" value={formData.guidianceName} onChange={handleChange} required />
                            </div>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputguidian">Guidian's Phone Number: </label>
                                <input type="number" class="form-control" id="exampleInputguidian" aria-describedby="guidian"
                                    placeholder="Guidian's Number" name="guidiancePhone" value={formData.guidiancePhone} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='d-flex justify-content-around student-block'>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputguidian">Previous School Attended: </label>
                                <input type="text" class="form-control" id="exampleInputguidian" aria-describedby="guidian"
                                    placeholder="Previous School Attended" name="previousSchool" value={formData.previousSchool} onChange={handleChange} required />
                            </div>
                            <div style={{ width: "40%" }} className="form-group">
                                <label for="exampleInputguidian">Reason For Leaving: </label>
                                <textarea type="text" class="form-control" id="exampleInputguidian" aria-describedby="guidian"
                                    placeholder="Reasoning For Leaving" name="reason" value={formData.reason}
                                    onChange={handleChange} required />
                            </div>

                        </div>

                        <div class="form-group" >
                            <div style={{ width: "80%" }} className="form-group">
                                <label for="exampleInputguidian">Why Do You Want To Attend DBMS: </label>
                                <textarea type="text" class="form-control" id="exampleInputguidian" aria-describedby="guidian"
                                    placeholder="Reasoning For Attending" name="description" value={formData.description}
                                    onChange={handleChange} required />
                            </div>
                        </div>

                        <button onClick={handleSubmit} style={{ width: '30%' }} type="submit" class="btn btn-info" >Submit</button>
                    </form>
                </div>
            </StudentRap>
        </div>
    );
}

export default AdmissionForm