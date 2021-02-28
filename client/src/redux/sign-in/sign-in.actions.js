import axios from 'axios';

import { signInActionTypes } from './sign-in.types';
import { signInFailure } from '../admin-msgs/admin-msg.actions';
import { getEventDataDBAsync } from '../calendar/calendar.actions'


export const signInAsync = ( userDetails ) => {
    
    return async (dispatch) => {
        try {
            const loginSubmission = axios({
                url: 'login',
                method: 'post',
                data: {
                    email: userDetails.email,
                    password: userDetails.password
                }
            });
                
            const loginRes = await loginSubmission;
            
            localStorage.setItem('token', loginRes.data.token);

            dispatch(setUserID(loginRes.data.userID));
            dispatch(getEventDataDBAsync(loginRes.data.userID));
            dispatch(authenticateUser(true));
            
            console.log('logged in', loginRes.data.userID)

        } catch (err) {
             dispatch(signInFailure(err.response.data.message));
             console.log('log in failed')
        }
        
        
    }
}

export const authenticateUser = bool => ({
    type: signInActionTypes.AUTHENTICATE_USER,
    payload: bool
});

export const setUserID = userID => ({
    type: signInActionTypes.SET_USER_ID,
    payload: userID
});



export const verifyUserAsync = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');

        if (!token) return dispatch(authenticateUser(false));

        try {
            const verifyUser = axios({
                url: 'verify',
                method: 'post',
                data: {
                token: token
                }
            });
    
            const verifyUserRes = await verifyUser;
            
            if (verifyUserRes) return dispatch(authenticateUser(true));
            console.log(verifyUserRes);
    
            
            } catch (err) {
            console.log(err.response);
            return authenticateUser(false);
            }
        } 
}
