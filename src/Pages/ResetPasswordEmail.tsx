import React from 'react';
import Styles from './ResetPasswordEmail.module.css'
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function ResetPasswordEmail() {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/resetpasswordotp')
  }
  return (
    <div className={Styles.ResetPasswordEmail_con}>
      <div className={Styles.ResetEmail_card}>
        <span> Reset Password </span>
        <div>
          <label>Email</label><br/>
          <Input className={Styles.input_email_reset} style={{width:'20rem',margin:'5px 0px'}} placeholder="enter your registered email" />
        </div>

        <Button className={Styles.resetemail_btn} onClick={() => handleClick()}>SEND OTP</Button>
      </div>
    </div>
  )
}