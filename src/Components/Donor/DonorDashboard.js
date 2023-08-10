import React from 'react'
import DonorSideNav from './DonorSideNav'
import { Routes,Route } from 'react-router-dom'
import DonorDonateBlood from './DonorDonateBlood'
import DonorDonationHistory from './DonorDonationHistory'
import DonorBloodRequest from './DonorBloodRequest'
import DonorRequestHistory from './DonorRequestHistory'
import DonorHome from './DonorHome'

export default function DonorDashboard() {
  return (
    <>
    <DonorSideNav/>
    <Routes>
        <Route path='/donor-dashboard' element={<DonorHome/>}></Route>
        <Route path='/donor-dashboard/donate-blood' element={<DonorDonateBlood/>}></Route>
        <Route path='/donor-dashboard/donation-history' element={<DonorDonationHistory/>}></Route>
        <Route path='/donor-dashboard/blood-request' element={<DonorBloodRequest/>}></Route>
        <Route path='/donor-dashboard/request-history' element={<DonorRequestHistory/>}></Route>
    </Routes>
    </>
  )
}
