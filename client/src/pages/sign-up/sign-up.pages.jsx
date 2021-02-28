import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../../components/sign-up/sign-up.components';


const SignUpPage = () => (
    <div>
        <h1>Create your account</h1>
        <SignUp />
        <p>Already have an account? <Link to='/'><strong>Sign in now!</strong></Link></p>

    </div>
);

export default SignUpPage;
