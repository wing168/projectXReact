import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './events-on-date-styles.scss';

const EventsOnDate = ({ id, eventDate, title, startTime, endTime, locationUse, invitee, notes, history }) => {
    
    const deleteEventsFromDB = async (id) => {

        const deleteEventsReq = axios({
            url: 'events',
            method: 'delete',
            data: {
                id: id
            }
        });

        try {
            const deleteEventsRes = await deleteEventsReq;
            console.log(deleteEventsRes);

            history.push('/calendar')
        } catch (err) {
            console.log(err);
        }
    }
   
    return (
        <div className='events-on-date-wrap'>
            <div>
                <h3>{title}</h3>
                <p>{startTime}</p>
                <p>{endTime}</p>
                <p>{locationUse}</p>
                <p>{invitee}</p>
                <p>{notes}</p>
            </div>
            <div>
                <button onClick={() => history.push(
                    {pathname: '/edit-event', 
                    editData: {id: id, eventDate: eventDate, title: title, startTime: startTime, endTime: endTime, locationUse: locationUse, invitee: invitee, notes: notes}
                    })}>
                    Edit
                </button>
                <button onClick={() => deleteEventsFromDB(id)}>Delete</button>
            </div>
            
            
        </div>
    )
};



export default withRouter(EventsOnDate);