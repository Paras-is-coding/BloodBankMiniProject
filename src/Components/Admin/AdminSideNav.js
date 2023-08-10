// import React from 'react'
// import './AdminSideNav.css'

// export default function AdminSideNav() {
//   return (
//     <>
//     <ul className='side-nav-list'>
//         <li>Home</li>
//         <li>Donor</li>
//         <li>Patient</li>
//         <li>Donations</li>
//         <li>Blood Request</li>
//         <li>Request History</li>
//         <li>Blood Stock</li>
//     </ul>
//     </>
//   )
// }
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './AdminSidebarData';
import './AdminSideNav.css';
import { IconContext } from 'react-icons';
import {FiLogOut} from 'react-icons/fi'

export default function AdminSideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let lstyle = {
    textDecoration : 'none',
    color : 'white'
}

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div id='left'>
        <span>Blood Bank Management</span>
        </div>
        <div id='right'>        
            <span><Link to='/' style={lstyle}>Logout</Link></span>
            <FiLogOut/>
        </div>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
