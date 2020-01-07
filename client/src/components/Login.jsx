import React from 'react'
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="form">
        <h2>Sign In</h2>
        <p><small>New here? <Link to="/register" className="underline red">Create an account</Link></small></p>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin(this.state);
        }}>
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={username}
            onChange={this.handleChange}
            />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
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
