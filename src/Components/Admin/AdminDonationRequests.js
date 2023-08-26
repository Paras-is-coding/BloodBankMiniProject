import React, { useState, useEffect } from 'react';
import '../Admin/AdminDonorPatient.css';
import axios from 'axios';

export default function DonorDonationHistory() {
  const [pendingRecords, setPendingRecords] = useState([]);

  useEffect(() => {
    fetchPendingRecords();
  }, []);

  const fetchPendingRecords = async () => {
    try {
      const response = await axios.post('http://localhost/API/5getDonationRecord.php');
      let responseData = JSON.parse(response.data.substring(response.data.indexOf('{')));
      let fetchedRecords = responseData.data.filter(record => record.status === "Pending");
      setPendingRecords(fetchedRecords);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };


  const handleActionClick = async (id, action,unit,bloodgroup) => {
    try {
      const response = await axios.post('http://localhost/API/5approveDeleteDonationRequestRecord.php', {
        id: id,
        action: action,
        unit: unit?unit:0,
        bloodgroup:bloodgroup?bloodgroup:''
      });
      //response contains some feedback message
      console.log(response.data);
      // Refetch the pending records after approving or deleting
      fetchPendingRecords();
    } catch (error) {
      console.error("Error performing action:", error);
    }
  };

  return (
    <>
      <div className='heading-2'><h2>Pending Donation History</h2></div>
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
            {pendingRecords.map((record, key) => (
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
                  <button
                    className="approve-button"
                    onClick={() => handleActionClick(record.id, 'approve',record.unit,record.bloodgroup)}
                  >
                    APPROVE
                  </button>
                  <button
                    className="reject-button"
                    onClick={() => handleActionClick(record.id, 'reject')}
                  >
                    REJECT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
