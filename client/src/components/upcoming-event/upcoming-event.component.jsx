import React from 'react';

const UpcomingEvent = ({ eventDate, startTime, endTime, locationUse, invitee, title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h6>{startTime}</h6>
            <h6>{endTime}</h6>
            <h6>{locationUse}</h6>
            <h6>{invitee}</h6>
        </div>
    );
};

export default UpcomingEvent;