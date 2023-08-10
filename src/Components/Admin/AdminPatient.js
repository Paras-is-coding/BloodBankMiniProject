import React from 'react'
import './AdminDonorPatient.css'

export default function AdminPatient() {
    // Example of a data array that
// you might receive from an API
const data = [
  { name: "Kritika", profile:"img", bloodGroup : "O+",age:"14",disease:"accident", address:"Aithpur", mobile:"34545345345" },
  { name: "kushal", profile:"img", bloodGroup : "A+",age:"23",disease:"unkushal", address:"Haldukhal", mobile:"98685044323" },
  { name: "Hiran", profile:"img", bloodGroup : "AB+",age:"24",disease:"typhoid", address:"Aithpur", mobile:"65643553455" }
  
]
  return (
    <>
    <div className='heading-2'><h2>PATIENT DETAILS</h2></div>
    <div className="donor-patient-table">    
      <table>
        <tr>
          <th>Name</th>
          <th>Profile</th>
          <th>Blood Group</th>
          <th>Age</th>
          <th>Disease</th>
          <th>Address</th>
          <th>Mobile</th>
          <th>Action</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.profile}</td>
              <td>{val.bloodGroup}</td>
              <td>{val.age}</td>
              <td>{val.disease}</td>
              <td>{val.address}</td>
              <td>{val.mobile}</td>
              <td>
                <div className="edit-button">EDIT</div>
                <div className="delete-button">DELETE</div>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
  )
}
