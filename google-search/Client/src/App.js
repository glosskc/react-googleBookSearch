import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Search from "./Pages/search";
import Saved from "./Pages/saved";
import Nav from "./Components/Nav";
import Header from "./Components/Header";

class App extends Component {
render() {
  return(
    <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}
}


export default App;
