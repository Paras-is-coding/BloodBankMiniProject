import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PatientSideNav from './PatientSideNav'
import PatientHome from './PatientHome'
import PatientBloodRequest from './PatientBloodRequest'
import PatientRequestHistory from './PatientRequestHistory'

export default function PatientDashboard() {
  return (
    <>
    <PatientSideNav/>
    <Routes>
        <Route path='patient-dashboard' element={<PatientHome/>}></Route>
        <Route path='patient-dashboard/blood-request' element={<PatientBloodRequest/>}></Route>
        <Route path='patient-dashboard/request-history' element={<PatientRequestHistory/>}></Route>
    </Routes>
    </>
  )
}
