import './AdminDonorPatient.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminBloodRequests() {
  const [pendingRecords, setPendingRecords] = useState([]);

  useEffect(() => {
    fetchPendingRecords();
  }, []);

  const fetchPendingRecords = async () => {
    try {
      const response = await axios.post('http://localhost/API/6getRequestRecord.php');
      let responseData = JSON.parse(response.data.substring(response.data.indexOf('{')));
      let fetchedRecords = responseData.data.filter(record => record.status === "Pending");
      setPendingRecords(fetchedRecords);
    } catch (error) {
      console.error("Error fetching pending records:", error);
    }
  };

  const handleApproveReject = async (id, action, bloodgroup, unit) => {
    try {
      let dataToSend = {
        id: id,
        action: action,
        bloodgroup: bloodgroup,
        unit: unit,
      };

      const response = await axios.post('http://localhost/API/6approveDeleteBloodRequestRecord.php', dataToSend);
      // Handle response here if needed
      console.log(response.data);
      fetchPendingRecords();
    } catch (error) {
      console.error("Error handling approval/rejection:", error);
    }
  };

  return (
    <>
      <div className='heading-2'><h2>Pending Request History</h2></div>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingRecords.map((val, key) => (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.patientname}</td>
                <td>{val.bloodgroup}</td>
                <td>{val.unit}</td>
                <td>{val.age}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.reason}</td>
                <td>{val.requestdate}</td>
                <td>{val.status}</td>
                <td>
                  <button
                    className="approve-button"
                    onClick={() => handleApproveReject(val.id, 'approve', val.bloodgroup, val.unit)}
                  >
                    APPROVE
                  </button>
                  <button
                    className="reject-button"
                    onClick={() => handleApproveReject(val.id, 'reject')}
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
