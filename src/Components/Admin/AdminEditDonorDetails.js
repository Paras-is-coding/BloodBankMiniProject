import React, { useState } from 'react';
import axios from 'axios';
import './AdminEditDetails.css'

export default function AdminEditDonorDetails({ data, category }) {
  const [editedData, setEditedData] = useState({ ...data }); // Initialize with data prop
  const [isEditing, setIsEditing] = useState(false);

  const handleFieldChange = (field, value) => {
    setEditedData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost/API/8updateDonationRecord.php', editedData); 
      // Handle success or error
      console.log(response.data);
      setIsEditing(false); // Exit editing mode
    } catch (error) {
      console.error("Error updating record:", error);
      // Handle error if needed
    }
  };

  return (  

<div className="edit-form-container">
<h3>Edit {category} Details</h3>
<form>
<label>ID: {data.id}</label><br />

{/* Render other editable fields */}
<label>Donor Name:</label>
{isEditing ? (
  <input
    type="text"
    value={editedData.donorname}
    onChange={(e) => handleFieldChange('donorname', e.target.value)}
  />
) : (
  <span>{editedData.donorname}</span>
)}
<br />
<label>Blood Group:</label>
{isEditing ? (
  <input
    type="text"
    value={editedData.bloodgroup}
    onChange={(e) => handleFieldChange('bloodgroup', e.target.value)}
  />
) : (
  <span>{editedData.bloodgroup}</span>
)}
<br />
<label>Unit:</label>
{isEditing ? (
  <input
    type="number"
    value={editedData.unit}
    onChange={(e) => handleFieldChange('unit', e.target.value)}
  />
) : (
  <span>{editedData.unit}</span>
)}
<br />
<label>Disease</label>
{isEditing ? (
  <input
    type="text"
    value={editedData.disease}
    onChange={(e) => handleFieldChange('donorname', e.target.value)}
  />
) : (
  <span>{editedData.disease}</span>
)}
<br />
<label>Donor Age:</label>
{isEditing ? (
  <input
    type="number"
    value={editedData.age}
    onChange={(e) => handleFieldChange('age', e.target.value)}
  />
) : (
  <span>{editedData.age}</span>
)}
<br />
<label>Phone:</label>
{isEditing ? (
  <input
    type="text"
    value={editedData.phone}
    onChange={(e) => handleFieldChange('phone', e.target.value)}
  />
) : (
  <span>{editedData.phone}</span>
)}
<br />
<label>Donation Date:</label>
{isEditing ? (
  <input
    type="date"
    value={editedData.donationdate}
    onChange={(e) => handleFieldChange('donationdate', e.target.value)}
  />
) : (
  <span>{editedData.donationdate}</span>
)}
<br />
<label>Status:</label>
{isEditing ? (
  <input
    type="text"
    value={editedData.status}
    onChange={(e) => handleFieldChange('status', e.target.value)}
  />
) : (
  <span>{editedData.status}</span>
)}
<br />

  {/* Editing controls */}
  <div className="edit-controls">
    {isEditing ? (
      <>
        <button className="save-button" type="button" onClick={handleSubmit}>Save</button>
        <button className="cancel-button" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
      </>
    ) : (
      <button className="edit-button" type="button" onClick={() => setIsEditing(true)}>Edit</button>
    )}
  </div>
</form>
</div>
  );
}





