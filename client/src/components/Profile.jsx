import React from 'react';

export default function Profile(props) {
  const { currentUser, teamPresidents } = props
  return (
    <div>
      {
        currentUser &&
        <h2 id="team-show-teamname">{currentUser.username}</h2>
      }
      <div id="user-show">
        <p><b>Presidents Defeated:</b></p>
        {
          teamPresidents.map(president => {
            if (president.user_id === currentUser.id) {
              return <p key={president.president_id}>{president.president.name}</p>
            } else {
              return null
            }
          })
        }
      </div>
    </div>
  )
}

