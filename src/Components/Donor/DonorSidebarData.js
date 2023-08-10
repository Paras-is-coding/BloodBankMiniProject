import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/donor-dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Donate Blood',
    path: '/donor-dashboard/donate-blood',
    icon: <BiIcons.BiDonateBlood/>,
    cName: 'nav-text'
  },
  {
    title: 'Donation History',
    path: '/donor-dashboard/donation-history',
    icon: <IoIcons.IoMdTime />,
    cName: 'nav-text'
  },
  {
    title: 'Blood Request',
    path: '/donor-dashboard/blood-request',
    icon: <IoIcons.IoIosHand />,
    cName: 'nav-text'
  },
  {
    title: 'Request History',
    path: '/donor-dashboard/request-history',
    icon: <IoIcons.IoMdTime />,
    cName: 'nav-text'
  } 
];