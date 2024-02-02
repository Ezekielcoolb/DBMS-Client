import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from '@iconify/react';
import axios from "axios";


const zoomIn = keyframes`
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
const AnimatedDiv = styled.div`
  animation: ${zoomIn} 2s ease-in-out;
`;
const TestWrapper = styled.div`
.home-text {
  margin-bottom: 4rem;
  text-align: start;
}
  h1 {
    font-size: 35px; 
  }
  button {
    font-size: 20px
  }
  p {
    font-size: 20px; /* Default font size */
  }
  @media (max-width: 832px) {
    h1 {
      font-size: 40px; 
    }
    p {
      font-size: 16px; /* Font size below 800px for the paragraph */
    }
  }
  @media (max-width: 666px) {
    h1 {
      font-size: 35px; 
    }
    button {
      font-size: 15px
    }
  }
  @media (max-width: 582px) {
    h1 {
      font-size: 30px; 
    }
    p {
      font-size: 14px; /* Font size below 800px for the paragraph */
    }
  }
  @media (max-width: 582px) {
    div {
      width: 80%
    }
    p {
      font-size: 14px; /* Font size below 800px for the paragraph */
    }
  }
  @media (max-width: 437px) {
    h1 {
      font-size: 25px
    }
    
    p {
      font-size: 12px; /* Font size below 800px for the paragraph */
    }
    .home-text {
      margin-bottom: 8rem;
    }
  }
  @media (max-width: 382px) {
    h1 {
      font-size: 23px
    }
    
    p {
      font-size: 11px; /* Font size below 800px for the paragraph */
    }
  }
`;
const ContactRap = styled.div`
  @media (max-width: 760px) {
    .contact-block {
      display: block !important;
    }
    .contact-block2 {
      display: block !important;
    }
    .contact-img {
      margin: auto;
      width: 360px !important;
    }
    .contact-input {
      width: 90% !important;
    }
    .contact-input1 {
      width: 100% !important;
    }
    
  }
  @media (max-width: 400px) {

    .contact-red {
      font-size: 15px !important;
    }
  }
  @media (max-width: 325px) {

    .contact-red {
      font-size: 13px !important;
    }
  }
`

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] =useState('')
  const [interest, setInterest] =useState('')
  const [appointment, setAppointment] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const getImageStyle = (index) => ({
    backgroundImage: `url('./images/image${index + 1}.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    height: "50vh",
    filter: 'blur(4px)',
    WebkitFilter: 'blur(2px)', // For Safari
  });
  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value to control darkness
  };


  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://dbmsc-server.onrender.com/api/contact', {
        name: name,
        email: email,
        number: number,
        interest: interest,
        appointment: appointment,
        message: message,
      });

      setSuccessMessage(response.data.message);
      setErrorMessage('');
      console.log('message sent successfully');
      // Optionally, you can reset the form fields here
      setName('');
      setEmail('');
      setMessage('');
      setNumber('');
      setInterest('');
      setAppointment('')
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error sending contact message. Please try again.');
      console.log(errorMessage);
    }
  };

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className={activeIndex === 0 ? "active" : ""}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" className={activeIndex === 1 ? "active" : ""}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" className={activeIndex === 2 ? "active" : ""}></li>
        </ol>
        <div className="carousel-inner">
          {[ 0, 1, 2].map((index) => (
            <>
            <AnimatedDiv key={index} className={`carousel-item ${activeIndex === index ? "active" : ""}`} style={getImageStyle(index)}>
              {index >= 0 && <div style={overlayStyle}></div>}
            </AnimatedDiv>
            <TestWrapper>
                <div  className="carousel-caption d-md-block home-text">
                  <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "bold", backdropFilter: "none", textAlign: "start" }}>
                    Contact Us
                  </h1>
                  <div style={{fontFamily: "Rubik, sans-serif"} } className="m-0  d-flex  align-items-center"> 
                    <div style={{marginRight: "5px"}}  >
                      <span><Icon icon="solar:home-linear" color="white" width="18" height="18" /></span>
                      <a style={{color: "white", textDecoration: "none", marginLeft: "5px"}} href="/">Home</a>
                    </div>
                    <div>
                    <span> <Icon icon="mdi:arrow-right" color="white" width="20" height="20" /></span> 
                    <span style={{color: "crimson"}}> Contact </span>
                    </div>
                  </div>
                
                  
                </div>
              </TestWrapper>
          </>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <ContactRap>
      <div style={{margin: "20px"}}>
        <div style={{marginBottom: "30px"}} className=" d-flex justify-content-around align-item-center contact-block">
          <div className="contact-img" style={{height: "300px", width: "600px"}}>
          <img style={{height: "100%", width: "100%", objectFit: "cover",
                    display: "block", objectPosition: "top"}} src="./images/direction.png"  alt=".." /> 
          </div>
          <div className="contact-red" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: "18px"}}>
          <h2 style={{}}>D'BLOSSOM CAMPUS</h2>
                        <p>Divine Blossom Street, Obada Oko, Abeokuta, Ogun State</p>
                        <div style={{textAlign: "start"}}>
                          <a style={{textDecoration: "none", color: "crimson"}} href="mailto:divineblossom999@gmail.com"> 
                          <Icon icon="ic:outline-email" color="crimson" width="35" height="35" /> divineblossom999@gmail.com</a>
                          <a style={{textDecoration: "none", color: "crimson"}} href="tel:+2348037151183"> <br/> 
                          <Icon icon="mingcute:phone-fill" color="blue" width="35" height="35" /> 08037151183</a>
                          <a style={{textDecoration: "none", color: "crimson"}} href="https://wa.me/+2347025065593?text=Hello%2C%20Management"><br/>
                           <Icon icon="logos:whatsapp-icon" color="crimson" width="35" height="35" /> 07025065593</a>
                           </div>
                        <p style={{fontWeight: "bold"}}>Mon – Fri 7.00 – 18.00</p>
                        <p style={{}}>Saturday – Sunday CLOSED</p>
          </div>
        </div>
        <div style={{backgroundColor: "#e5e5e5", padding: "20px", fontFamily: 'Montserrat, sans-serif', fontSize: "18px", fontWeight: "bold"}}>
          <h2 style={{color: "crimson", fontSize: "25px"}}>BOOK AN APPOINTMENT WITH THE MANAGEMENT</h2>
          <div>   
              <form onSubmit={handleContactSubmit}>
                <div style={{textAlign: "start"}} className="d-flex justify-content-around contact-block2">
                  <div  style={{width: "30%"}} className="form-group contact-input1">
                    <label for="exampleInputName">Full Name</label>
                    <input  type="text" className="form-control" id="exampleInputName" 
                    placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)}/> 
                  </div>
                  <div  style={{width: "30%"}} class="form-group contact-input1">
                    <label for="exampleInputEmail1">Email</label>
                    <input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    
                  </div>
                  <div style={{width: "30%"}} class="form-group contact-input1">
                    <label for="exampleInputNumber">Phone Number</label>
                    <input type="number" class="form-control" id="exampleInputNumber" placeholder="Your Phone Number" value={number} onChange={(e) => setNumber(e.target.value)}/> 
                  </div>
                </div>
                <div style={{textAlign: "start"}} className="d-flex justify-content-around contact-block2">
                <div  style={{width: "48%"}} class="form-group contact-input1">
                    <label for="exampleInputDate">Preffered Date of Appointment</label>
                    <input type="Date" class="form-control" id="exampleInputDate" placeholder="Date" value={appointment} onChange={(e) => setAppointment(e.target.value)}/> 
                  </div>
                  <div className="contact-input" style={{width: "48%"}} >
                  <label for="exampleInputAppoint">Subject Interested In</label>
                  <select name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} id="exampleInputAppoint" class="form-control">
                    <option>Choose an option</option>
                    <option value="Admission">Admission</option>
                    <option value='Enquiry'>Enquiry</option>
                    <option value='Complaint'>Complaint</option>
                    <option value='Student Transfer'>Student Transfer</option>
                  </select>
                  </div>
                
                </div>
                <div style={{textAlign: "start", width: "96%", margin: "auto"}} class="form-group">
                  <label for="exampleFormControlTextarea1">Drop a Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button style={{marginTop: "20px"}} type="submit" class="btn btn-primary">Submit</button>
              </form>
          </div>
        </div>
      </div>
      </ContactRap>
    </div>
  );
};

export default Contact;
