import React from 'react';
import { Link } from 'react-router-dom';

import './menu-bar.styles.scss';

const MenuBar = () => (
    <div className='menu-bar-wrap'>
        <div className='menu-bar'>
            <Link to='/calendar'><div>Calendar</div></Link>
            <div>Group list</div>
            <div>Settings</div>
        </div>
    </div>
    
    
);

export default MenuBar;