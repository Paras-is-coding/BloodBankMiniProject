import React from 'react'
import donateblood from './images/donateblood.jpg'
import './Home.css'

export default function Home() {
  return (
    <>
    <div id='pd'>
        <img src={donateblood} alt="" />
    </div>
    <div id='rd'>
        <div>Instead of giving your blood to mosquitoes, give it to someone who needs it</div>
        <div>&nbsp; (&nbsp;Paras Chand&nbsp;) </div>
    </div>
    </>
  )
}
