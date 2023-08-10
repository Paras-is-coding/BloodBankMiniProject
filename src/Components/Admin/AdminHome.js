import React from 'react';
import './AdminHome.css';
import {BsDroplet,BsPeopleFill} from 'react-icons/bs'
import {TbCircleDotted} from 'react-icons/tb'
import {TiTick} from 'react-icons/ti'
export default function AdminHome() {
  return (
    <>

    <div className='bloodgroup-cards'>
    <div className="bloodgroup-card">
      <div className='one'>
        A+
      <BsDroplet/>
      </div>
      <div className='two'>
        1
      </div>
    </div>
    <div className="bloodgroup-card">
      <div className='one'>
        B+
      <BsDroplet/>
      </div>
      <div className='two'>
        1
      </div>
    </div>
    <div className="bloodgroup-card">
      <div className='one'>
        O+
      <BsDroplet/>
      </div>
      <div className='two'>
        1
      </div>
    </div>
    <div className="bloodgroup-card">
      <div className='one'>
        AB+
      <BsDroplet/>
      </div>
      <div className='two'>
        1
      </div>
    </div>
    <div className="bloodgroup-card">
      <div className='one'>
        A-
      <BsDroplet/>
      </div>
      <div className='two'>
        1
      </div>
    </div>
    <div className="bloodgroup-card">
      <div className='one'>
        B-
      <BsDroplet/>
      </div>
      <div className='two'>
        1
      </div>
    </div>
    <div className="bloodgroup-card">
      <div className='one'>
        O-
      <BsDroplet/>
      </div>
      <div className='two'>
        1
      </div>
    </div>
    <div className="bloodgroup-card">
      <div className='one'>
        AB-
      <BsDroplet/>
      </div>
      <div className='two'>
        1
      </div>
    </div>
    </div>


    <div className='totals-cards'>
    <div className="totals-card">
    <div className='one'>
      <BsPeopleFill/>
      </div>
      <div className="two">
        <div className="heading">Total Donors.</div>
        <div className="total">3</div>
      </div>
    </div>
    <div className="totals-card">
    <div className='one'>
      <TbCircleDotted/>
      </div>
      <div className="two">
        <div className="heading">Total Requests.</div>
        <div className="total">3</div>
      </div>
    </div>
    <div className="totals-card">
    <div className='one'>
      <TiTick/>
      </div>
      <div className="two">
        <div className="heading">Approved Requests.</div>
        <div className="total">3</div>
      </div>
    </div>
    <div className="totals-card">
    <div className='one'>
    <BsDroplet/>
      </div>
      <div className="two">
        <div className="heading">Total Blood Unit in ml.</div>
        <div className="total">3</div>
      </div>
    </div>
    </div>

    </>
  )
}
