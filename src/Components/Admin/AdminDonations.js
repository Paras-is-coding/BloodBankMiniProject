import React from 'react'

export default function AdminDonations() {
      // Example of a data array that
// you might receive from an API
const data = [
  { name: "Bipasa", profile:"img", bloodGroup : "O+",age:"18",disease:"nothing", address:"Aithpur", mobile:"34545345345",unit:"4",requestdate:"Thursday, May 4, 2023",status:"accepted"},
  { name: "Paras", profile:"img", bloodGroup : "A-",age:"23",disease:"nothing", address:"Haldukhal", mobile:"98685044323" ,unit:"8",requestdate:"Monday, Jan 5, 2022",status:"rejected"},
  { name: "Hyaan", profile:"img", bloodGroup : "B+",age:"34",disease:"nothing", address:"Aithpur", mobile:"65643553455" ,unit:"3",requestdate:"Friday, April 9, 2022",status:"accepted"}
  
]
  return (
    <>
    <div className='heading-2'><h2>DONOR DETAILS</h2></div>
    <div className="donor-patient-table">    
      <table>
        <tr>
          <th>DonorName</th>
          <th>Disease</th>
          <th>Blood Group</th>
          <th>Age</th>
          <th>Unit</th>
          <th>DonationDate</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.disease}</td>
              <td>{val.bloodGroup}</td>
              <td>{val.age}</td>
              <td>{val.unit}</td>
                <td>{val.requestdate}</td>
              <td>{val.status}</td>
              <td>
                <div><span>{val.unit}</span>&nbsp;unit added to the stock</div>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
  )
}
