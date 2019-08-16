import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("user");
  }
  render() {
    return (
      <div>
        <h1>You have been logged out.</h1>
        <Link to="/">Login again</Link>
      </div>
    );
  }
}

export default Logout;
