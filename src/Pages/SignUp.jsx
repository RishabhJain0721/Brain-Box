import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Signup.css';
import Input from '../components/LoginSignup/input';
import Button from '../components/LoginSignup/button';

function SignUp() {
    return (
        <div className='SignupDiv'>
            <h1 className='titleSignup'>Sign Up</h1>
            <Input placeholder='Enter username' />
            <Input placeholder='Enter email' />
            <Input placeholder='Enter password' />
            <Button text='Sign Up' />
            <div className='accInfo'>
                <p>Already have an account?</p>
                <Link to="/Login">Login</Link>
            </div>
        </div>
    )
}

export default SignUp;