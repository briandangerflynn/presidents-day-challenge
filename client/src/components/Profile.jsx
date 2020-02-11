import React from 'react';

export default function Profile({ currentUser, currentTeam, presidentsDefeated }) {
  return (
    <div>
      {
        currentUser && currentTeam &&
        <div id="user-show">
          <div>
            <h3>Username:</h3>
            <p>{currentUser.username}</p>
          </div>
          <div>
            <h3>Current Team:</h3>
            <p>{currentTeam.teamname}</p>
          </div>
        </div>
      }
      <div id="user-show">
        <div>
          <h3>Presidents Defeated:</h3>
          {
            presidentsDefeated.length > 0 ?
              presidentsDefeated.map(president => (
                <p key={president.president_id}>{president.president.name}</p>
              )) :
              <p>Fill up yer cup! No presidents defeated yet!</p>
          }
        </div>
      </div>
    </div >
  )
}

