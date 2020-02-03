import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    if (this.props.currentUser && this.props.currentTeam) {
      return <Redirect to='/challenge' />
    } else if (this.props.currentUser) {
      return <Redirect to='/join-team' />
    }
    const { username, email, password, password_confirmation } = this.state;
    return (
      <div className="form">
        <h2>Create Account</h2>
        <p><small>Got an account? <Link to="/" className="underline red">Sign In</Link></small></p>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleRegister(this.state);
        }}>
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password (must be 5 characters)"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
          <input type="submit" className="submit-button" value="Create" />
        </form>
      </div>
    )
  }
}
