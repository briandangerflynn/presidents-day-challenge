import React from 'react';
export default function ChallengeMain(props) {

  const {
    challengers,
    victories,
    challengeView,
    handleViewClick,
    handleDefeat,
    handleRevive,
    currentTeam
  } = props

  let presidents = []
  let noPres = ""

  // LOL this terrible code sets the "current view" class. it works, but we should refactor in the future. 
  let view;
  if (challengeView === "challengers") {
    presidents = challengers
    noPres = `All president's defeated! All heal team ${currentTeam}`
    view = <div id="challenge-tab-section">
      <div id="challengers-view" className="challenge-tab current-view" onClick={handleViewClick} >
        <p>Challengers</p>
        <p>{challengers.length}</p>
      </div>
      <div id="victories-view" className="challenge-tab" onClick={handleViewClick}>
        <p>Victories</p>
        <p>{victories.length}</p>
      </div>
    </div>
  } else {
    presidents = victories
    noPres = "No President's have been clobbered by your patriotic binge-drinking thus far."
    view = <div id="challenge-tab-section">
      <div id="challengers-view" className="challenge-tab" onClick={handleViewClick} >
        <p>Challengers</p>
        <p>{challengers.length}</p>
      </div>
      <div id="victories-view" className="challenge-tab current-view" onClick={handleViewClick}>
        <p>Victories</p>
        <p>{victories.length}</p>
      </div>
    </div>
  }


  // end of garbage code

  return (
    <div className="challenge-main">
      {/* garbage code implemented here */}
      {view}
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

              {
                challengeView === "challengers" ?
                  <div className="pres-defeat" onClick={() => handleDefeat(president.id)}>
                    <p>Drank!</p>
                  </div> :
                  <div className="pres-defeat" onClick={() => handleRevive(president.id)}>
                    <p>Undo!</p>
                  </div>
              }

            </div>
          ))
        }
      </div>
    </div >
  )
}