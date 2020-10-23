import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Update from './pages/Update';
import Search from './pages/Search';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/update' component={Update} />
          <Route path='/search' component={Search} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
