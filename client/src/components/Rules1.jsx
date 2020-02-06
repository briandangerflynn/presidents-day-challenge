import React from 'react';
import RulesNav from './RulesNav';
import { Link } from 'react-router-dom';

export default function Rules() {
  return (
    <div id="rules">
      <RulesNav />
      <h2>The Basics</h2>
      <p><b>What is it?:</b> The Presidents Day Challenge is a drinking game intended to be played in real life over President's Day Weekend with a team of friends.</p>
      <p><b>How does it work?:</b> We did some research and found the favorite alcoholic drinks of all 44 US presidents. Your team's goal is to drink every beverage on that list. This app will help your team mark which presidents' drinks you've consumed and which ones you still need to drink.</p>
      <div className="rules-bottom-links">
        <Link to="/rules/2" className="rules-nav-bottom"><button>Next &gt;</button></Link>
      </div>

    </div>
  )
}