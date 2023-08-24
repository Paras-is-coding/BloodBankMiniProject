import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'; // Import Navigate

import PatientSideNav from './PatientSideNav';
import { isLoggedIn } from '../auth';

export default function PatientDashboard() {
  let allow = isLoggedIn();

  if (allow) {
    return (
      <>
        <PatientSideNav />
        <Outlet />
      </>
    );
  } else {
    // Redirect to the homepage using the Navigate component
    return <Navigate to="/" />;
  }
}
