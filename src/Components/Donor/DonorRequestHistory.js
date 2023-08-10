import React from 'react'
import '../Admin/AdminDonorPatient.css'


export default function DonorRequestHistory() {
      // Example of a data array that
// you might receive from an API
const data = [
  {name:"Rukmani", profile:"img", bloodGroup : "O+",age:"18",reason:"hand cut", address:"Aithpur", mobile:"34545345345",unit:"4",requestdate:"Thursday, May 4, 2023",status:"accepted"},
  {name:"Pusp",  profile:"img", bloodGroup : "A-",age:"23",reason:"nose cut", address:"Haldukhal", mobile:"98685044323" ,unit:"8",requestdate:"Monday, Jan 5, 2022",status:"rejected"},
  {name:"Nisha", profile:"img", bloodGroup : "B+",age:"34",reason:"foots cut", address:"Aithpur", mobile:"65643553455" ,unit:"3",requestdate:"Friday, April 9, 2022",status:"accepted"}
  
]
  return (
    <>
    <div className='heading-2'><h2>My Request History</h2></div>
    <div className="donor-patient-table">    
      <table>
        <tr>
          <th>PatientName</th>
          <th>Reason</th>
          <th>Blood Group</th>
          <th>Age</th>
          <th>Unit</th>
          <th>RequestDate</th>
          <th>Status</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.reason}</td>
              <td>{val.bloodGroup}</td>
              <td>{val.age}</td>
              <td>{val.unit}</td>
                <td>{val.requestdate}</td>
              <td>{val.status}</td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
    )
}



