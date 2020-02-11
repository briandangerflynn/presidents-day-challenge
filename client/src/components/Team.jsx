import React from 'react';

export default function Team(props) {
  const {
    currentUser,
    currentTeam,
    currentTeamMembers,
    teamPresidents,
    leaveTeam,
    deleteTeam
  } = props

  return (
    <>
      <div id="team-show-full">
        {
          currentTeam &&
          <h2 id="team-show-teamname">{currentTeam.teamname}</h2>
        }
        <div id="team-show">
          <div id="team-member-list">
            <p><b>Members:</b></p>
            {
              currentTeamMembers.map(member => (
                <p key={member.id}>{member.username}</p>
              ))
            }
          </div>
          <div id="team-member-scores">
            <p><b>Victories:</b></p>
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
      {
        currentTeam && currentTeam.creator_id !== currentUser.id &&
        < div id="leave-team-box">
          <button onClick={() => leaveTeam()}>Leave {currentTeam.teamname}?</button>
        </div>
      }
      {
        currentTeam && currentTeam.creator_id === currentUser.id &&
        < div id="leave-team-box">
          <button onClick={() => deleteTeam()}>Delete {currentTeam.teamname}?</button>
        </div>
      }
    </>
  )
}