import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Admin extends Component {
  constructor(props) {
    super(props);
    const user = localStorage.getItem("user");
    let loggedin = true;
    let username = user;
    if (user == null) {
      loggedin = false;
    }
    this.state = {
      loggedin,
      username
    };
  }

  /* componentDidMount() {
    const user = localStorage.getItem("user");

    if (user !== null) {
      console.log(user);
      this.setState({ islogged: true });
    }
  } */
  render() {
    if (!this.state.loggedin) {
      console.log("USER NOT LOGGED");
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>This is an admin page. Only authorized users can access this.</h1>
        <h2>Hello: {this.state.username}</h2>
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}

export default Admin;
