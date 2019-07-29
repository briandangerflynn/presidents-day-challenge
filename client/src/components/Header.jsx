import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <nav>
      <Link to={`/users/${props.currentUser.id}`}>Profile</Link>
      <Link to='/rules/'>Rules</Link>
      <Link to='/logout/'>Logout</Link>
    </nav>
  )
}
