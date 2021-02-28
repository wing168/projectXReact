import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signInAsync } from '../../redux/sign-in/sign-in.actions'
import { createStructuredSelector } from 'reselect';
import { userAuthSelector } from '../../redux/sign-in/sign-in-selectors';
import { signInErrorMsgSelector } from '../../redux/admin-msgs/admin-msg.selectors';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ErrorMsg from '../error-msg/error-msg.component';




const SignIn = ({ signInErrorMsg, userAuthenticated, signInAsync }) => {
    const [{ email, password }, setCredentials] = useState({ email: '', password: '' });
  
    

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials(prevState => ({ ...prevState, [name]: value}));

    }


    const handleSubmit = e => {
        e.preventDefault();

        signInAsync({ email: email, password: password });

        setCredentials({ email: '', password: ''})

        
    }
    
    if (userAuthenticated) return <Redirect to={'/'} />

    return (
        <div>
            {signInErrorMsg ? <ErrorMsg message={signInErrorMsg} /> : null}
            <form className='form-input' onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} onChange={handleChange} label='Email' required />
                <FormInput name='password' type='password' value={password} onChange={handleChange} label='Password' required />
                <CustomButton type='submit'>Log In</CustomButton>
            </form>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    userAuthenticated: userAuthSelector,
    signInErrorMsg: signInErrorMsgSelector
})

const mapDispatchToProps = dispatch => ({
    signInAsync: userDetails => dispatch (signInAsync(userDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);