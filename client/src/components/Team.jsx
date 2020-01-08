import React from 'react';

export default function Team(props) {
  const {
    currentTeam,
    currentTeamMembers,
    teamPresidents
  } = props

  return (
    <div>
      {
        currentTeam &&
        <h2 id="team-show-teamname">{currentTeam.teamname}</h2>
      }
      <div id="team-show">
        <div id="team-member-list">
          <p><b>Team Members:</b></p>
          {
            currentTeamMembers.map(member => (
              <p key={member.id}>{member.username}</p>
            ))
          }
        </div>
        <div id="team-member-scores">
          <p><b>Scores:</b></p>
          {
            currentTeamMembers.map(member => {
              let counter = 0
              teamPresidents.map(president => {
                if (president.user_id === member.id) {
                  counter++
                }
              })
              return <p key={member.id}>{counter}</p>
            })
          }
        </div>
      </div>
    </div>
  )
}