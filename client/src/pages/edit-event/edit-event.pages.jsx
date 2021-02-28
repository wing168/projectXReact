import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { dateClickedOpenEventSelector } from '../../redux/calendar/calendar.selectors';

import EventsSubmission from '../../components/events-submission/events-submission.component';


const EditEventsPage = ({ dateClickedOpenEvent, history, location }) => {
    

    const editData = location.editData ? location.editData : history.push('/calendar');
    const id = editData.id;
    
    const [{title, startTime, endTime, locationUse, invitee, notes}, setEvent] = useState({title: editData.title, startTime: editData.startTime, endTime: editData.endTime, locationUse: editData.locationUse, invitee: editData.invitee, notes: editData.notes});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEvent(prevState =>  ({ ...prevState, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const editEventReq = axios({
            url: 'events',
            method: 'put',
            data: {
                id: id,
                title: title, 
                eventDate: editData.eventDate,
                startTime: startTime, 
                endTime: endTime, 
                locationUse: locationUse, 
                invitee: invitee, 
                notes: notes
            }
        })

        try {
            const editEventRes = await editEventReq;

            console.log(editEventRes);
           
        } catch (err) {
            console.log(err);
        }

        history.push('/calendar');
       
    };

    return (
        <div>
            <h3>Edit events page</h3>
           <EventsSubmission handleSubmit={handleSubmit} handleChange={handleChange} title={title} dateClickedOpenEvent={dateClickedOpenEvent} startTime={startTime} 
        endTime={endTime} locationUse={locationUse} invitee={invitee} notes={notes} /> 
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    dateClickedOpenEvent: dateClickedOpenEventSelector
});


export default withRouter(connect(mapStateToProps, null)(EditEventsPage));