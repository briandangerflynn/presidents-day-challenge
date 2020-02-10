import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Rules() {
  return (
    <div id="rules-nav-div">
      <NavLink activeStyle={{ backgroundColor: "#000033", borderRadius: "100%" }} exact to="/rules" className="rules-nav"><div ></div></NavLink>
      <NavLink activeStyle={{ backgroundColor: "#000033" }} exact to="/rules/2" className="rules-nav"><div></div></NavLink>
      <NavLink activeStyle={{ backgroundColor: "#000033" }} exact to="/rules/3" className="rules-nav"><div></div></NavLink>
      <NavLink activeStyle={{ backgroundColor: "#000033" }} exact to="/rules/4" className="rules-nav"><div></div></NavLink>
    </div>
  )
}