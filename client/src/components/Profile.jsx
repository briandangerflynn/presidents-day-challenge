import React from 'react';

export default function Profile({ username, email, teamname, presidentsDefeated }) {
  return (
    <div>
      <div id="user-show">
        <div id="user-show-details">
          <div>
            <h3>Username:</h3>
            <p>{username}</p>
          </div>
          <div>
            <h3>Email:</h3>
            <p>{email}</p>
          </div>
        </div>
        <div>
          <h3>Current Team:</h3>
          <p>{teamname}</p>
        </div>
      </div>

      <div id="user-show">
        <div>
          <h3>Presidents Defeated:</h3>
          {
            presidentsDefeated.length ?
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

