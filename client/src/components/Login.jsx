import React from 'react'
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="form">
        <h2>Sign In</h2>
        <p><small>New here? <Link to="/register" className="underline red">Create an account</Link></small></p>
        <form>
          <input placeholder="Name" />
          <input placeholder="Password" />
          <input type="submit" className="submit-button" value="Log In" />
        </form>
      </div>
    )
  }
}
