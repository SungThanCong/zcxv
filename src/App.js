import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Travel from './components/link/Travel';
import Home from './components/link/Home';

import OldGirl from './components/link/OldGirl';
import Update from './components/link/Update';

function App() {

 
  return (
    <Router>
      <Route path="/" exact component = {Home}/>
      <Route path="/hanh-trinh" exact component = {Travel}/>
      <Route path="/nguoi-yeu-cu" exact component = {OldGirl}/>
      <Route path="/thanh-tuu" exact component = {Update}/>
      <Route path="/uoc-nguyen" exact component = {Update}/>
    </Router>
  );
}

export default App;
