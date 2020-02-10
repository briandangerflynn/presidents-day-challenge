import React from 'react';
import RulesNav from './RulesNav';
import { Link } from 'react-router-dom';

export default function Rules() {
  return (
    <div id="rules">
      <RulesNav />
      <h2>How To Play:</h2>
      <ol>
        <li>Click the "challenge" button next to a president to see their favorite drink. After consuming it, click the "drink" button to mark them as defeated. The app auto-updates the list for everyone on your team (it may take up to 30 seconds to sync).</li>
        <li>If you accidentally mark a president as defeated, go to the "Victories" tab and click the "Revive" button next to that president. This will put them back in the "Challengers" tab.</li>
        <li>Some drinks are rare or difficult to make (e.g. Madeira, Tokay wine, certain cocktails). Just drink the closest thing you can find :)</li>
        <li>For sober presidents, either drink the listed non-alcoholic drink or the themed cocktail listed.</li>
      </ol>
      <div className="rules-bottom-links">
        <Link to="/rules/2" className="rules-nav-bottom"><button>&lt; Back</button></Link>
        <Link to="/rules/4" className="rules-nav-bottom"><button>Next &gt;</button></Link>
      </div>
    </div >
  )
}