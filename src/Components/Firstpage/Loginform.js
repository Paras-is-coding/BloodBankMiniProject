import React, { useState } from 'react';
import './Loginform.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { doLogin } from '../auth';

export default function Loginform(props) {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (inputs['email'] !== '' && inputs['password'] !== '') {

      if(props.loginAs === "donor" || props.loginAs === "patient" || props.loginAs === "admin"){
        setInputs({...inputs,loginAs:props.loginAs});
        let url = "";
        let navTo = "";
        if(props.loginAs === "admin"){
          url = "http://localhost/API/4adminLoginPage.php";
          navTo = '/admin-dashboard';
           
        }
        if(props.loginAs === "donor"){
          url = "http://localhost/API/4patientDonorLoginPage.php";
          navTo = '/donor-dashboard';
           
        }
        if(props.loginAs === "patient"){
          url = "http://localhost/API/4patientDonorLoginPage.php";
          navTo = '/patient-dashboard';
           
        }
        
        
        axios.post(url, inputs)
        .then(response => {
          console.log("Full response:", response.data);
          const responseData = JSON.parse(response.data.substring(response.data.indexOf('{'))); // Parse the JSON part of the response
          const result = responseData.data.result.trim(); // Remove extra whitespace
          const user_data = responseData.data.user_data;

          if (result !== "Invalid email or password!") {
            doLogin(user_data);//saved user data to session storage
            setError(result);
            navigate(navTo);        
          } else {
            setError('Invalid email or password!');
          }
        })
        .catch(error => {
          console.log("Error:", error);
        });
      }


      }
     else {
      setError("Both fields are compulsory!");
    }
  }

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  }

  return (
    <>
      <div className='co-wrapper'>
        <div id='login-wrapper'>
          <form name='login' method='post' action='' onSubmit={handleSubmit}>
            <h1 id='form-heading'>{props.login}</h1> <br />
            <div><span>{error}</span></div>
            Email : <input name='email' type='email' onChange={handleChange} /><br />
            Password : <input name='password' type='password' onChange={handleChange} /><br />
            <div id='login-button'><input type='submit' name='submit' value='Login' /></div>
            {props.htmlele}
          </form>
        </div>
      </div>
    </>
  )
}
