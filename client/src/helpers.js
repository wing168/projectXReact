// Transform data from backend to be in format that can be digested by the front end

export const transformData = (data) => {

    let transformedData = {};
    const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    data.forEach(event => {

        const eventDate = new Date(event.eventdate);
        const year = eventDate.getFullYear();
        const month = eventDate.getMonth();
        const date = eventDate.getDate();

        const lookup = `${monthsArr[month]}${date}${year}`

        if (transformedData.hasOwnProperty(lookup)) {
            transformedData[lookup].push({
                id: event.id, 
                eventDate: event.eventdate,
                title: event.title, 
                startTime: event.starttime, 
                endTime: event.endtime, 
                invitee: event.invitee,
                locationUse: event.location,
                notes: event.notes
            });
        } else {
            transformedData[lookup] = [{
                id: event.id, 
                eventDate: event.eventtate,
                title: event.title, 
                startTime: event.starttime, 
                endTime: event.endtime, 
                invitee: event.invitee,
                locationUse: event.location,
                notes: event.notes
            }]
        }

  });
  return transformedData;
}




 



