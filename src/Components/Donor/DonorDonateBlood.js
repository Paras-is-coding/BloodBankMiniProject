import React from 'react'
import '../Firstpage/Registerform.css'

export default function DonorDonateBlood() {
  let donatecolor ={
    backgroundColor:"rgb(219, 4, 4)"
  }
  return (
    <>
     <div className='co-wrapper'>
    <div id='signup-wrapper'>
    <form name='signup' method='post' action=''>
    <h1 id='form-heading'>Donate Blood</h1> <br/>
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
  
</select><br></br>
 Unit : <input name='age' type='number' placeholder='In ( ml )' /><br/>
  Disease : <input name='disease' type='text' placeholder='if any?' /><br/>
  Age : <input name='age' type='number' /><br/>

        <div id='signup-button'><input type='submit' name='donate' value='Donate' style={donatecolor}/></div>
    </form>  
    </div>
    </div>
    </>
  )
}
