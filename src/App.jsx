import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import Users from './Components/Users';
import Profile from './Components/Profile';
import { DarkModeProvider } from './Context/Darkmode';

const App = () => (
  <DarkModeProvider>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Users} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </DarkModeProvider>
);

export default App;
