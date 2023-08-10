import React from 'react'
import './AdminDonorPatient.css'

export default function AdminDonor() {
    // Example of a data array that
// you might receive from an API
const data = [
  { name: "Bipasa", profile:"img", bloodGroup : "O+",age:"18",disease:"nothing", address:"Aithpur", mobile:"34545345345" },
  { name: "Paras", profile:"img", bloodGroup : "A-",age:"23",disease:"nothing", address:"Haldukhal", mobile:"98685044323" },
  { name: "Hyaan", profile:"img", bloodGroup : "B+",age:"34",disease:"nothing", address:"Aithpur", mobile:"65643553455" }
  
]
  return (
    <>
    <div className='heading-2'><h2>DONOR DETAILS</h2></div>
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
