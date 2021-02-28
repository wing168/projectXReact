import React from 'react';
import { Link } from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInPage = () => {


    return (
        <div>
            <h1>Welcome</h1>
            <h3>Sign in to continue</h3>
            <SignIn />
            <p>Don't have an account? <Link to='/sign-up'><strong>Sign Up Now</strong></Link></p>
            <p>Forgot your password?</p>

        </div>
    );
};

export default SignInPage;