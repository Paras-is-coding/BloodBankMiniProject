import React, { useState, useEffect } from 'react';
import './AdminDonorPatient.css';
import axios from 'axios';
import AdminEditDonorDetails from './AdminEditDonorDetails';

export default function AdminDonations() {
  const [approvedRecords, setApprovedRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null); // Track selected record for editing

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost/API/5getDonationRecord.php');
        let responseData = JSON.parse(response.data.substring(response.data.indexOf('{')));
        let fetchedRecords = responseData.data.filter(record => record.status === "Approved");
        setApprovedRecords(fetchedRecords);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchData();
  }, []);

   // Function to handle deleting a record
   const handleDelete = async (id) => {
    try {
      const response = await axios.post('http://localhost/API/deleteDonorPatientRecord.php', { id, category: 'donor' });
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
      <AdminEditDonorDetails data={selectedRecord} category="donor" />
    );
  }
  else{
  return (
    <>
      <div className='heading-2'><h2>Approved DONOR DETAILS</h2></div>
      <div className="donor-patient-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Donor Name</th>
              <th>Blood Group</th>
              <th>Unit</th>
              <th>Disease</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Donation Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvedRecords.map((record, key) => (
              <tr key={key}>
                <td>{record.id}</td>
                <td>{record.donorname}</td>
                <td>{record.bloodgroup}</td>
                <td>{record.unit}</td>
                <td>{record.disease}</td>
                <td>{record.age}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.donationdate}</td>
                <td>{record.status}</td>
                <td>
              <div className="edit-button" onClick={() => handleEdit(record)}>EDIT</div>
              <div className='delete-button' onClick={() => { if (window.confirm("Sure want to delete!")) { handleDelete(record.id) } }}>DELETE</div>
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
