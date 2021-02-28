export const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export const daysLeapYearArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const daysOfWeekArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const today = new Date();
export const currentMonth = today.getMonth();
export const currentYear = today.getFullYear();
export const currentDate = today.getDate();

export const addRemoveDatesToState = (date, mainCalendar, selectedDatesArr) => {
    if (mainCalendar) {
        return [date];
    } else {
        const indexOfDate = selectedDatesArr.indexOf(date);
        // let dates = [...selectedDatesArr]

        if (indexOfDate !== -1) {
            
            return selectedDatesArr.filter(x => x !== date);
            // dates.splice(indexOfDate, 1);
            // return dates;

        } else {
            return [...selectedDatesArr, date];
        }
    
    }
}

export const lookUpFieldForData = (date) => {
    const lookupFieldStrArr = date.split('');
    const firstWhiteSpace = lookupFieldStrArr.indexOf(" ");
    const lookupField = `${lookupFieldStrArr.slice(firstWhiteSpace + 1, firstWhiteSpace + 4).join('')}${lookupFieldStrArr.slice(0, firstWhiteSpace).join('')}${lookupFieldStrArr.slice(firstWhiteSpace + 5).join('')}`;
    return lookupField;
}

// export const addEventsToState = (date, eventData, submittedInfo ) => {

//     const { title, startTime, endTime, invitee, locationUse, notes } = submittedInfo;

//     const lookup = lookUpFieldForData(date);

//     const idToUse = eventData[lookup] ? eventData[lookup].length + 1 : 1;

//     if (eventData.hasOwnProperty(lookup)) {
//         // return {...eventData, lookup: eventData[lookup].push({ title: title, startTime: startTime, endTime: endTime, invitee: invitee, location: location, notes: notes })}
//         return {...eventData, [lookup]: [...eventData[lookup], {id: idToUse, title: title, startTime: startTime, endTime: endTime, invitee: invitee, locationUse: locationUse, notes: notes }]}
//     } else {
//         return {...eventData, [lookup]: [{id: idToUse, title: title, startTime: startTime, endTime: endTime, invitee: invitee, locationUse: locationUse, notes: notes }] }
//     }
// };

// export const deleteEventsFromState = (id, eventData, date) => {
//     const lookup = lookUpFieldForData(date);

//     return {...eventData, [lookup]: eventData[lookup].filter(event => event.id !== id)}
// };

// export const editEventsFromState = (eventData, date, submittedInfo) => {
//     const lookup = lookUpFieldForData(date);
//     const id = submittedInfo.id;

//     return {...eventData, 
//                 [lookup]: eventData[lookup].map(event => event.id === submittedInfo.id ? {id, ...submittedInfo} : event)
        
//     }
// };




