import React from 'react';
import './AdminHome.css';
import {BsDroplet} from 'react-icons/bs'
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function AdminHome() {
  const [bloodStock,setBloodStock] = useState({});

  useEffect(()=>{

    const getBloodStock =async()=>{
      let response = await axios.post('http://localhost/API/7getBloodStockRecord.php');
      let responseData = JSON.parse(response.data.substring(response.data.indexOf('{')));
      console.log(responseData.data[0]);//check 
      setBloodStock(responseData.data[0]);
    };

    getBloodStock();
  },[]);

  
  return (
    <>

    <div className='bloodgroup-cards'>



    <div className="bloodgroup-card">
      <div className='one'>
        A+
      <BsDroplet/>
      </div>
      <div className='two'>
        {bloodStock[`A+`]}
      </div>
    </div>

    <div className="bloodgroup-card">
      <div className='one'>
        B+
      <BsDroplet/>
      </div>
      <div className='two'>
      {bloodStock[`B+`]}
      </div>
    </div>

    <div className="bloodgroup-card">
      <div className='one'>
        O+
      <BsDroplet/>
      </div>
      <div className='two'>
      {bloodStock[`O+`]}
      </div>
    </div>

    <div className="bloodgroup-card">
      <div className='one'>
        AB+
      <BsDroplet/>
      </div>
      <div className='two'>
      {bloodStock[`AB+`]}
      </div>
    </div>

    <div className="bloodgroup-card">
      <div className='one'>
        A-
      <BsDroplet/>
      </div>
      <div className='two'>
      {bloodStock[`A-`]}
      </div>
    </div>

    <div className="bloodgroup-card">
      <div className='one'>
        B-
      <BsDroplet/>
      </div>
      <div className='two'>
      {bloodStock[`B-`]}
      </div>
    </div>

    <div className="bloodgroup-card">
      <div className='one'>
        O-
      <BsDroplet/>
      </div>
      <div className='two'>
      {bloodStock[`O-`]}
      </div>
    </div>
    
    <div className="bloodgroup-card">
      <div className='one'>
        AB-
      <BsDroplet/>
      </div>
      <div className='two'>
      {bloodStock[`AB-`]}
      </div>
    </div>



    </div>
    </>
  )
}
