import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <nav>

        {props.currentUser && props.currentTeam &&
          <>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/challenge">Home</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/team">Team</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to={`/users/${props.currentUser.id}`}>Profile</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to='/rules'>How to Play</NavLink>
            <Link to='/' onClick={props.handleLogout}>Logout</Link>
          </>
        }
        {props.currentUser && !props.currentTeam &&
          <>
            <NavLink activeStyle={{ fontWeight: "bold" }} exact to='/'>Home</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to='/rules'>How to Play</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/join-team">Join Team</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/create-team">Create Team</NavLink>
          </>
        }
        {!props.currentUser &&
          <>
            <NavLink activeStyle={{ fontWeight: "bold" }} exact to='/'>Home</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to='/rules'>How to Play</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/register">Sign Up</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/login">Login</NavLink>
          </>
        }
      </nav>
      <h1 id="title">President's<br /> Day <br />Challenge</h1>
    </header>
  )
}
