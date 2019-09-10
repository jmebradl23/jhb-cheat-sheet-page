import React from 'react';
// import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Questions from './Components/Questions';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/questions" component={Questions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;