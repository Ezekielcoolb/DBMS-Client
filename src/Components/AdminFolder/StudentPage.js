// TeacherList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Icon } from '@iconify/react';
import { OverlayProgress } from '../../custom/overlayProgress';




const TableRap = styled.div`
width:auto;
overflow: auto !important;

.table-div{
  width: 1050px !important;
 
  overflow: auto !important;
}

/* TeacherList.css */
.teacher-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.teacher-table th,
.teacher-table td {
   
  
  border: 1px solid #ddd; /* Faint border color */
//   padding: 8px;
  text-align: left;
  text-align: center;
}

.teacher-table th {
  background-color: #f2f2f2; /* Header background color */
}

`
const StudentPageRap = styled.div`
.card {
    width: 100%;
    margin: 10px;
    padding: 10px;
    background-color: #fff; /* Set your desired background color */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Customize the shadow effect */
    transition: box-shadow 0.3s ease; /* Add a transition for a smooth effect */
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adjust shadow on hover if desired */
    }
  
    .card-content {
      padding: 20px;
    }
  }
`


const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(5); // Number of teachers initially visible
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [originalStudents, setOriginalStudents] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const response = await axios.get(`https://dbmsc-server.onrender.com/api/getStudent`);
       
        setStudents(response.data)
        setOriginalStudents(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching registration by surname:', error);
        // Handle error (display error message, etc.)
      }
    };
  
    // Fetch data on screen load
    fetchData();
  }, []);

  const handleShowMore = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + rowsPerPage);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setVisibleTeachers(parseInt(e.target.value, 10));
  };


  const handleSearch = async () => {
   try {
        const response = await axios.get(`https://dbmsc-server.onrender.com/api/searchstudents/search?keyword=${searchKeyword}`);
       
        setStudents(response.data)
      } catch (error) {
        console.error('Error fetching registration by surname:', error);
        // Handle error (display error message, etc.)
      }
  };
  const handleReset = () => {
    setStudents(originalStudents); // Reset to the original list
    setSearchKeyword(''); // Clear the search keyword
  };

  const handleViewDetails = (surname, firstname) => {
    localStorage.setItem('selectedSurname', surname);
    localStorage.setItem('selectedFirstname', firstname);
  };


  const handleDelete = async (surname, firstname) => {
    try {
      const response = await fetch(`https://dbmsc-server.onrender.com/api/deletestudents/${firstname}/${surname}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        console.log('Teacher deleted successfully');
        window.location.reload()
        // You can perform additional actions, such as refreshing the teacher list
        // onDelete();
      } else {
        console.error('Error:', data.message);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  }

  const handleButtonClick = (surname, firstname) => {
    handleDelete(surname, firstname); // You can also call other functions if needed
  };



  return (
    <>
    {
      loading ? <OverlayProgress /> : (
        <StudentPageRap>
    <div className='card' style={{backgroundColor: "white", fontFamily: 'Montserrat, sans-serif', fontSize: "16px"}}>
    <h2>Student List</h2>
    <div style={{textAlign: "start", margin: "25px"}}>
    <h5>Search for a student</h5>
        <div style={{alignItems: "start"}}  className='d-flex flex-column justify-content-start'>
            <div>
                <input className='pl-3' style={{border: "1px solid black", borderRadius: "10px", fontSize: "16px"}}
                type="text"
                placeholder="Search by name..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button onClick={handleSearch} style={{borderStyle: "none", marginLeft: "10px", borderRadius: "10px", fontSize: "16px"}}>
            <Icon icon="ic:baseline-search" width="35" height="35" /></button>
            </div>
            <div>
            <button onClick={handleReset} style={{border: "1px solid black", borderRadius: "5px",  backgroundColor: "#e5e5e5", fontSize: "15px"}}>Reset</button>
            </div>
        </div>
    </div>
        <TableRap>
        <div>
          <div className='table-div'>

          <table className="teacher-table">
              <thead>
              <tr>
                  <th>Surname</th>
                  <th>First Name</th>
                  <th>Gender</th>
                
                
                  <th>Class</th>
                  <th>Department</th>
            
                  <th>Admission Number</th>
                  <th>Guidian's Number</th>
                  <th>Action</th>
                  <th>Action</th>
                  <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {students.slice(0, visibleTeachers).map((student) => (
                  <tr key={students._id}>
                  <td>{student.surname}</td>
                  <td>{student.firstname}</td>
                  <td>{student.gender}</td>
              
                  <td>{student.class}</td>
                  <td>{student.department}</td>
                  <td>{student.admission}</td>
                  
                
                  <td>{student.guidiance}</td>
                  
                  <td><a style={{textDecoration: "none",color: "blue", fontWeight: "bold"}} onClick={() => handleViewDetails(student.surname, student.firstname)} href='/admin/studentdetails'>View </a></td>
                  <td><a style={{textDecoration: "none",color: "#6C244C", fontWeight: "bold"}} onClick={() => handleViewDetails(student.surname, student.firstname)} href='/admin/updateStudent'>Update</a></td>
                  <td>
                
                    <a style={{textDecoration: "none",color: "red", fontWeight: "bold"}} onClick={() => handleButtonClick(student.surname, student.firstname)} href='#'>
                      <a style={{textDecoration: "none",color: "red", fontWeight: "bold"}} onClick={() => handleButtonClick(student.surname, student.firstname)} href='#'>
                          Delete</a></a>
                
                    </td>
                  </tr>
              ))}
              </tbody>
          </table>
          </div>
        
        </div>
        </TableRap>
        <div>
        {visibleTeachers < students.length && (
            <button onClick={handleShowMore}>Show More</button>
        )}
         <label style={{fontSize: "16px", fontWeight: "bold", margin: "10px"}}>Show Rows:</label>
        <select style={{border: "1px solid black", borderRadius: '5px', fontSize: "15px", padding: "5px", margin: "10px"}} value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={students.length}>All</option>
        </select>
        </div>
    </div>
    </StudentPageRap>
      )
    }
    </>
  );
};

export default StudentList;
