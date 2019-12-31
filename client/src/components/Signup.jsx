import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
  state = {
    
  }
  render() {
    return (
      <div className="form">
        <h2>Create Account</h2>
        <p><small>Got an account? <Link to="/login" className="underline red">Sign In</Link></small></p>
        <form>
          <input placeholder="Name" />
          <input placeholder="Password (must be 5 characters)" />
          <input placeholder="Confirm Password" />
          <input type="submit" className="submit-button" value="Create" />
        </form>
      </div>
    )
  }
}
