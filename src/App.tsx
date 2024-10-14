import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.tsx';
import SignUp from './Pages/SignUp.tsx';
import ResetPasswordEmail from './Pages/ResetPasswordEmail.tsx';
import ResetPasswordNew from './Pages/ResetPasswordNew.tsx';
import ResetPasswordOtp from './Pages/ResetPasswordOtp.tsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetemail" element={<ResetPasswordEmail/>} />
          <Route path="/resetnewpassword" element={<ResetPasswordNew/>} />
          <Route path="resetpasswordotp" element={<ResetPasswordOtp/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}