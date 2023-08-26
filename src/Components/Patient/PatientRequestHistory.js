import '../Admin/AdminDonorPatient.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function PatientRequestHistory() {
  const [allRecords, setAllRecords] = useState([]);

  const email = JSON.parse(sessionStorage.getItem("user_data")).email;

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.post('http://localhost/API/6getRequestRecord.php', { email });
        let responseData = JSON.parse(response.data.substring(response.data.indexOf('{')));
        let fetchedRecords = responseData.data;
        setAllRecords(fetchedRecords);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
  }, [email]);

  return (
    <>
      <div className='heading-2'><h2>My Request History</h2></div>
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
            </tr>
          </thead>
          <tbody>
            {allRecords.map((val, key) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}




