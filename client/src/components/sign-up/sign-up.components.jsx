import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ErrorMsg from '../error-msg/error-msg.component';
import AdminMsg from '../admin-msg/admin-msg.component';

import axios from 'axios';

const SignUp = ({ history }) => {
    const [{ firstName, lastName, email, password, confirmPW }, setCredentials] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPW: '' });
    
    const [errorMsg, setError] = useState(null);
    const [adminMsg, setAdminMsg] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials(prevState => ({ ...prevState, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        //check that the password is confirmed

        if (password !== confirmPW) {
            setCredentials ({firstName: firstName, lastName: lastName, email: email, password: '', confirmPW: ''});
            return setError('Password does not match - please try again');

        }

        const registerSubmission = axios({
            url: 'signup',
            method: 'post',
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
        });

        try {
            const registerRes = await registerSubmission;

            setAdminMsg(registerRes.data.message);
            setCredentials({firstName: '', lastName: '', email: '', password: '', confirmPW: ''});

            setError(null);
            setTimeout(() => history.push('/'), 2500);
         
        } catch (err){

            setError(err.response.data.message);
            setCredentials({firstName: firstName, lastName: lastName, email: '', password: '', confirmPW: ''});
        }

        

        
    }

    return (
        <div>
            {errorMsg ? <ErrorMsg message={errorMsg} /> : null}
            {adminMsg ? <AdminMsg message ={adminMsg} /> : null}
            <form onSubmit={handleSubmit}>
                <FormInput name='firstName' type='text' value={firstName} onChange={handleChange} label='First Name' required />
                <FormInput name='lastName' type='text' value={lastName} onChange={handleChange} label='Surname' required />
                <FormInput name='email' type='email' value={email} onChange={handleChange} label='Email' required />
                <FormInput name='password' type='password' value={password} onChange={handleChange} label='Password' required />
                <FormInput name='confirmPW' type='password' value={confirmPW} onChange={handleChange} label='Confirm Password' required />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>

        </div>
    )
};

export default withRouter(SignUp);