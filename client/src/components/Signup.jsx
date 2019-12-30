import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="form">
      <h2>Sign In</h2>
      <p><small>New here? <Link to="/register">Create an account</Link></small></p>
      <input />
      <input />
      <input />
    </div>
  )
}
