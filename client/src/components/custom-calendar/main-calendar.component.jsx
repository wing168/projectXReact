import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as selectors from '../../redux/calendar/calendar.selectors';
import { setMonth, setYear, setSelectedDates } from '../../redux/calendar/calendar.actions'

import IndividualDays from './custom-calendar-components/individual-days.component';

import './add-event-calendar.styles.scss';


const MainCalendar = ({ month, year, setMonth, setYear, currentDate, currentMonth, currentYear, daysArr, daysLeapYearArr, daysOfWeekArr, 
    monthsArr, eventData }) => {

    const chkLeapYr = ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0 ) ? true : false);
    const daysToUse = chkLeapYr ? daysLeapYearArr : daysArr;


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
                                <IndividualDays d={d} month={month} year={year} monthsArr={monthsArr} isToday={isToday} eventData={eventData} />
                                 
                            </div>
                        );
                    })}
                </div> 
            </div>   
        </div>
        
    );
};

const mapStateToProps = createStructuredSelector({
    month: selectors.monthSelector,
    year: selectors.yearSelector,
    currentDate: selectors.currentDateSelector,
    currentMonth: selectors.currentMonthSelector,
    currentYear: selectors.currentYearSelector,
    daysArr: selectors.daysArrSelector,
    daysLeapYearArr: selectors.daysLeapYearArrSelector,
    daysOfWeekArr: selectors.daysOfWeekArrSelector,
    monthsArr: selectors.monthsArrSelector
})

const mapDispatchToProps = dispatch => ({
    setMonth: month => dispatch(setMonth(month)),
    setYear: year => dispatch(setYear(year)),
    setSelectedDates: date => dispatch(setSelectedDates(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainCalendar);

