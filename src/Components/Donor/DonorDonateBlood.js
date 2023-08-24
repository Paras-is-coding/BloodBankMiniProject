import React, { useState } from 'react';
import '../Firstpage/Registerform.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DonorDonateBlood() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    donorname: '',
    bloodgroup: '',
    unit: '',
    disease: '',
    age: '',
    email:JSON.parse(sessionStorage.getItem("user_data")).email,
    phone:'',
    donationdate: new Date().toISOString().split('T')[0], // Set today's date
    status: 'Pending'
    
  });

  const donatecolor = {
    backgroundColor: "rgb(219, 4, 4)"
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Now you can use the 'inputs' object to submit the form data
    axios.post("http://localhost/API/5insertDonationRecord.php",inputs).then(response=>{
      console.log(response.data);
        navigate('/donor-dashboard');
    }).catch(error=>{
      console.log(error);
    })
    ;
  };

  return (
    <>
      <div className='co-wrapper'>
        <div id='signup-wrapper'>

          <form name='signup' method='post' onSubmit={handleSubmit}>
            <h1 id='form-heading'>Donate Blood</h1> <br />
            <label htmlFor="donorname">Donor Name : </label>
            <input
              name='donorname'
              type='text'
              value={inputs.donorname}
              onChange={handleInputChange}
              required
            /><br />
            <label htmlFor="bloodgroup">Blood Group : </label>
            <select
              name="bloodgroup"
              id="bloodgroup"
              value={inputs.bloodgroup}
              onChange={handleInputChange}
              required
            >
              <option selelcted value="" disabled>Choose your blood group </option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option> 
            </select><br />
            Unit : <input
              name='unit'
              type='number'
              placeholder='In ( ml )'
              value={inputs.unit}
              onChange={handleInputChange}
              required
            /><br />
            Disease : <input
              name='disease'
              type='text'
              placeholder='if any?'
              value={inputs.disease}
              onChange={handleInputChange}
            /><br />
            Age : <input
              name='age'
              type='number'
              value={inputs.age}
              onChange={handleInputChange}
              required
            /><br />
             Email : <input
              name='email'
              type='email'
              value={inputs.email}
              onChange={handleInputChange}
              readOnly
              /><br />

              Phone : <input
              name='phone'
              type='text'
              value={inputs.phone}
              onChange={handleInputChange}
              /><br />
            Donation Date : <input
              name='donationdate'
              type='date'
              value={inputs.donationdate}
              onChange={handleInputChange}
            /><br />
            Status : <input
              name='status'
              type='text'
              value={inputs.status}
              onChange={handleInputChange}
              readOnly
            /><br />

            <div id='signup-button'><input
              type='submit'
              name='donate'
              value='Donate'
              style={donatecolor}
            /></div>
          </form>
        </div>
      </div>
    </>
  )
}
