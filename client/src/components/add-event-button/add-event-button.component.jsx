import React from 'react';
import { withRouter } from 'react-router-dom'

import './add-event-button.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddEventButton = ({ history }) => {
    return (
        <div>
            <button className='add-event-button' onClick={()=> history.push('/add-event')}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
};

export default withRouter(AddEventButton);