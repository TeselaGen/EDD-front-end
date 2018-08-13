import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContentManager from "./AppContentManager";
import "./App.css";
import "./styles/bootstrap.css";
// import appGlobals from './appGlobals';

class App extends Component {
  render() {
    return (
        <Router>
          <AppContentManager />
        </Router>
    );
  }
}

export default App;
