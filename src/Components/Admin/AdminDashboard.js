import React from 'react'
import AdminSideNav from './AdminSideNav'
import { Routes,Route } from 'react-router-dom'
import AdminHome from './AdminHome'
import AdminDonor from './AdminDonor'
import AdminPatient from './AdminPatient'
import AdminBloodRequest from './AdminBloodRequest'
import AdminRequestHistory from './AdminRequestHistory'
import AdminDonations from './AdminDonations'
import AdminBloodStock from './AdminBloodStock'

export default function AdminDashboard() {
  return (
    <>
    <AdminSideNav/>
    <Routes>
        <Route path='/admin-dashboard' element={<AdminHome/>}></Route>
        <Route path='/admin-dashboard/donor' element={<AdminDonor/>}></Route>
        <Route path='/admin-dashboard/patient' element={<AdminPatient/>}></Route>
        <Route path='/admin-dashboard/donations' element={<AdminDonations/>}></Route>
        <Route path='/admin-dashboard/blood-request' element={<AdminBloodRequest/>}></Route>
        <Route path='/admin-dashboard/request-history' element={<AdminRequestHistory/>}></Route>
        <Route path='/admin-dashboard/request-history' element={<AdminRequestHistory/>}></Route>
        <Route path='/admin-dashboard/blood-stock' element={<AdminBloodStock/>}></Route>
    </Routes>
    </>
  )
}
