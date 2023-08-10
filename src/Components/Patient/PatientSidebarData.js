import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/patient-dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Blood Request',
    path: '/patient-dashboard/blood-request',
    icon: <IoIcons.IoIosHand />,
    cName: 'nav-text'
  },
  {
    title: 'Request History',
    path: '/patient-dashboard/request-history',
    icon: <IoIcons.IoMdTime />,
    cName: 'nav-text'
  } 
];