import React from 'react';
import './App.scss';

import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import ChallengeMain from './components/ChallengeMain';
import ChallengeModal from './components/ChallengeModal';
import Team from './components/Team';
import Profile from './components/Profile';
import Rules1 from './components/Rules1';
import Rules2 from './components/Rules2';
import Rules3 from './components/Rules3';
import TeamJoin from './components/TeamJoin';
import TeamCreate from './components/TeamCreate';
import Welcome from './components/Welcome';
import WinModal from './components/WinModal';

import { Route } from 'react-router-dom';
import { login, register, verifyToken, removeToken } from './services/auth';
import { api } from './services/api-helper';
import { ActionCableConsumer } from 'react-actioncable-provider';



class App extends React.Component {
  state = {
    currentUser: null,
    currentTeam: null,
    currentTeamMembers: [],
    teams: [],
    teamPresidents: [],
    challengers: [],
    victories: [],
    challengeView: "challengers",
    win: false,
    modal: false,
    challengeSpecifics: false,
    currentPresident: null
  }

  async componentDidMount() {
    this.getTeamPresidents()
    this.getCurrentTeamMembers()
  }

  getCurrentTeamMembers = async () => {
    let { currentTeam } = this.state
    if (!currentTeam) {
      currentTeam = await this.verifyUser()
    }
    if (currentTeam) {
      const response = await api.get(`/teams/${currentTeam.id}`)
      const currentTeamMembers = response.data.users
      this.setState({
        currentTeamMembers
      })
    }
  }

  getTeamPresidents = async () => {
    const challengers = []
    const victories = []
    let { currentTeam, win } = this.state
    if (!currentTeam) {
      currentTeam = await this.verifyUser()
    }
    if (currentTeam) {
      const response = await api.get(`/teams/${currentTeam.id}`)
      const teamPresidents = response.data.team_presidents
      teamPresidents.sort(function (a, b) {
        return a.id - b.id;
      });
      teamPresidents.forEach(tp => {
        if (!tp.user_id) {
          challengers.push(tp.president)
        } else {
          victories.push(tp.president)
        }
      })
      this.setState({
        teamPresidents,
        challengers,
        victories
      })
    }
  }

  handleViewClick = (e) => {
    const buttonName = e.currentTarget.id
    if (buttonName === "challengers-view") {
      this.setState({
        challengeView: "challengers"
      })
    } else {
      this.setState({
        challengeView: "victories"
      })
    }
  }

  handleDefeat = async (id) => {
    const { currentUser, currentTeam, teamPresidents, win } = this.state
    const formData = {
      user: currentUser,
      team: currentTeam,
      president_id: id
    }
    const response = await api.put(`/teams/${currentTeam.id}/presidents/${id}/defeat`, formData)
    const teamPresident = response.data[0]
    const challengers = []
    const victories = []

    teamPresidents.forEach(tp => {
      if (teamPresident.president_id === tp.president_id && tp.user_id !== teamPresident.user_id) {
        tp.user_id = teamPresident.user_id
      }
      if (!tp.user_id) {
        challengers.push(tp.president)
      } else {
        victories.push(tp.president)
      }
    })

    if (challengers.length === 0 && !win) {
      this.setState({ win: true, modal: true })
    } else if (challengers.length > 0 && win) {
      this.setState({ win: false, modal: false })
    }

    teamPresidents.sort(function (a, b) {
      return a.id - b.id;
    });

    this.setState({
      teamPresidents: teamPresidents,
      challengers: challengers,
      victories: victories,
      currentPresident: null,
      modal: false
    })
  }

  handleRevive = async (id) => {
    const { currentUser, currentTeam, teamPresidents } = this.state
    const formData = {
      user: currentUser,
      team: currentTeam,
      president_id: id
    }
    const response = await api.put(`/teams/${currentTeam.id}/presidents/${id}/revive`, formData)
    const teamPresident = response.data[0]
    const challengers = []
    const victories = []

    teamPresidents.forEach(tp => {
      if (teamPresident.president_id === tp.president_id && tp.user_id !== teamPresident.user_id) {
        tp.user_id = teamPresident.user_id
      }
      if (!tp.user_id) {
        challengers.push(tp.president)
      } else {
        victories.push(tp.president)
      }
    })

    teamPresidents.sort(function (a, b) {
      return a.id - b.id;
    });

    this.setState({
      teamPresidents,
      challengers,
      victories
    })
  }

  // ================================
  // ============ AUTH ==============
  // ================================

  handleLogin = async (loginData) => {
    const { user, teams } = await login(loginData);
    this.setState({
      currentUser: user,
      teams,
      currentTeam: teams[0]
    });
    this.getTeamPresidents()
    this.getCurrentTeamMembers()
  }

  handleRegister = async (registerData) => {
    const { user, teams } = await register(registerData);
    this.setState({
      currentUser: user,
      teams,
      currentTeam: teams[0]
    });
  }

  verifyUser = async () => {
    const response = await verifyToken();
    if (response) {
      const { user, teams } = response;
      this.setState({
        currentUser: user,
        teams,
        currentTeam: teams[0]
      });
      return response.teams[0]
    }
  }

  handleLogout = () => {
    removeToken();
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null,
      teams: [],
      currentTeam: null
    })
  }

  // ================================
  // ===== JOIN / CREATE TEAM =======
  // ================================

  joinTeam = async (formData) => {
    const response = await api.put('/teams/join', { team: formData })
    const currentTeam = response.data
    this.setState({
      currentTeam
    })

    this.getTeamPresidents()
    this.getCurrentTeamMembers()
  }

  createTeam = async (formData) => {
    const response = await api.post('/teams', { team: formData })
    const currentTeam = response.data
    this.setState({
      currentTeam
    })

    this.getTeamPresidents()
    this.getCurrentTeamMembers()
  }

  // ================================
  // ===== ACTION CABLE RESPONSE ====
  // ================================

  handleReceived = async (message) => {
    console.log(message[0])
    const { teamPresidents, win } = this.state
    const challengers = []
    const victories = []

    teamPresidents.forEach(tp => {
      if (message[0].president_id === tp.president_id && tp.user_id !== message[0].user_id) {
        tp.user_id = message[0].user_id
      }
      if (!tp.user_id) {
        challengers.push(tp.president)
      } else {
        victories.push(tp.president)
      }
    })

    teamPresidents.sort(function (a, b) {
      return a.id - b.id;
    });

    if (challengers.length === 0 && !win) {
      this.setState({ win: true, modal: true })
    } else if (challengers.length > 0 && win) {
      this.setState({ win: false, modal: false })
    }

    this.setState({
      teamPresidents,
      challengers,
      victories
    })
  }

  // Modal Logic

  handleCloseModal = () => {
    this.setState({ modal: false })
  }

  handleChallengeClick = async (id) => {
    const response = await api.get(`/presidents/${id}`)
    const currentPresident = response.data
    this.setState({
      challengeSpecifics: true,
      modal: true,
      currentPresident: currentPresident
    })
  }

  // ================================
  // ============ RENDER ============
  // ================================

  render() {
    const {
      teamPresidents,
      challengers,
      victories,
      challengeView,
      currentTeam,
      currentTeamMembers,
      currentUser,
      win,
      modal,
      challengeSpecifics,
      currentPresident
    } = this.state;

    console.log(challengeSpecifics)

    const challengeModal = !win && challengeSpecifics && modal ?
      <ChallengeModal
        handleCloseModal={this.handleCloseModal} currentPresident={currentPresident}
        handleDefeat={this.handleDefeat} />
      : null;

    const winModal = win && modal ?
      <WinModal
        handleCloseModal={this.handleCloseModal} />
      : null;

    const screen = modal ?
      <div id="screen"
        onClick={this.handleCloseModal}></div>
      : null;


    return (
      <>
        {screen}
        <Header
          currentUser={currentUser}
          currentTeam={currentTeam}
          handleLogout={this.handleLogout}
        />
        <main>
          {winModal}
          {challengeModal}
          <Route path="/login" render={() => (
            <Login
              handleLogin={this.handleLogin}
              currentUser={currentUser}
              currentTeam={currentTeam}
            />
          )} />
          <Route path="/register" render={() => (
            <Signup
              handleRegister={this.handleRegister}
              currentTeam={currentTeam}
              currentUser={currentUser}
            />
          )} />

          <Route path="/create-team" render={() => (
            <TeamCreate
              createTeam={this.createTeam}
              currentTeam={currentTeam}
              currentUser={currentUser} />
          )} />

          <Route path="/join-team" render={() => (
            <TeamJoin
              joinTeam={this.joinTeam}
              currentTeam={currentTeam} />
          )} />


          <Route path="/challenge" render={() => (
            <ActionCableConsumer
              channel={{
                channel: 'TeamsChannel',
                team: currentTeam,
                user: currentUser
              }}
              onReceived={this.handleReceived}
            >
              <ChallengeMain
                teamPresidents={teamPresidents}
                challengers={challengers}
                victories={victories}
                challengeView={challengeView}
                handleViewClick={this.handleViewClick}
                handleDefeat={this.handleDefeat}
                handleRevive={this.handleRevive}
                getTeamPresidents={this.getTeamPresidents}
                currentTeam={currentTeam}
                currentUser={currentUser}
                handleChallengeClick={this.handleChallengeClick}
                win={win}
              />
            </ActionCableConsumer>
          )
          } />

          < Route path="/team" render={() => (
            <Team
              currentTeam={currentTeam}
              currentTeamMembers={currentTeamMembers}
              teamPresidents={teamPresidents}
            />
          )} />

          < Route path="/users/:id" render={() => (
            <Profile
              currentUser={currentUser}
              currentTeam={currentTeam}
              teamPresidents={teamPresidents}
            />
          )} />

          < Route exact path="/rules" render={() => (
            <Rules1 />
          )} />

          < Route exact path="/rules/2" render={() => (
            <Rules2 />
          )} />

          < Route exact path="/rules/3" render={() => (
            <Rules3 currentUser={currentUser} />
          )} />

          < Route exact path="/" render={() => (
            <Welcome currentUser={currentUser} />
          )} />
        </main>
        <footer><small>&copy; 2020 &mdash; Team Dinos</small></footer>
      </>
    );
  }
}

export default App;