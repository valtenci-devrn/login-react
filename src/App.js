import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';




const App = () => (
<Router>
  <Switch>
  <Route path="/" component={Login} />
  <Route path="/home" component={Home} />
  </Switch>
</Router>
)


export default App;