import React, { useState } from 'react';
import '../Firstpage/Registerform.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DonorBloodRequest() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    patientname: '',
    bloodgroup: '',
    unit: '',
    age: '',
    email: JSON.parse(sessionStorage.getItem("user_data")).email,
    phone: '',
    reason: '',
    requestdate: new Date().toISOString().split('T')[0], // Set today's date
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
    axios.post("http://localhost/API/6insertRequestRecord.php", inputs)
      .then(response => {
        console.log(response.data);
        navigate('/donor-dashboard');
      })
      .catch(error => {
        console.log(error);
        // Handle errors if necessary
      });
  };

  return (
    <>
      <div className='co-wrapper'>
        <div id='signup-wrapper'>
          <form name='signup' method='post' onSubmit={handleSubmit}>
            <h1 id='form-heading'>Request Blood</h1> <br/>
            <label htmlFor="patientname">Patient Name : </label>
            <input
              name='patientname'
              type='text'
              value={inputs.patientname}
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
              <option selected disabled value="">Choose your blood group</option>
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
              required
            /><br />
            Phone : <input
              name='phone'
              type='text'
              value={inputs.phone}
              onChange={handleInputChange}
            /><br />
            Reason : <input
              name='reason'
              type='text'
              value={inputs.reason}
              onChange={handleInputChange}
            /><br />
            Request Date : <input
              name='requestdate'
              type='date'
              value={inputs.requestdate}
              onChange={handleInputChange}
              required
            /><br />
            Status : <input
              name='status'
              type='text'
              value={inputs.status}
              readOnly
            /><br />

            <div id='signup-button'><input
              type='submit'
              name='request'
              value='Request'
              style={donatecolor}
            /></div>
          </form>
        </div>
      </div>
    </>
  )
}
