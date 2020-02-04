import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <nav>
        {props.currentUser && props.currentTeam &&
          <>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/challenge">Challenge</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/team">Team</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to={`/users/${props.currentUser.id}`}>Profile</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to='/rules/'>Rules</NavLink>
            <Link to='/' onClick={props.handleLogout}>Logout</Link>
          </>
        }
      </nav>
      <h1 id="title">President's<br /> Day <br />Challenge</h1>
    </header>
  )
}
