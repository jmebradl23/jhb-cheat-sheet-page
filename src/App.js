import React from 'react';
// import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Questions from './Components/Questions';
import Definitions from './Components/Definitions';
import DomElements from './Components/DomElements';
import Css from './Components/Css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/questions" component={Questions} />
          <Route path="/definitions" component={Definitions} />
          <Route path="/dom" component={DomElements} />
          <Route path="/css" component={Css} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;