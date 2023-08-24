import React, { useState, useEffect } from 'react';
import '../Admin/AdminDonorPatient.css';
import axios from 'axios';

export default function DonorDonationHistory() {
  const [allRecords, setAllRecords] = useState([]);

  const email = JSON.parse(sessionStorage.getItem("user_data")).email;

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.post('http://localhost/API/5getDonationRecord.php', { email });
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
      <div className='heading-2'><h2>My Donation History</h2></div>
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
            </tr>
          </thead>
          <tbody>
            {allRecords.map((record, key) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
