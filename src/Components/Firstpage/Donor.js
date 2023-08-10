import React from 'react'
import Loginform from './Loginform'
import { Link } from 'react-router-dom';

export default function Donor() {
  let htmlele = [<div>Do not have account? <Link to='/donorregister'>Click here to register.</Link></div>];
  return (
    <>
    <Loginform login="DONOR LOGIN" htmlele={htmlele} />  
    </>
  )
}
