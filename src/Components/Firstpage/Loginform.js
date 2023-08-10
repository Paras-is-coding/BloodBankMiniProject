import React, { Fragment } from 'react'
import './Loginform.css'


export default function Loginform(props) {
    
  return (
    <>
    <div className='co-wrapper'>
    <div id='login-wrapper'>
    <form name='login' method='post' action=''>
    <h1 id='form-heading'>{props.login}</h1> <br/>
        Username : <input name='username' type='text' /><br/>
        Password : <input name='password' type='password' /><br/>
        <div id='login-button'><input type='submit' name='submit' value='Login'/></div>
        {props.htmlele}
    </form>  
    </div>
    </div>
    </>
  )
}
