import React from 'react';

import './error-msg.styles.scss';

const ErrorMsg = ({ message }) => {
    return (
        <div className='errormsg-wrap'>
            <p className='errormsg'>{message}</p>
        </div>
    )
};

export default ErrorMsg;