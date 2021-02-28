import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { dateClickedOpenEventSelector } from '../../../redux/calendar/calendar.selectors'

import EventsOnDate from '../custom-calendar-components/events-on-date.component';
import AddEventButton from '../../add-event-button/add-event-button.component';
import {lookUpFieldForData } from '../../../redux/calendar/calendar.utils'

const EventsOnDatePage = ({ eventData, dateClickedOpenEvent }) => {
    
    
    const dataForDate = eventData[lookUpFieldForData(dateClickedOpenEvent)];

    return (
        <div>
            <AddEventButton />
            <h3>{`Events for ${dateClickedOpenEvent}`}</h3>
            <div>
                {dataForDate && dataForDate.length > 0 ? dataForDate.map((event, index) => <EventsOnDate key={index} eventDate={event.eventDate} id={event.id} title={event.title} startTime={event.startTime} endTime={event.endTime} invitee={event.invitee} locationUse={event.locationUse} notes={event.notes} />) : <p>No events in diary</p>}
                
            </div>
            
        </div>
    ) 
};

const mapStateToProps = createStructuredSelector({
    dateClickedOpenEvent: dateClickedOpenEventSelector
});

export default connect(mapStateToProps, null)(EventsOnDatePage)