import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      {props.currentUser &&
        <nav>
          <Link to={`/users/${props.currentUser.id}`}>Profile</Link>
          <Link to='/rules/'>Rules</Link>
          <Link to='/logout/'>Logout</Link>
        </nav>
      }
      <h1 id="title">President's Day Challenge</h1>
    </header>
  )
}
