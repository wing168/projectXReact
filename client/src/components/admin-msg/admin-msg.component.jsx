import React from 'react';

import './admin-msg.styles.scss';

const AdminMsg = ({ message }) => (
    <div className='admin-msg-wrap'>
        <p className='admin-msg'>{message}</p>
    </div>
);

export default AdminMsg;