import './AdminDonorPatient.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AdminEditPatientDetails from './AdminEditPatientDetails';


export default function AdminPatient() {
  const [approvedAndRejectedRecords, setApprovedAndRejectedRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null); // Track selected record for editing


  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.post('http://localhost/API/6getRequestRecord.php');
        let responseData = JSON.parse(response.data.substring(response.data.indexOf('{')));
        let fetchedRecords = responseData.data.filter(record => record.status === "Approved" || record.status === "Rejected");
        setApprovedAndRejectedRecords(fetchedRecords);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
  }, []);

   // Function to handle deleting a record
   const handleDelete = async (id) => {
    try {
      const response = await axios.post('http://localhost/API/deleteDonorPatientRecord.php', { id, category: 'patient' });
      // Handle success or error
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };


  const handleEdit = (record) => {
    setSelectedRecord(record); // Set the selected record for editing {/* Render the AdminEditDetails component with selected record and category */}

  };

  if(selectedRecord){
    return(
      <AdminEditPatientDetails data={selectedRecord} category="patientr" />
    );
  }
  else{
  return (
    <>
      <div className='heading-2'><h2>Approved and Rejected Patient Details</h2></div>
      <div className="donor-patient-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Blood Group</th>
              <th>Unit</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Reason</th>
              <th>Request Date</th>
              <th>Status</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {approvedAndRejectedRecords.map((record, key) => (
              <tr key={key}>
                <td>{record.id}</td>
                <td>{record.patientname}</td>
                <td>{record.bloodgroup}</td>
                <td>{record.unit}</td>
                <td>{record.age}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.reason}</td>
                <td>{record.requestdate}</td>
                <td>{record.status}</td>
                <td>
                <div className="edit-button" onClick={() => handleEdit(record)}>EDIT</div>
                  <div className='delete-button' onClick={() => {if(window.confirm("Sure want to delete!")){handleDelete(record.id)}}}>DELETE</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
}