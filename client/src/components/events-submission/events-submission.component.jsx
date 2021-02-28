import React from 'react';
import { withRouter } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const EventsSubmission = ({ handleSubmit, handleChange, title, dateClickedOpenEvent, startTime, endTime, locationUse, invitee, notes, history }) => {
    return (
        <div>
            <form className='event-form' onSubmit={handleSubmit}>
                <FormInput name='title' type='text' label='Title' value={title} onChange={handleChange} placeholder='' required/>
                <FormInput name='date' type='text' label='Date' value={dateClickedOpenEvent} onChange={()=>{}} onClick={() => history.push('/calendar')} placeholder='' required/>
                <div className='time-select'>
                    <FormInput name='startTime' type='time' label='Start Time' value={startTime} onChange={handleChange} required/>
                    <FormInput name='endTime' type='time' label='End Time' value={endTime} onChange={handleChange} required/>
                </div>

                <FormInput name='locationUse' type='text' label='Location' value={locationUse} onChange={handleChange} required/>
                <FormInput name='invitee' type='text' label='Invitee' value={invitee} onChange={handleChange} required/>
                <FormInput name='notes' type='text' label='Notes' value={notes} onChange={handleChange} />
                <CustomButton type='submit'>Save</CustomButton>
                <CustomButton onClick={() => history.push('/calendar')}>Cancel</CustomButton>
            </form>
            
        </div>
    );
};

export default withRouter(EventsSubmission);