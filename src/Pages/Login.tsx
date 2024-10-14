import React, { useEffect } from 'react';
import Styles from './Login.module.css';
import '../App.css';
import logohonest from '../Icon/honest_icon.png'
import { Button, Input } from "antd";
import { Link } from 'react-router-dom';

export default function Login() {
    
    useEffect(() =>{
        document.title='Login';
    },[])

    return (
        <div className={Styles.login_parent_con}>
            <div className={Styles.login_card_con}>
                <img src={logohonest} alt='honesti campaign' />
                <h2  className={Styles.txtheader} style={{ fontFamily: 'arial', fontWeight: 'lighter', textAlign: 'center', margin: '1.3rem 0 0.6rem 0' }}>Login to Honesti Campaign</h2>
                <h5 style={{ fontFamily: 'arial', fontWeight: 'lighter', textAlign: 'center',marginBottom:'1rem' }}>Or <Link to='/signup' style={{textDecoration:'none',color:'#00A384',fontWeight:'lighter'}}> create new account </Link></h5>
                
                <form className={Styles.forminput}>
                    <label htmlFor='email_input' className={Styles.label_login}>Email</label>
                    <Input type='text' id='email_input' placeholder="example@company.com" />
                    <label htmlFor='password_input' className={Styles.label_login}>Password</label> <Link to="/resetemail" className={Styles.label_login} style={{float:'right',textDecoration:'none',color:'#00A384',fontWeight:'lighter'}}>Forget your password?</Link>
                    <Input type='password' id='password_input' placeholder="Password" />
                    <Button className={Styles.btnlogin}>Login</Button>
                </form>

            </div>
        </div>
    )
}