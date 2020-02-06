import React from 'react';
import RulesNav from './RulesNav';
import { Link } from 'react-router-dom';

export default function Rules() {
  return (
    <div id="rules">
      <RulesNav />
      <h2>Suggestions:</h2>
      <ol>
        <li>Make it a themed event! Team uniforms or costumes can really make this a lot more fun.</li>
        <li>Get out of the house. Bar hopping can make this game even more fun and can help spread the joy!</li>
        <li>Don't be an asshole. That's just general life advice.</li>
        <li><b>Pace Yourself.</b> This game is meant to be a fun way to enjoy a holiday, hangout with friends, and learn a little about history. It's <i><b>not</b></i> meant to be a launchpad into alcohol poisioning. <b>Please drink responsibly.</b></li>
        <li>See the chart below if you need some guidance on how much alcohol is unsafe.</li>
      </ol>
      <img src="https://mk0wiweleciwqe485tn7.kinstacdn.com/wp-content/uploads/2018/01/blood-alcohol-content-768x398.jpg" alt="bac chart" />
      <div className="rules-bottom-links">
        <Link to="/rules/2" className="rules-nav-bottom"><button>&lt; Back</button></Link>
      </div>
    </div>
  )
}