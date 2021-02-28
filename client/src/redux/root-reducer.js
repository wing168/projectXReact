import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import calendarReducer from './calendar/calendar.reducer';
import signInReducer from './sign-in/sign-in.reducer';
import adminMsgReducer from './admin-msgs/admin-msg.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['signin']
}

const rootReducer = combineReducers ({
    calendar: calendarReducer,
    signin: signInReducer,
    adminMsg: adminMsgReducer
});

export default persistReducer(persistConfig, rootReducer);