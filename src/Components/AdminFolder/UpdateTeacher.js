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

const UpdateTeacherForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    gender: '',
    email: '',
    address: '',
    qualification: '',
    teacherId: '',
    classAssigned: '',
    departmentAssinged: '',
    subjectsAssigned: [],
  });

  const [errorMessage, setErrorMessage] = useState('');
  const name = localStorage.getItem('selectedName');
  const [loading, setLoading] = useState(true)
//   const [teacher, setTeacher] = useState('')
//   console.log(teacher);

  useEffect(() => {
      const fetchTeacherById = async () => {
       
        try {
          const response = await axios.get(`https://dbmsc-server.onrender.com/api/teachers/${name}`);
          setFormData({
            name: response.data.name,
            gender: response.data.gender,
            email: response.data.email,
            address: response.data.address,
            qualification: response.data.qualification,
            teacherId: response.data.teacherId,
            classAssigned: response.data.classAssigned,
            departmentAssinged: response.data.departmentAssinged,
            number: response.data.number,
            subjectsAssigned: response.data.subjectsAssigned,
            // jssThree: response.data[0].jssThree,
            // sssGeneral: response.data[0].sssGeneral,
            // sssThree: response.data[0].sssThree,
    
    
          }
          
          )
        //   setCategory(response.data.category)
        setLoading(false)
        } catch (error) {
          console.error('Error fetching teacher by Id:', error);
          // Handle error (display error message, etc.)
        }
      };
  
      // Fetch data on screen load
      fetchTeacherById();
    }, [name]);
    

    
    //     const name = localStorage.getItem('selectedName');
       
    //     const fetchTeacherById = async () => {
         
    //       try {
    //         const response = await axios.get(`http://localhost:5000/api/teachers/${name}`);
    //         setFormData({
    //             name: response.data[0].name,
    //             number: response.data[0].number,
    //             gender: response.data[0].gender,
    //             address: response.data[0].address,
    //             qualification: response.data[0].qualification,
    //             teacherId: response.data[0].teacherId,
    //             classAssigned: response.data[0].classAssigned,
    //             subjectsAssigned: response.data[0].subjectsAssigned,
        
        
    //           }
              
    //           )
    //       //   setCategory(response.data.category)
            
    //       } catch (error) {
    //         console.error('Error fetching teacher by Id:', error);
    //         // Handle error (display error message, etc.)
    //       }
    //     };
    
    //     // Fetch data on screen load
    //     fetchTeacherById();
    //   }, [name]);
  
 const handleUpdateData = async () => {
        try {
        //   const dataId = 'your-data-id'; 
          await axios.put(`https://dbmsc-server.onrender.com/api/updateTeacher/${name}`, formData);
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
            loading ? <OverlayProgress/> :(
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
    
      <div class="form-group">
            <label for="exampleInputName">Name: </label>
            <input type="text" class="form-control" id="exampleInputName" aria-describedby="name" 
            placeholder="Enter full name" name="name" value={formData.name} onChange={handleChange} required/>
      </div>
        <div class="form-group">
            <label for="exampleInputNumber">Phone Number: </label>
            <input type="number" class="form-control" id="exampleInputNumber" 
            placeholder="Phone Number" name="number" value={formData.number} onChange={handleChange} required/>
        </div>
      <div class="form-group ">
      <label for="inputStateGender">Gender: </label>
      <select  name="gender" value={formData.gender} onChange={handleChange}  id="inputStateGender" class="form-control" required>
        <option selected>Choose...</option>
        <option value="Male" >Male</option>
        <option value="Female" >Female</option>
      </select>
      </div>
      <div class="form-group">
            <label for="exampleInputEmail">Email: </label>
            <input type="email" class="form-control" id="exampleInputEmail" 
            placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div class="form-group">
            <label for="exampleInputAddress">Address: </label>
            <input type="text" class="form-control" id="exampleInputAddress" 
            placeholder="Address"  name="address" value={formData.address} onChange={handleChange} required/>
        </div>
        <div class="form-group">
            <label for="exampleInputQualification">Qualification: </label>
            <input type="text" class="form-control" id="exampleInputQualification" 
            placeholder="Teacher's qualification"  name="qualification" value={formData.qualification} onChange={handleChange} required/>
        </div>
        <div class="form-group">
            <label for="exampleInputId">Teacher ID: </label>
            <input type="text" class="form-control" id="exampleInputId" 
            placeholder="Teacher's Identification Number"  name="teacherId" value={formData.teacherId} onChange={handleChange} required/>
        </div>
        <div class="form-group ">
        <label for="inputStateAssigned">Class Assigned: </label>
        <select   name="classAssigned" value={formData.classAssigned} onChange={handleChange} 
         id="inputStateAssigned" class="form-control" required>
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
        <label for="inputDeparmentAssigned">Department Assigned: </label>
        <select   name="departmentAssinged" value={formData.departmentAssinged} onChange={handleChange} 
         id="inputDeparmentAssigned" class="form-control" required>
            <option selected>Choose...</option>
            <option value="Jss " >JSS </option>
            <option value="Sss General" >SSS GENERAL</option>
            <option value="Science" >SCIENCE</option>
            <option value="Art" >ART</option>
            <option value="Commercial" >COMMERCIAL</option>
            
        </select>
        </div>
   
      <div>
      <label>Subjects Assigned:</label>
        <div>
            <h4>Junior Secondary School</h4>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Mathematics Junior"
                checked={formData.subjectsAssigned.includes('Mathematics Junior')}
                onChange={handleChange}
                />
                <label>Mathematics Junior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="English Studies Junior"
                checked={formData.subjectsAssigned.includes('English Studies Junior')}
                onChange={handleChange}
                />
                <label>English Studies Junior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Basic Science"
                checked={formData.subjectsAssigned.includes('Basic Science')}
                onChange={handleChange}
                />
                <label>Basic Science</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Basic Technology"
                checked={formData.subjectsAssigned.includes('Basic Technology')}
                onChange={handleChange}
                />
                <label>Basic Technology</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Civic Education Junior"
                checked={formData.subjectsAssigned.includes('Civic Education Junior')}
                onChange={handleChange}
                />
                <label>Civic Education Junior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Computer Science Junior"
                checked={formData.subjectsAssigned.includes('Computer Science Junior')}
                onChange={handleChange}
                />
                <label>Computer Science Junior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Business Studies"
                checked={formData.subjectsAssigned.includes('Business Studies')}
                onChange={handleChange}
                />
                <label>Business Studies</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Agricultural Science Junior"
                checked={formData.subjectsAssigned.includes('Agricultural Science Junior')}
                onChange={handleChange}
                />
                <label>Agricultural Science Junior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Creative and Cultural Art"
                checked={formData.subjectsAssigned.includes('Creative and Cultural Art')}
                onChange={handleChange}
                />
                <label>Creative and Cultural Art</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Christian Religious Studies Junior"
                checked={formData.subjectsAssigned.includes('Christian Religious Studies Junior')}
                onChange={handleChange}
                />
                <label>Christian Religious Studies Junior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Physical Education"
                checked={formData.subjectsAssigned.includes('Physical Education')}
                onChange={handleChange}
                />
                <label>Physical Education</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Home Economics"
                checked={formData.subjectsAssigned.includes('Home Economics')}
                onChange={handleChange}
                />
                <label>Home Economics</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="History Junior"
                checked={formData.subjectsAssigned.includes('History Junior')}
                onChange={handleChange}
                />
                <label>History Junior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Social Studies"
                checked={formData.subjectsAssigned.includes('Social Studies')}
                onChange={handleChange}
                />
                <label>Social Studies</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Yoruba Junior"
                checked={formData.subjectsAssigned.includes('Yoruba Junior')}
                onChange={handleChange}
                />
                <label>Yoruba Junior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="French Junior"
                checked={formData.subjectsAssigned.includes('French Junior')}
                onChange={handleChange}
                />
                <label>French Junior</label>
            </div>
        </div>
        <div>
            <h4>Senior Secondary School</h4>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Mathematics Senior"
                checked={formData.subjectsAssigned.includes('Mathematics Senior')}
                onChange={handleChange}
                />
                <label>Mathematics Senior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="English Studies Senior"
                checked={formData.subjectsAssigned.includes('English Studies Senior')}
                onChange={handleChange}
                />
                <label>English Studies Senior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Civic Education Senior"
                checked={formData.subjectsAssigned.includes('Civic Education Senior')}
                onChange={handleChange}
                />
                <label>Civic Education Senior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Biology"
                checked={formData.subjectsAssigned.includes('Biology')}
                onChange={handleChange}
                />
                <label>Biology </label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Economics"
                checked={formData.subjectsAssigned.includes('Economics')}
                onChange={handleChange}
                />
                <label>Economics</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Computer Science Senior"
                checked={formData.subjectsAssigned.includes('Computer Science Senior')}
                onChange={handleChange}
                />
                <label>Computer Science senior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Chemistry"
                checked={formData.subjectsAssigned.includes('Chemistry')}
                onChange={handleChange}
                />
                <label>Chemistry </label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Agricultural Science Senior"
                checked={formData.subjectsAssigned.includes('Agricultural Science Senior')}
                onChange={handleChange}
                />
                <label>Agricultural Science senior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Physics"
                checked={formData.subjectsAssigned.includes('Physics')}
                onChange={handleChange}
                />
                <label>Physics</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Geography"
                checked={formData.subjectsAssigned.includes('Geography')}
                onChange={handleChange}
                />
                <label>Geography</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Data Processing"
                checked={formData.subjectsAssigned.includes('Data Processing')}
                onChange={handleChange}
                />
                <label>Data Processing</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Commerce"
                checked={formData.subjectsAssigned.includes('Commerce')}
                onChange={handleChange}
                />
                <label>Commerce</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="History Senior"
                checked={formData.subjectsAssigned.includes('History Senior')}
                onChange={handleChange}
                />
                <label>History senior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Accounting"
                checked={formData.subjectsAssigned.includes('Accounting')}
                onChange={handleChange}
                />
                <label>Accounting</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Marketing"
                checked={formData.subjectsAssigned.includes('Marketing')}
                onChange={handleChange}
                />
                <label>Marketing</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Government"
                checked={formData.subjectsAssigned.includes('Government')}
                onChange={handleChange}
                />
                <label>Government</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Christian Religious Studies Senior"
                checked={formData.subjectsAssigned.includes('Christian Religious Studies Senior')}
                onChange={handleChange}
                />
                <label>Christian Religious Studies Senior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Literature-in-English"
                checked={formData.subjectsAssigned.includes('Literature-in-English')}
                onChange={handleChange}
                />
                <label>Literature-in-English</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="Yoruba Senior"
                checked={formData.subjectsAssigned.includes('Yoruba Senior')}
                onChange={handleChange}
                />
                <label>Yoruba senior</label>
            </div>
            <div>
                <input
                type="checkbox"
                name="subjectsAssigned"
                value="French Senior"
                checked={formData.subjectsAssigned.includes('French Senior')}
                onChange={handleChange}
                />
                <label>French senior</label>
            </div>
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

export default UpdateTeacherForm;
