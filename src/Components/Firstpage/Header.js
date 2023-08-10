import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import heart from './icons/heart.svg'

let lstyle = {
    textDecoration : 'none',
    color : 'white'
}



export default function Header() {
  return (
    <>
    <div id='navbar'>
        <div id='left'>
            <div className='iicon'><img src={heart} alt="" /></div>
        <span>Blood Bank Management</span>
        </div>
        <div id='right'>
            <ul>
                <li><Link to='/' style={lstyle}>Home</Link></li>
                <li><Link to='/patientlogin' style={lstyle}>Patient</Link></li>
                <li><Link to='donorlogin' style={lstyle}>Donor</Link></li>
                <li><Link to='adminlogin' style={lstyle}>Admin</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}
