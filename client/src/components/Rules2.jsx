import React from 'react';
import RulesNav from './RulesNav';
import { Link } from 'react-router-dom';

export default function Rules() {
  return (
    <div id="rules">
      <RulesNav />
      <h2>How To Play:</h2>
      <ol>
        <li>Create an account and either create a new team or join an existing one. <i>Note: When joining a team, team names are case sensitive.</i></li>
        <li>There are no limits on how big or small your team has to be; however, team size will affect how many drinks each individual will need to have, so choose responsibly. It's okay to add people to a team after the game has started.</li>
        <li>There are 44 drinks in the challenge. You can find all 44 drinks listed on the "Challenge" page, in the "Challengers" tab.</li>
        <li>To complete the game, your team must collectively consume all 44 beverages.</li>
        <li>When someone on your team has consumed a president's drink, click on the "drank" button next to that president to mark them as defeated. The app will update the list for everyone on your team (it may take up to 30 seconds to sync).</li>
        <li>If you accidentally marked a president as defeated, you can go to the "Victories" tab and click the "Revive" button next to that president. This will put them back in the "Challengers" tab.</li>
        <li>Each president has a favorite drink; however, as some drinks are difficult to find (e.g. madeira), alternative drinks are listed that you can use as substitutes.</li>
        <li>For sober presidents, you can either drink water or one of the alternative drinks listed.</li>
      </ol>
      <div className="rules-bottom-links">
        <Link to="/rules" className="rules-nav-bottom"><button>&lt; Back</button></Link>
        <Link to="/rules/3" className="rules-nav-bottom"><button>Next &gt;</button></Link>
      </div>
    </div >
  )
}