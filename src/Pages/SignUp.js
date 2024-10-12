import React, { useEffect } from 'react';
import Styles from './SignUp.module.css';
import logotop from '../Icon/honest_icon.png'
import { Button, Input } from 'antd';
import { FaPlay } from "react-icons/fa6";

export default function SignUp() {

    useEffect(() => {
        document.title = 'Register';
    }, [])

    return (
        <div className={Styles.signup_parent_con}>
            <div className={Styles.signup_card_con}>
                <img src={logotop} />
                <h2 style={{ fontWeight: 'lighter', margin: '1rem 0 1rem 0' }}>Create an account</h2>
                
                <form>

                    <div style={{display:'flex',columnGap:10}}>

                        <span>
                            <label htmlFor='fullname'>Full name</label>
                            <Input type='text' id='fullname' placeholder='Enter your full name. E.g.,Bruce' className={Styles.input_text_signup} autoComplete='nope' autoCapitalize='off' autoCorrect='off'/>
                        </span>
                        <span>
                            <label htmlFor='companyname'> Company name</label>
                            <Input text='text' id='companyname' placeholder='Enter your Company name. E.g.,'  className={Styles.input_text_signup} autoComplete='nope' autoCapitalize='off' autoCorrect='off' />
                        </span>
                    </div>
                    <label htmlFor='work_email'>Work email</label>
                    <Input text='text' id='work_email' placeholder='Enter your work email address. E.g.,bruce@wayne.enterprices'  className={Styles.input_text_signup} autoComplete='nope' autoCapitalize='off' autoCorrect='off' />

                    <label htmlFor='sign_password'>Password</label>
                    <Input text='text' placeholder='Password' id='sign_password'  className={Styles.input_text_signup} autoComplete='nope' autoCapitalize='off' autoCorrect='off' />

                    <Button type='primary' className={Styles.signupbtn}> Create account <FaPlay /> </Button>
                    <span style={{margin:'20px 0 6px 0',display:'block',fontSize:'0.8rem',opacity:'0.7'}}>By creating an account,you agree to our T & C and Privacy policy</span>
                    <span style={{display:'block',fontSize:'0.8rem',opacity:'0.7'}}>Already have an account? <span style={{color:'#00A384',fontWeight:500}}> Login to Honesti CRM </span></span>
                </form>
            </div>
        </div>
    )
}