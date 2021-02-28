import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './components/protected-route/protected-route.component';

import './App.css';

import SignInPage from './pages/sign-in/sign-in.pages';
import SignUpPage from './pages/sign-up/sign-up.pages';
import HomePage from './pages/homepage/homepage.pages';
import AddEventPage from './pages/add-event/add-event.pages';
import EditEventPage from './pages/edit-event/edit-event.pages';
import CalendarPage from './pages/calendar/calendar.pages';

const App = () => {
  
  return (
    <div className="App">
      
      <Switch >
        <Route exact path='/sign-up' component={SignUpPage} />
        <Route exact path='/sign-in' component={SignInPage} />
        <ProtectedRoute exact path='/' component={HomePage}  />
        <ProtectedRoute exact path='/calendar' component={CalendarPage}   />
        <ProtectedRoute exact path='/add-event' component={AddEventPage}   />
        <ProtectedRoute exact path='/edit-event' component={EditEventPage}  />
        
      </Switch>
    </div>
  );
}
  

export default App;