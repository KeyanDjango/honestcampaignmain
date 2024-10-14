import React from 'react';
import Styles from './ResetPasswordNew.module.css'
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';



export default function ResetPasswordNew() {
    
    return (
        <div className={Styles.ResetPasswordEmail_con}>
            <div className={Styles.ResetEmail_card}>
                <span> Reset Password </span>
                <div>
                    <label>New Password</label><br />
                    <Input className={Styles.input_email_reset} style={{ width: '20rem', margin: '5px 0px' }} placeholder="enter your new password" /><br />
                    <label>Confirm Password</label><br />
                    <Input className={Styles.input_email_reset} style={{ width: '20rem', margin: '5px 0px' }} placeholder="enter your new password" />
                </div>

                <Button className={Styles.resetemail_btn}>SUBMIT</Button>
            </div>
        </div>
    )
}