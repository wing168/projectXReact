import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as selectors from '../../../redux/calendar/calendar.selectors';
import { setSelectedDates, setDateClickedOpenEvent } from '../../../redux/calendar/calendar.actions';

import EventIcon from './event-icon.component';

import './individual-days.styles.scss';


const IndividualDays = ({ d, year, month, monthsArr, isToday, selectedDates, eventData, setDateClickedOpenEvent, setShowEventsOnDate, mainCalendar, setSelectedDates }) => {

    const dateInput = new Date(year, month, d+1);

    const lookupField = `${monthsArr[month]}${d}${year}`;

    const handleClick = () => { 
        if (mainCalendar) {
            setDateClickedOpenEvent(`${d} ${monthsArr[month]} ${year}`);
        } 

        setSelectedDates(dateInput.toUTCString());
    }

    return (
        <div>
            <div 
                key={d} 
                className={`${isToday(d, year, month)  ? 'today ' : ''}days ${selectedDates.indexOf(dateInput.toUTCString()) > -1 ? 'selected' : ''}`}
                onClick={handleClick}
            >
                {d <= 0 ? '' : d}
            </div>
            <div className='events-wrap'>
                {eventData[lookupField] != null 
                ? 
                <EventIcon data={eventData[lookupField]} d={d} month={monthsArr[month]} year={year} setDateClickedOpenEvent={setDateClickedOpenEvent} /> 
                : null}
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    selectedDates: selectors.selectedDatesSelector,
    mainCalendar: selectors.mainCalendarSelector

});

const mapDispatchToProps = dispatch => ({
    setSelectedDates: date => dispatch(setSelectedDates(date)),
    setDateClickedOpenEvent: date => dispatch(setDateClickedOpenEvent(date))
});
    

export default connect(mapStateToProps, mapDispatchToProps)(IndividualDays);