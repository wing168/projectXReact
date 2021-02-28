import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { dateClickedOpenEventSelector } from '../../redux/calendar/calendar.selectors';
import { userIDSelector } from '../../redux/sign-in/sign-in-selectors';

import EventsSubmission from '../../components/events-submission/events-submission.component';


import './add-event.styles.scss';


const AddEventPage = ({ dateClickedOpenEvent, history, userID }) => {
    const [{title, startTime, endTime, locationUse, invitee, notes}, setEvent] = useState({title:'', startTime: '', endTime: '', locationUse: '', invitee: '', notes: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEvent(prevState =>  ({ ...prevState, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const eventDate = new Date(`${dateClickedOpenEvent} ${startTime}:00`);

        const addEventReq = axios({
            url: 'events',
            method: 'post',
            data: {
                    userID: userID,
                    title: title, 
                    eventDate: eventDate,
                    startTime: startTime, 
                    endTime: endTime, 
                    locationUse: locationUse, 
                    invitee: invitee, 
                    notes: notes
            }
        });

        try {

            const addEventRes = await addEventReq;

            console.log(addEventRes.data.message);

        } catch (err) {
            console.log(err.response);
        }

        history.push('/calendar');
    };


    return (
    <div>
        <h1>Add Event Page</h1>
        <EventsSubmission handleSubmit={handleSubmit} handleChange={handleChange} title={title} dateClickedOpenEvent={dateClickedOpenEvent} startTime={startTime} 
        endTime={endTime} locationUse={locationUse} invitee={invitee} notes={notes} />
    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    dateClickedOpenEvent: dateClickedOpenEventSelector,
    userID: userIDSelector
});




export default withRouter(connect(mapStateToProps, null)(AddEventPage));