import React, { useState } from "react";
import { Button, Input } from "antd";
import Styles from './ResetPasswordOtp.module.css'
import { useNavigate } from "react-router-dom";

const OtpInput = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const navigate = useNavigate();
    function handleClick() {
        navigate('/resetnewpassword')
    }

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);


            if (value && index < otp.length - 1) {
                document.getElementById(`otp${index + 1}`).focus();
            }
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp${index - 1}`).focus();
        }
    };

    return (
        <div className={Styles.parent_otp_layout}>
            <div className={Styles.child_con_card}>
                <span style={{margin:'10px 0px 10px 0px'}}> Reset Password </span>
                <div style={{ display: "flex", gap: "10px" }}>
                    {otp.map((digit, index) => (
                        <Input className={Styles.input_otp}
                            key={index}
                            id={`otp${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleBackspace(e, index)}
                            style={{ width: "40px", fontSize: "20px", textAlign: "center" }}
                            autoComplete="off"
                            autoCorrect="off"
                        />
                    ))}                    
                </div>
                <span style={{color:'rgba(0,0,0,0.4)'}}>enter otp</span>
                <Button className={Styles.resetemail_btn}  onClick={handleClick}>SUBMIT</Button>
            </div>
        </div>
    );
};

export default OtpInput;
