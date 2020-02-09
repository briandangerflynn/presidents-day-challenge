import React from 'react';

export default class ChallengeMain extends React.Component {

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.props.getTeamPresidents()
      }, 30000)
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  render() {
    const {
      challengers,
      victories,
      challengeView,
      handleViewClick,
      handleDefeat,
      handleRevive,
      handleChallengeClick
    } = this.props

    const winText = challengers.length === 0 && challengeView === "challengers" ? <p className="empty-list-text">You drank 'em all you patriotic boozehound! Congrats!</p> : null;

    const noVictoriesText = victories.length === 0 && challengeView !== "challengers" ? <p className="empty-list-text">Fill up yer cup! No President's have been clobbered by your patriotic binge-drinking thus far.</p> : null;

    let presidents = []

    // LOL this terrible code sets the "current view" class. it works, but we should refactor in the future. 
    let view;
    if (challengeView === "challengers") {
      presidents = challengers
      view =
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
    } else {
      presidents = victories
      view =
        <div id="challenge-tab-section">
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
          {winText}
          {noVictoriesText}
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
                  <p>Drink Type: <b>{president.drink_type}</b></p>
                </div>
                {
                  challengeView === "challengers" ?
                    <div className="pres-defeat" onClick={() => handleChallengeClick(president.id)}>
                      <p>Challenge!</p>
                    </div> :
                    <div className="pres-revive" onClick={() => handleRevive(president.id)}>
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
}