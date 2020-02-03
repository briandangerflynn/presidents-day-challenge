import React from 'react';
export default function ChallengeMain(props) {
  const {
    challengers,
    victories,
    challengeView,
    handleViewClick,
    handleDefeat,
    handleRevive
  } = props
  let presidents = []
  if (challengeView === "challengers") {
    presidents = challengers
  } else {
    presidents = victories
  }
  return (
    <div className="challenge-main">
      <div id="challenge-tab-section">
        <div id="challengers-view" className="challenge-tab current-view" onClick={handleViewClick} >
          <p>Challengers</p>
          <p>{challengers.length}</p>
        </div>
        <div id="victories-view" className="challenge-tab" onClick={handleViewClick}>
          <p>Victories</p>
          <p>{victories.length}</p>
        </div>
      </div>
      <div id="challengers-list">
        {
          presidents.map(president => (
            <div key={president.id} className="challenger">
              <div className="pres-image">
                <img src={president.image_url} alt={president.name} />
              </div>
              <div className="pres-info">
                <h3>{president.name}</h3>
                <small>{president.presidency} president</small>
                <small> ({president.years_active})</small>
                <p>Favorite Drink: <b>{president.drink_type}</b></p>
              </div>
              <div className="pres-defeat">
                {
                  challengeView === "challengers" ?
                    <p onClick={() => handleDefeat(president.id)}>Drank!</p> :
                    <p onClick={() => handleRevive(president.id)}>Undo!</p>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div >
  )
}