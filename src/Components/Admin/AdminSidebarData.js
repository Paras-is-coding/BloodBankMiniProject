import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/admin-dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Donor',
    path: '/admin-dashboard/donor',
    icon: <IoIcons.IoIosPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Patient',
    path: '/admin-dashboard/patient',
    icon: <IoIcons.IoIosPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Donations',
    path: '/admin-dashboard/donations',
    icon: <BiIcons.BiDonateBlood/>,
    cName: 'nav-text'
  },
  {
    title: 'Donation Requests',
    path: '/admin-dashboard/donation-requests',
    icon: <IoIcons.IoIosHand />,
    cName: 'nav-text'
  },
  {
    title: 'Blood Requests',
    path: '/admin-dashboard/blood-requests',
    icon: <IoIcons.IoMdTime />,
    cName: 'nav-text'
  }
];