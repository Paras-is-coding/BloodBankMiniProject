import React from 'react'
import './Registerform.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Registerform(props) {
  
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({categorie:props.categorie});
  
  function handleSubmit(event){
    event.preventDefault();
    axios.post("http://localhost/API/3insertRegistrationRecord.php",inputs).then(response=>{
      if(props.categorie == "patient"){
        navigate('/patientlogin');
      }
      else{
        navigate('/donorlogin');
      }
      console.log(response.data);
    });
  }

  function handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    setInputs({...inputs,[name]:value});
    console.log(inputs);
  }

  return (
    <>
     <div className='co-wrapper'>
    <div id='signup-wrapper'>
    <form name='signup' method='post' action='' onSubmit={handleSubmit}>
    <h1 id='form-heading'>{props.signup}</h1> <br/>
        Firstname : <input name='firstname' type='text' onChange={handleChange}/><br/>
        Lastname : <input name='lastname' type='text' onChange={handleChange}/><br/>
        Email : <input name='email' type='email' onChange={handleChange}/><br/>
        Password : <input name='password' type='password' onChange={handleChange}/><br/>
        Age : <input name='age' type='number' onChange={handleChange}/><br/>
        <label htmlFor="bloodgroup">Blood Group : </label>

<select name="bloodgroup" id="bloodgroup" onChange={handleChange}>
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

Disease : <input name='disease' type='text' onChange={handleChange}/><br/>
Categorie : <input name='categorie' type='text' defaultValue={props.categorie} />


        <div id='signup-button'><input type='submit' name='submit' value='Signup'/></div>
    </form>  
    </div>
    </div>
    </>
  )
}
