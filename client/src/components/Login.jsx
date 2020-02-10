import React from 'react'
import { Link, Redirect } from 'react-router-dom';


export default class Login extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password } = this.state;

    if (this.props.currentUser && this.props.currentTeam) {
      return <Redirect to='/challenge' />
    } else if (this.props.currentUser) {
      return <Redirect to='/join-team' />
    }

    const { errorMessage } = this.props
    const error = errorMessage ? <p className="error-message">{errorMessage}</p> : null;

    return (
      <div className="form">
        <h2>Login</h2>
        <p><small>New here? <Link to="/register" className="underline red">Create an account</Link></small></p>
        {error}
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin(this.state);
        }}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            required
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="submit-button"
            value="Log In"
          />
        </form>
      </div>
    )
  }
}
