import React from 'react'
import './Registerform.css'

export default function Registerform(props) {
  return (
    <>
     <div className='co-wrapper'>
    <div id='signup-wrapper'>
    <form name='signup' method='post' action=''>
    <h1 id='form-heading'>{props.signup}</h1> <br/>
        Firstname : <input name='firstname' type='text' /><br/>
        Lastname : <input name='lastname' type='text' /><br/>
        Username : <input name='username' type='text' /><br/>
        Password : <input name='password' type='password' /><br/>
        Age : <input name='age' type='number' /><br/>
        Email : <input name='email' type='email' /><br/>
        <label htmlFor="bloodgroup">Blood Group : </label>

<select name="bloodgroup" id="bloodgroup">
  <option value="Choose one option" disabled>Choose your blood group </option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  
</select>
 Disease : <input name='disease' type='text' /><br/>
Doctors name : <input name='doctorsname' type='text' /><br/>
Doctors name : <input name='doctorsname' type='text' /><br/>
Doctors name : <input name='mobile' type='number' /><br/> 

        <div id='signup-button'><input type='submit' name='submit' value='Signup'/></div>
    </form>  
    </div>
    </div>
    </>
  )
}
