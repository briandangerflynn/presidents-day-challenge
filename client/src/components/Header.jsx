import React from 'react'
import { Link, Redirect } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <nav>
        {props.currentUser ?
          <>
            <Link to={`/users/${props.currentUser.id}`}>Profile</Link>
            <Link to='/rules/'>Rules</Link>
            <Link to='/logout/'>Logout</Link>
          </>
          :
          <Redirect to="/login" />
        }
      </nav>
      <h1 id="title">President's Day Challenge</h1>
    </header>
  )
}
