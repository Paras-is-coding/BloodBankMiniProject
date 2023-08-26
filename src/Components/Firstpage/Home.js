import React from 'react'
import donateblood from './images/donateblood.jpg'
import './Home.css'

import  { useState, useEffect } from 'react';
import '../Admin/AdminDonorPatient.css';
import axios from 'axios';

export default function Home() {
  const [approvedRecords, setApprovedRecords] = useState([]);

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
  return (
    <>
    {/* <div id='pd'>
        <img src={donateblood} alt="" />
    </div> */}
    <div id='rd'>
        <div>Instead of giving your blood to mosquitoes, give it to someone who needs it</div>
        <div>&nbsp; (&nbsp;Paras Chand&nbsp;) </div>
    </div>
    <div className='heading-2'><h2>People Who Donated Blood</h2></div>
    <div className='donor-patient-table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Donor Name</th>
              <th>Blood Group</th>
              <th>Unit</th>
              <th>Age</th>
              <th>Email</th>
              <th>Donation Date</th>
            </tr>
          </thead>
          <tbody>
            {approvedRecords.map((record, key) => (
              <tr key={key}>
                <td>{record.id}</td>
                <td>{record.donorname}</td>
                <td>{record.bloodgroup}</td>
                <td>{record.unit}</td>
                <td>{record.age}</td>
                <td>{record.email}</td>
                <td>{record.donationdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </>
  )
}
