import { useState } from "react"
import { useAppContext } from "../Context"
import PropTypes from 'prop-types';
import styled from "styled-components";

const AdmissionRap = styled.div`
.card-box {
    
   width: 70%;
  
   margin-bottom: 30px;
//  background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Adjust shadow on hover if desired */
    }
  
    
  }
  @media (max-width: 1100px) {
    .card-box  {
        margin-top: -100px !important;
    }
    @media (max-width: 800px) {
        .card-box  {
            width: 90%  !important;
        }
  }
`





const StepOne = ({setStep}) => {
    const {studentDetails, setStudentDetails}= useAppContext()
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [studentClass, setClass] = useState("")

    StepOne.proptype ={
       setStep : PropTypes.any
    }
    const onSave = (values) => {
        console.log(email, name, phone)
        setStudentDetails({
           "name" : name,
           "email" : email, 
           "phone" : phone,
           "class" : studentClass,
        })
        values.preventDefault();
        setStep(2)
        
    }


    return (
        <div>
            <AdmissionRap>
            <div style={{alignItems: "center",fontFamily: 'Montserrat, sans-serif' }} className="d-flex justify-content-center m-0">

                <div style={{marginTop: "-50px"}} className=" card-box">
                <form  style={{ margin: "auto", width: "100% !important", fontWeight: "bold", fontSize: "18px"}} onSubmit={onSave}>
                    <h2 style={{}}>Fill In Your Details</h2>
                    <p style={{fontWeight: "lighter"}}>Select class applying for</p>
                    
                    <label  >
                        Name: </label>
                        <input  className='p-3 m-2'
                        style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                         fontSize:"16px", borderRadius: "20px", width: "70%"}}
                        type="type" value={name} onChange={(e) => setName(e.target.value)} required/>
                   
                   
                     <br />
                    <label>
                        Email:  </label>
                        <input className='p-3 m-2'
                        style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                         fontSize:"16px", borderRadius: "20px", width: "70%"}}
                        type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                   
                    <br />
                    <label>
                        Phone:  </label> 
                        <input className='p-3 m-2'
                        style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                         fontSize:"16px", borderRadius: "20px", width: "70%"}}
                        type="number" value={phone} onChange={(e) => setPhone(e.target.value)}required />
                   <br />
                    
                    <label for= "class">Class:   </label> 
                    <select className='p-3 m-2'
                        style={{borderStyle: "none", backgroundColor: "#e7e4e4", color: "black",
                         fontSize:"16px", borderRadius: "20px", width: "70%"}}
                       name="studentClass" value={studentClass} onChange={(e) => setClass(e.target.value)}
                    id="class" required>
                        <option selected>Choose...</option>
                        <option value="Jss One" >JSS ONE</option>
                        <option value="Jss Two" >JSS TWO</option>
                        <option value="Jss Three" >JSS THREE</option>
                        <option value="Sss One" >SSS ONE</option>
                        <option value="Sss Two" >SSS TWO</option>
                        <option value="Sss Three" >SSS THREE</option>
                    </select>
              
                    <br />
                    <button style={{width: '50%', fontWeight: "bold",  borderRadius: "20px"}} type="submit" 
                    className="btn btn-primary m-3 p-2">Make Payment</button>
                   
                </form>

                </div>
            </div>
            </AdmissionRap>
        </div>
    )
}
export default StepOne