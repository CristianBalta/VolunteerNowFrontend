import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import MainComponent from './Components/MainComponent';

function App() {

  /*REDIRECTING TO DEFAULT - TO BE DECIDED*/
  const defaultRoute =
    window.location.pathname === "/" ? <Redirect to="/" /> : undefined;
    
  return (

    /*ADD COMPONENTS WITH PATH*/
    <Router>
      <Switch>
        <Route exact path="/" component={MainComponent} />

      </Switch>
      {defaultRoute}
    </Router>

  );
  
}

export default App;
