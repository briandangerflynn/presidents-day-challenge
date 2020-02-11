import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'

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
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/join-team">Join</NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/create-team">Create</NavLink>
            <Link to='/' onClick={props.handleLogout}>Logout</Link>
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
      <motion.h1 id="title" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -200 }} transition={{ delay: 0.8 }}>President's<br /> Day <br />Challenge</motion.h1>
    </header>
  )
}
