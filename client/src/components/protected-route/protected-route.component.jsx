import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyUserAsync } from '../../redux/sign-in/sign-in.actions';
import { getEventDataDBAsync } from '../../redux/calendar/calendar.actions'
import { userAuthSelector, userIDSelector } from '../../redux/sign-in/sign-in-selectors';
import { createStructuredSelector } from 'reselect';



const ProtectedRoute = ({ component: Component, userAuthenticated, verifyUserAsync, getEventDataDBAsync, userID, ...rest }) => {

   useEffect(() => {

       verifyUserAsync();
       getEventDataDBAsync(userID);

   })
    
    return (
        <Route {...rest} render={
            (props) => {
                
                if (userAuthenticated) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={{ 
                        pathname: '/sign-in', 
                        state: { from: props.location } 
                    }} />
                }
            }
        } />
    );
};

const mapStateToProps = createStructuredSelector({
    userAuthenticated: userAuthSelector,
    userID: userIDSelector
});

const mapDispatchToProps = dispatch => ({
    verifyUserAsync: () => dispatch(verifyUserAsync()),
    getEventDataDBAsync: userID => dispatch(getEventDataDBAsync(userID))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute); 