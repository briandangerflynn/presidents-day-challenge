import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <nav>
        {props.currentUser &&
          <>
            <Link to={`/users/${props.currentUser.id}`}>Profile</Link>
            <Link to='/rules/'>Rules</Link>
            <Link to='/' onClick={props.handleLogout}>Logout</Link>
          </>
        }
      </nav>
      <h1 id="title">President's Day Challenge</h1>
    </header>
  )
}
