import React from 'react'
import Loginform from './Loginform'
import { Link } from 'react-router-dom';

export default function Patient() {
  let htmlele = [<div>Do not have account? <Link to='/patientregister'>Click here to register.</Link></div>];
  return (
    <>
    <Loginform login="PATIENT LOGIN" htmlele={htmlele} loginAs="patient"/>   
    </>
  )
}
