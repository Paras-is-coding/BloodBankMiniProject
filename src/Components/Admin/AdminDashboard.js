import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'; // Import Navigate

import AdminSideNav from './AdminSideNav';
import { isLoggedIn } from '../auth';

export default function AdminDashboard() {
  let allow = isLoggedIn();

  if (allow) {
    return (
      <>
        <AdminSideNav />
        <Outlet />
      </>
    );
  } else {
    // Redirect to the homepage using the Navigate component
    return <Navigate to="/" />;
  }
}
