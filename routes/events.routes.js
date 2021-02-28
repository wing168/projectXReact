const router = require('express').Router();
const Events = require('../model/Events');
const pool = require('../database');

// Add event to calendar

router.post('/events', async (req, res) => {

    try {
        const addEvent = await pool.query(
            `INSERT INTO events (userid, eventdate, title, starttime, endtime, location, invitee, notes)
            VALUES (
            '${req.body.userID}', 
            '${req.body.eventDate}', 
            '${req.body.title}',
            '${req.body.startTime}',
            '${req.body.endTime}',
            '${req.body.locationUse}',
            '${req.body.invitee}',
            '${req.body.notes}'
            )`
        );
       
        return res.send({success: true, message: 'Event added!', output: addEvent});
    } catch (err) {
        console.log(err)
        res.status(400).send(err.response);
    }
});

// Update events for a user

router.put('/events', async (req, res) => {
    try {
        
        const updateEvents = await pool.query(`
        UPDATE events
            SET
            eventdate = '${req.body.eventDate}',
            title = '${req.body.title}',
            starttime = '${req.body.startTime}',
            endtime = '${req.body.endTime}',
            invitee = '${req.body.invitee}',
            location = '${req.body.locationUse}',
            notes = '${req.body.notes}' 
        WHERE id = '${req.body.id}'
        `);
        console.log(updateEvents)
        
        if (updateEvents.rowCount > 0) {
            return res.send({success: true, message: 'Event amended successfully', output: updateEvents});
        } else {
            return res.send({success: false, message: 'there was an error amending the event', output: updateEvents})
        }
        
        
        
    } catch (err) {
        console.log(err);
        res.status(400).send({success: false, message: 'there was an error amending the event', output: err.response})
    }
});

// Delete events for a user

router.delete('/events', async(req, res) => {

    try {
        const deleteEvent = await pool.query(
            `DELETE FROM events
            WHERE id = ${req.body.id};`
        );

        if (deleteEvent.rowCount > 0) {
            return res.status(200).send({success: true, message: 'Event deleted successfully', output: deleteEvent});
        }else {
            return res.status(400).send({success: false, message: 'Cannot find event to delete', output: deleteEvent})
        }

    }catch (err) {

        console.log(err);
        res.status(400).send({success: false, message: 'There was an error deleting', output: err.response})
    }
});



//Get calendar events for a user

router.get('/get-calendar', async (req, res) => {
    
    try {

        const getCalendar = await pool.query(`
            SELECT * FROM events
            WHERE userid = ${req.headers.userid}
        `)
 
        res.send({success: true, data: getCalendar})
    } catch (err) {
        res.status(400).send({success: false, message: err.message})
    }
});

module.exports =  router;

