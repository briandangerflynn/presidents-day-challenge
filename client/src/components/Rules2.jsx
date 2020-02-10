import React from 'react';
import RulesNav from './RulesNav';
import { Link } from 'react-router-dom';

export default function Rules() {
  return (
    <div id="rules">
      <RulesNav />
      <h2>Getting Started:</h2>
      <ol>
        <li>Create an account. Then create or join a team. <i>Note: User and team names and passwords are <b>case sensitive</b>.</i></li>
        <li>There are no limits on team size; however, team size will affect how many drinks each individual will need to have, so choose responsibly. Also, it's okay to add members to a team after the game has started.</li>
        <li>There are 44 drinks in the challenge. At the start of the game, you can find all 44 drinks listed on the Home page, in the "Challengers" tab. To complete the game, your team must collectively consume all 44 beverages.</li>
        <li>There's no limit to how few or how many drinks one teammate can take for the team &mdash; dividing drinks is up to your team to decide. That said, please look out for your teammates and drink responsibly.</li>
      </ol>
      <div className="rules-bottom-links">
        <Link to="/rules" className="rules-nav-bottom"><button>&lt; Back</button></Link>
        <Link to="/rules/3" className="rules-nav-bottom"><button>Next &gt;</button></Link>
      </div>
    </div >
  )
}