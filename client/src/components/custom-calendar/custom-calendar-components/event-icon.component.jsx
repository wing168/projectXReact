import React from 'react';
import { connect } from 'react-redux';
import { setShowEventsOnDate } from '../../../redux/calendar/calendar.actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'


const EventIcon = ({ data, d, month, year, setDateClickedOpenEvent, setShowEventsOnDate }) => {

    
    
    return (
        <div onClick={() => {setDateClickedOpenEvent(`${d} ${month} ${year}`); setShowEventsOnDate(true); }}>
           {data.length > 0 ? <FontAwesomeIcon icon={faListAlt} /> : null}

        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setShowEventsOnDate: date => dispatch(setShowEventsOnDate(date))
})

export default connect(null, mapDispatchToProps)(EventIcon);