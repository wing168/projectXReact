import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { eventDataSelector, selectedDatesSelector } from '../../redux/calendar/calendar.selectors'

import MainCalendar from '../../components/custom-calendar/main-calendar.component'
import EventsOnDatePage from '../../components/custom-calendar/custom-calendar-pages/events-on-date.pages';

/* calendar */
const CalendarPage = ({ eventData, selectedDates }) => {

    return (
    <div>
        <h1>Calendar Page</h1>

        <MainCalendar eventData={eventData} />
        {selectedDates.length > 0 ? <EventsOnDatePage eventData={eventData} /> : null}
        
    </div>
)};

const mapStateToProps = createStructuredSelector({
    eventData: eventDataSelector,
    selectedDates: selectedDatesSelector
});


export default connect(mapStateToProps, null)(CalendarPage);

