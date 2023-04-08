import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Input from '../components/LoginSignup/input';
import Button from '../components/LoginSignup/button';

function Login() {
    return (
        <div className='LoginDiv'>
            <h1 className='titleLogin'>Login</h1>
            <Input placeholder='Enter username' />
            <Input placeholder='Enter password' />
            <Button text='Login' />
            <div className='accInfo'>
                <p>Don't have an account?</p>
                <Link to="/SignUp">Sign Up</Link>
            </div>
        </div>
    )
}

export default Login;