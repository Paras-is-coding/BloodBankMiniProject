import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Admin from './Admin'
import Patient from './Patient'
import Donor from './Donor'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Donorregister from './Donorregister'
import Patientregister from './Patientregister'
import './Main.css'
export default function Main() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/adminlogin' element={<Admin/>}></Route>
      <Route path='/patientlogin' element={<Patient/>}></Route>
      <Route path='/donorlogin' element={<Donor/>}></Route>
      <Route path='/donorregister' element={<Donorregister/>}></Route>
      <Route path='/patientregister' element={<Patientregister/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}
