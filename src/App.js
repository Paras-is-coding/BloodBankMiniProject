import './App.css';
import DonorDashboard from './Components/Donor/DonorDashboard';
 import PatientDashboard from './Components/Patient/PatientDashboard';
 import AdminDashboard from './Components/Admin/AdminDashboard';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Firstpage/Main';

import AdminHome from './Components/Admin/AdminHome';
import AdminDonor from './Components/Admin/AdminDonor';
import AdminPatient from './Components/Admin/AdminPatient';
import AdminDonationRequests from './Components/Admin/AdminDonationRequests';
import AdminBloodRequests from './Components/Admin/AdminBloodRequests';
import AdminDonations from './Components/Admin/AdminDonations';
import AdminEditDetails from './Components/Admin/AdminEditDonorDetails';

import PatientHome from './Components/Patient/PatientHome';
import PatientBloodRequest from './Components/Patient/PatientBloodRequest';
import PatientRequestHistory from './Components/Patient/PatientRequestHistory';

import DonorHome from './Components/Donor/DonorHome';
import DonorDonateBlood from './Components/Donor/DonorDonateBlood';
import DonorDonationHistory from './Components/Donor/DonorDonationHistory';
import DonorBloodRequest from './Components/Donor/DonorBloodRequest';
import DonorRequestHistory from './Components/Donor/DonorRequestHistory';


export default function App() {
  return (
    <>
  
   <Routes>
    <Route path='/*' element={ <Main/>}></Route>
    <Route path='/admin-dashboard/*' element={<AdminDashboard/>}>
    <Route path='' element={<AdminHome/>}></Route>
        <Route path='donor' element={<AdminDonor/>}></Route>
        <Route path='patient' element={<AdminPatient/>}></Route>
        <Route path='donations' element={<AdminDonations/>}></Route>
        <Route path='donation-requests' element={<AdminDonationRequests/>}></Route>
        <Route path='blood-requests' element={<AdminBloodRequests/>}></Route>
        <Route path='edit-details' element={<AdminEditDetails/>}></Route>
    </Route>
    <Route path='/patient-dashboard/*' element={<PatientDashboard/>}>
    <Route path='' element={<PatientHome/>}></Route>
        <Route path='blood-request' element={<PatientBloodRequest/>}></Route>
        <Route path='request-history' element={<PatientRequestHistory/>}></Route>
    </Route>
    <Route path='/donor-dashboard/*' element={<DonorDashboard/>}>
    <Route path='' element={<DonorHome/>}></Route>
        <Route path='donate-blood' element={<DonorDonateBlood/>}></Route>
        <Route path='donation-history' element={<DonorDonationHistory/>}></Route>
        <Route path='blood-request' element={<DonorBloodRequest/>}></Route>
        <Route path='request-history' element={<DonorRequestHistory/>}></Route>
    </Route>
   </Routes> 
  
   
    </>
  );
}


