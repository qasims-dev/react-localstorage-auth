import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    const user = localStorage.getItem("user");
    let loggedin = true;

    if (user === null) {
      loggedin = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedin,
      authcheck: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "a" && password === "b") {
      localStorage.setItem("user", "Qasim");
      this.setState({
        loggedin: true
      });
    } else {
      this.setState({
        authcheck: "Wrong Password"
      });
    }
  }

  render() {
    if (this.state.loggedin) {
      return <Redirect to="/admin" />;
    }
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.submitForm}>
          <label htmlFor="username"> Username:</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.onChange}
          />
          <br />
          <label htmlFor="password"> Password:</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.onChange}
          />
          <br />
          <input type="Submit" />
        </form>
        {this.state.authcheck}
      </div>
    );
  }
}

export default Login;
