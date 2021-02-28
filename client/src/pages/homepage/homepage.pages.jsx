import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { homepageDataSelector } from '../../redux/calendar/calendar.selectors'
import UpcomingEvent from '../../components/upcoming-event/upcoming-event.component';
import MenuBar from '../../components/menu-bar/menu-bar.component';


const HomePage = ({ homepageData }) => {

  
    return(
        <div>
            <MenuBar />
            <h2>Your upcoming socials</h2>
            <div className='upcoming-events'>
                {homepageData.map(event => 
                    <UpcomingEvent title={event.title} startTime={event.startTime} endTime={event.endTime} locationUse={event.locationUse} invitee={event.invitee} />
                )}
            </div>
            
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    homepageData: homepageDataSelector
})


export default connect(mapStateToProps, null)(HomePage);