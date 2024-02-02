import React, { useRef } from "react";
import { useLocation } from "react-router-dom"
import generatePDF from "react-to-pdf"




const AdmissionPrintOut = () => {
    const location = useLocation()
    const { email } = location.state
    const { surname } = location.state
    const { firstname } = location.state
    const { birth } = location.state
    const { previousSchool } = location.state
    const { previousClass } = location.state
    const { reason } = location.state
    const { description } = location.state
    const { guidianceName } = location.state
    const { guidiancePhone } = location.state
    const { lga } = location.state
    const { origin } = location.state
    const { address } = location.state
    const { gender } = location.state
    const { classInterested } = location.state


    const formRef = useRef()
    return (
<div>
        <div ref={formRef}  className="m-3" style={{ height: "100vh" }}>
            <div  style={{ marginTop: "-120px" }} >
                <div className="d-flex justify-content-between">
                    <div> <img style={{ width: '100px', height: '100px' }} src="/images/School_logo.jpg" alt="logo" /></div>
                    <div style={{ textAlign: "start" }}>
                        <h3 className="m-0">D'Blossom Model Private Schools</h3>
                        <p className="m-0">Dam-view, Obada Oko, Abeokuta, Ogun State.</p>
                        <p className="m-0">divineblossom999@gmail.com</p>
                        <p className="m-0">07025065593</p>
                    </div>
                </div>
                <div>
                    <div className="m-3 d-flex justify-content-center" style={{ borderBottom: "2px solid black" }} >
                        <h3 className="m-0" style={{
                            border: "2px solid black", width: "45%", backgroundColor: "gray", color: "white",
                            borderRadius: "50px 50px 0px 0px "
                        }}>Admission Form </h3>
                    </div>
                </div>
                <div>
                    <div style={{ fontWeight: "bold", fontSize: "20px" }} className="d-flex justify-content-around">
                        <div style={{ width: "30%", textAlign: "start" }}>
                            <div className="m-2"><p>Surname: <span style={{ fontWeight: "lighter" }} >{surname}</span></p></div>
                            <div className="m-2"><p>Address: <span style={{ fontWeight: "lighter" }}>{address}</span></p></div>
                            <div className="m-2"><p>Date of Birth: <span style={{ fontWeight: "lighter" }}>{birth}</span></p></div>
                            <div className="m-2"><p> Guidian's Name: <span style={{ fontWeight: "lighter" }}>{guidianceName}</span></p></div>
                            <div className="m-2"><p> Previous School: <span style={{ fontWeight: "lighter" }}>{previousSchool}</span></p></div>
                        </div>
                        <div style={{ width: "30%", textAlign: "start" }}>
                            <div className="m-2"><p>Firstname: <span style={{ fontWeight: "lighter" }}>{firstname}</span></p></div>
                            <div className="m-2"><p>State of Origin: <span style={{ fontWeight: "lighter" }}>{origin}</span></p></div>
                            <div className="m-2"><p> Gender: <span style={{ fontWeight: "lighter" }}>{gender}</span></p></div>
                            <div className="m-2"><p>Guidian's Phone Number <span style={{ fontWeight: "lighter" }}>{guidiancePhone}</span></p></div>
                            <div className="m-2"><p> Previous Class: <span style={{ fontWeight: "lighter" }}>{previousClass}</span></p></div>
                        </div>
                        <div style={{ width: "30%", textAlign: "start" }}>
                            <div className="m-2"><p>Email: <span style={{ fontWeight: "lighter" }}>{email}</span></p></div>
                            <div className="m-2"><p>Local Government: <span style={{ fontWeight: "lighter" }}>{lga}</span></p></div>
                            <div className="m-2"><p>Class of Interest: <span style={{ fontWeight: "lighter" }}>{classInterested}</span></p></div>
                            <div className="m-2"><p> Reason for Choosing DBMS:  <span style={{ fontWeight: "lighter" }}>{description}</span></p></div>
                            <div className="m-2"><p> Reason for Leaving: <span style={{ fontWeight: "lighter" }}>{reason}</span></p></div>
                        </div>
                    </div>
                    <div style={{ border: "2px solid grey" }}></div>
                    <div style={{ textAlign: "start" }} className="d-flex justify-content-between m-4">
                        <div>

                            <i style={{ color: "blue" }} className="m-0">Remark</i>
                            <h3>Management</h3>
                            <p>Well done for taking a great step towards a bright future.</p>
                        </div>
                        <div >
                            <p style={{ border: "1px solid black", padding: "5px" }}>Dr (Mrs) Akapo </p>
                            
                        </div>
                    </div>

                </div>
            </div>
           
        </div>
        <button className="btn btn-primary m-3 p-2" style={{ fontWeight: "bold", borderRadius: "20px", width: "" }}
                                onClick={() => {
                                    generatePDF(formRef, { filename: "admissionform.pdf" })
                                }}
                            >Download</button>
        </div>
    )
}
export default AdmissionPrintOut