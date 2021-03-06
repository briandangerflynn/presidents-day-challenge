import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Welcome({ currentUser, currentTeam }) {
  if (currentUser && currentTeam) {
    return <Redirect to='/challenge' />
  }
  return (
    <motion.div id="welcome" animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: '-50%' }} transition={{ delay: 0 }}>
      <div id="welcome-image">
        <i>
          <a href="https://corbinswets.artstation.com" target="_blank" rel="noopener noreferrer">Illustr. by Corbin Swets</a>
        </i>
      </div>
      <br />
      <hr />
      <p><i>Drink Each President's Favorite Drink</i></p>
      <Link to="/rules">
        <button>How to Play</button>
      </Link>
      <Link to="/register" id="play-now">
        <button>Play Now</button>
      </Link>
    </motion.div >
  )
}