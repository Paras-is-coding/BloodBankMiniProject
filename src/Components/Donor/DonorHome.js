import React, { useEffect, useState } from 'react';
import '../Admin/AdminHome.css';
import * as IoIcons from 'react-icons/io';
import { TiTick } from 'react-icons/ti';
import { ImCancelCircle } from 'react-icons/im';
import axios from 'axios';

export default function DonorHome() {
  const [totalRecords, setTotalRecords] = useState(0);
  const [pendingRecords, setPendingRecords] = useState(0);
  const [approvedRecords, setApprovedRecords] = useState(0);
  const [rejectedRecords, setRejectedRecords] = useState(0);

  const email = JSON.parse(sessionStorage.getItem("user_data")).email;

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const responseDonation = await axios.post('http://localhost/API/5getDonationRecord.php', { email });
        const donationRecords = JSON.parse(responseDonation.data.substring(responseDonation.data.indexOf('{'))).data;

        const responseRequest = await axios.post('http://localhost/API/6getRequestRecord.php', { email });
        const requestRecords = JSON.parse(responseRequest.data.substring(responseRequest.data.indexOf('{'))).data;

        const allRecords = [...donationRecords, ...requestRecords];

        setTotalRecords(allRecords.length);
        setPendingRecords(allRecords.filter(record => record.status === 'Pending').length);
        setApprovedRecords(allRecords.filter(record => record.status === 'Approved').length);
        setRejectedRecords(allRecords.filter(record => record.status === 'Rejected').length);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
  }, [email]);

  return (
    <>
      <div className='bloodgroup-cards'>
        <div className="bloodgroup-card">
          <div className='one'>
            <IoIcons.IoIosHand />
          </div>
          <div className="two">
            <div className="heading">Request Made:</div>
            <div className="total">{totalRecords}</div>
          </div>
        </div>
        <div className="bloodgroup-card">
          <div className='one'>
            <IoIcons.IoIosHand />
          </div>
          <div className="two">
            <div className="heading">Pending Requests:</div>
            <div className="total">{pendingRecords}</div>
          </div>
        </div>
        <div className="bloodgroup-card">
          <div className='one'>
            <TiTick />
          </div>
          <div className="two">
            <div className="heading">Approved Requests:</div>
            <div className="total">{approvedRecords}</div>
          </div>
        </div>
        <div className="bloodgroup-card">
          <div className='one'>
            <ImCancelCircle />
          </div>
          <div className="two">
            <div className="heading">Rejected Requests:</div>
            <div className="total">{rejectedRecords}</div>
          </div>
        </div>
      </div>
    </>
  );
}
