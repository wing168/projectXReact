import { calendarActionTypes } from './calendar.types';
import axios from 'axios';
import { transformData } from '../../helpers';

export const setMonth = month => ({
    type: calendarActionTypes.SET_MONTH,
    payload: month
});

export const setYear = year => ({
    type: calendarActionTypes.SET_YEAR,
    payload: year
});


export const setSelectedDates = dates => ({
    type: calendarActionTypes.SET_SELECTED_DATES,
    payload: dates
});

export const setDateClickedOpenEvent = date => ({
    type: calendarActionTypes.SET_DATE_CLICKED_OPEN_EVENT,
    payload: date
});

export const setShowEventsOnDate = bool => ({
    type: calendarActionTypes.SET_SHOW_EVENTS_ON_DATE,
    payload: bool
});


export const getEventDataDBAsync = (userID) => {
    return async (dispatch) => {
        try {
            const submitEventData = axios({
                url: 'get-calendar',
                method: 'get',
                headers: {
                    userid: userID
                }
            });
            console.log('getting data from DB')
            const eventDataRes = await submitEventData;

            const dateTimeNow = Date.now();

            //For homepage data, only want the three upcoming events to be displayed. Therefore need to apply filter twice, first time to get array that only has future data
            // ie upcoming data and then filter again to only extract the first three items in the array

            const homePageData = eventDataRes.data.data.rows.filter(x => new Date(x.eventdate) > dateTimeNow).filter((x, i) => i < 3);

            const transformedData = transformData(eventDataRes.data.data.rows);

            dispatch(setHomePageData(homePageData));
            dispatch(setEventsToState(transformedData));

        } catch (err) {
            console.log(err.response);
        }
    }
}

export const setEventsToState = eventData => ({
    type: calendarActionTypes.SET_EVENTS_TO_STATE,
    payload: eventData
});

export const setHomePageData = data => ({
    type: calendarActionTypes.SET_HOMEPAGE_DATA,
    payload: data
})



