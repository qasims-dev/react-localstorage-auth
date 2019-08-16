import React, { Component } from "react";
import Admin from "./Admin";
import Login from "./Login";
import Logout from "./Logout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/logout" component={Logout} />
          </Router>
        }
      </div>
    );
  }
}
export default App;
