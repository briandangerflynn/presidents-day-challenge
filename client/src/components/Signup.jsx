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
    const { errorMessage } = this.props
    const error = errorMessage ? <p className="error-message">{errorMessage}</p> : null;

    if (this.props.currentUser && this.props.currentTeam) {
      return <Redirect to='/challenge' />
    } else if (this.props.currentUser) {
      return <Redirect to='/join-team' />
    }

    return (
      <div className="form">
        <h2>Create Account</h2>
        <p><small>Got an account? <Link to="/login" className="underline red">Sign In</Link></small></p>
        {error}
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleRegister(this.state);
        }}>
          <input
            type="text"
            placeholder="Name"
            name="username"
            required
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password (must be 5 characters)"
            name="password"
            autoComplete="new-password"
            required
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password_confirmation"
            required
            onChange={this.handleChange}
          />
          <input type="submit" className="submit-button" value="Create" />
        </form>
      </div>
    )
  }
}
