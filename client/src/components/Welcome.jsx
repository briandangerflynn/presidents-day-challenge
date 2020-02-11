import React from 'react';
import { Link, Redirect } from 'react-router-dom';


export default function Welcome(props) {
  const { currentUser, currentTeam } = props

  if (currentUser && currentTeam) {
    return <Redirect to='/challenge' />
  } else if (currentUser) {
    return <Redirect to='/join-team' />
  }

  return (
    <div id="welcome">
      <div id="welcome-image"><i><a href="https://alexfine.com/#/washington-post/" target="_blank" rel="noopener noreferrer">Illustr. by Alex Fine</a></i></div>


      <Link to="/rules"><button>How to Play</button></Link>
      <Link to="/register" id="play-now"><button>Play Now</button></Link>
    </div >
  )
}