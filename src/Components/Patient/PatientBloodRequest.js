import React from 'react'
// import DonorBloodRequest from '../Donor/DonorBloodRequest'
import '../Firstpage/Registerform.css'

export default function PatientBloodRequest() {
  let donatecolor ={
    backgroundColor:"rgb(219, 4, 4)"
  }
  return (
    <>
    {/* <DonorBloodRequest/> */}
    <div className='co-wrapper'>
    <div id='signup-wrapper'>
    <form name='signup' method='post' action=''>
    <h1 id='form-heading'>Request Blood</h1> <br/>
    Patientname : <input name='patientname' type='text' /><br/>
        Lastname : <input name='lastname' type='text' /><br/>
        Age : <input name='age' type='number' /><br/>
        Reason : <input name='reason' type='text' /><br/>
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
        <div id='signup-button'><input type='submit' name='donate' value='Request' style={donatecolor}/></div>
    </form>  
    </div>
    </div>
    </>
  )
}

