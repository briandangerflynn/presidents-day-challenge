import React from 'react';

export default function Team({
  userId,
  creatorId,
  teamname,
  currentTeamMembers,
  teamPresidents,
  leaveTeam,
  deleteTeam
}) {
  return (
    <>
      <div id="team-show-full">
        <h2 id="team-show-teamname">{teamname}</h2>
        <div id="team-show">
          <div id="team-member-list">
            <p><b>Members:</b></p>
            {currentTeamMembers.map(({ id, username }) => (
              <p key={id}>{username}</p>
            ))}
          </div>
          <div id="team-member-scores">
            <p><b>Victories:</b></p>
            {currentTeamMembers.map(({ id }) => {
              let counter = 0
              teamPresidents.forEach(({ user_id }) => {
                if (user_id === id) counter++
              })
              return <p key={id}>{counter}</p>
            })}
          </div>
        </div>
      </div>
      < div id="leave-team-box">
        {creatorId !== userId
          ? <button onClick={() => leaveTeam()}>Leave {teamname}?</button>
          : <button onClick={() => deleteTeam()}>Delete {teamname}?</button>
        }
      </div>
    </>
  )
}