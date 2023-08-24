
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './PatientSidebarData';
import '../Admin/AdminSideNav.css';
import { IconContext } from 'react-icons';
import {FiLogOut} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { doLogout } from '../auth';


export default function PatientSideNav() {

  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let lstyle = {
    cursor:'pointer',
    textDecoration : 'none',
    color : 'white'
}

 // Function to handle logout
 const handleLogout = () => {
  doLogout(); // Add your logout logic here (e.g., clear tokens, etc.)
  navigate('/'); // Then navigate to the logout route
};

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
            <span onClick={handleLogout} style={lstyle}>
              Logout
            </span>
            <FiLogOut />
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
