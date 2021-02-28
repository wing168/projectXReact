import React, { useState } from 'react';
import IndividualDays from './custom-calendar-components/individual-days.component';
import EventsOnDatePage from './custom-calendar-pages/events-on-date.pages';

import './add-event-calendar.styles.scss';


const AddEventsCalendar = () => {

    const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysLeapYearArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysOfWeekArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDate = today.getDate();

    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    const [selectedDates, setSelectedDates] = useState([]);
    const [showEventsOnDate, setShowEventsOnDate] = useState(false);
    const [dateClickedOpenEvent, setDateClickedOpenEvent] = useState(null);

    const chkLeapYr = ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0 ) ? true : false);
    const daysToUse = chkLeapYr ? daysLeapYearArr : daysArr;

    let testData = {May192020: [{title: 'title of meet', time: 'time of meet', people: 'meeting who', notes: 'notes to add'}, {title: 'title of meet2', time: 'time of meet2', people: 'meeting who2', notes: 'notes to add2'}], May212020: [{title: 'title of meet', time: 'time of meet', people: 'meeting who', notes: 'notes to add'}],};


    const addRemoveDatesToState = (date) => {
        const indexOfDate = selectedDates.indexOf(date);
        let dates = [...selectedDates]

        if (indexOfDate !== -1) {
            
            dates.splice(indexOfDate, 1);
            setSelectedDates(dates)
        } else {
            setSelectedDates([...selectedDates, date]);
        }
    }

    const incMonthFunc = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    } 

    const decreaseMonthFunc = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    } 

    const isToday = (date, yr, mth) => {
        if (currentDate === date && currentYear === yr && currentMonth === mth) {
            return true;
        }
        return false;
    }

    let startDayOfMonth = new Date(year, month, 1).getDay();

    
    return (
        
        <div className='daysofweek-wrap'>
            <div className='month-year'>
                <div onClick={decreaseMonthFunc}>back</div>
                <div>{monthsArr[month]} {year}</div>
                <div onClick={incMonthFunc}>next</div>
            </div>
            <div className='days-wrap'>
                <div className="days-header">
                    {daysOfWeekArr.map(days => (
                        <div key={days} className='daysofweek'>{days}</div>
                    ))}
                </div>
                <div className='days-body'>
                    {Array(daysToUse[month] + startDayOfMonth).fill(null).map((day, index) => {
                        const d = index - startDayOfMonth + 1;
                        
                        return (
                            <div key={index} className='dates-wrap'>
                                <IndividualDays d={d} month={month} year={year} monthsArr={monthsArr} isToday={isToday} 
                                addRemoveDatesToState={addRemoveDatesToState} selectedDates={selectedDates} eventData={testData}
                                setDateClickedOpenEvent={setDateClickedOpenEvent} setShowEventsOnDate={setShowEventsOnDate} 
                                />
                                 
                            </div>
                            
                        );
                        
                    })}
                </div> 
            </div>
            {showEventsOnDate ? <EventsOnDatePage eventData={testData} setShowEventsOnDate={setShowEventsOnDate} dateClickedOpenEvent={dateClickedOpenEvent} /> : null}        
        </div>
        
    );
};

export default AddEventsCalendar;

