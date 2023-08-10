import React from 'react';
import '../Admin/AdminHome.css';
import * as IoIcons from 'react-icons/io';
import {TiTick} from 'react-icons/ti'
import {ImCancelCircle} from 'react-icons/im'

export default function PatientHome() {

  let topborder ={
    border: 'none'
  }

  return (
    <>
    <div className='totals-cards' style={topborder}>
    <div className="totals-card">
    <div className='one'>
    <IoIcons.IoIosHand />
      </div>
      <div className="two">
        <div className="heading">Request Made.</div>
        <div className="total">3</div>
      </div>
    </div>
    <div className="totals-card">
    <div className='one'>
    <IoIcons.IoIosHand />
      </div>
      <div className="two">
        <div className="heading">Pending Requests.</div>
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
    <ImCancelCircle/>
      </div>
      <div className="two">
        <div className="heading">Rejected Requests.</div>
        <div className="total">3</div>
      </div>
    </div>
    </div>
    </>
  )
}
