import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'; // Import Navigate

import DonorSideNav from './DonorSideNav';
import { isLoggedIn } from '../auth';

export default function DonorDashboard() {
  let allow = isLoggedIn();

  if (allow) {
    return (
      <>
        <DonorSideNav />
        <Outlet />
      </>
    );
  } else {
    // Redirect to the homepage using the Navigate component
    return <Navigate to="/" />;
  }
}
