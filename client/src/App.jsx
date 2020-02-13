import React from 'react';
import './App.scss';

import {
  Header,
  Signup,
  Login,
  ChallengeMain,
  ChallengeModal,
  Team,
  Profile,
  ProfileEdit,
  Rules1,
  Rules2,
  Rules3,
  Rules4,
  TeamJoin,
  TeamCreate,
  Welcome,
  WinModal
} from './components/index'

import { Route, Redirect, withRouter } from 'react-router-dom';
import { api } from './services/api-helper';
import {
  login,
  register,
  verifyToken,
  removeToken,
  makeTeam,
  removeTeam,
  removeUserFromTeam,
  getTeamPresidents,
  getTeamMembers, getPresident,
  getDefeatedPresident,
  getRevivedPresident
} from './services/index'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { AnimatePresence } from 'framer-motion';

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
    currentPresident: null,
    registerErrorMessage: "",
    loginErrorMessage: "",
    joinTeamErrorMessage: "",
    createTeamErrorMessage: ""
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
      const currentTeamMembers = await getTeamMembers(currentTeam.id)
      this.setState({
        currentTeam,
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
      const teamPresidents = await getTeamPresidents(currentTeam.id);
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

    const teamPresident = await getDefeatedPresident(currentTeam.id, id, formData)

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
    const teamPresident = await getRevivedPresident(currentTeam.id, id, formData);
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
    try {
      const { user, teams } = await login(loginData);
      this.setState({
        currentUser: user,
        teams,
        currentTeam: teams[0],
        errorMessage: ""
      });
      this.getTeamPresidents()
      this.getCurrentTeamMembers()
    } catch (error) {
      const loginErrorMessage = "Incorrect email or password. Please try again."
      this.setState({
        loginErrorMessage
      })
    }
  }

  handleRegister = async (registerData) => {
    try {
      const { user, teams } = await register(registerData);
      this.setState({
        currentUser: user,
        teams,
        currentTeam: teams[0],
        errorMessage: ""
      });
    } catch (error) {
      const errors = []
      if (error.response.data.error.email) {
        errors.push(`Email ${error.response.data.error.email}`)
      }
      if (error.response.data.error.password) {
        errors.push(`Password ${error.response.data.error.password}`)
      }
      const registerErrorMessage = errors[0]
      this.setState({
        registerErrorMessage
      })
    }
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
    try {
      const response = await api.put('/teams/join', { team: formData })
      const currentTeam = response.data
      this.setState({
        currentTeam,
        errorMessage: ""
      })
      this.getTeamPresidents()
      this.getCurrentTeamMembers()

    } catch (error) {
      const joinTeamErrorMessage = error.response.data.error
      this.setState({
        joinTeamErrorMessage
      })
    }
  }

  createTeam = async (formData) => {
    try {
      const currentTeam = await makeTeam(formData);
      this.setState({
        currentTeam,
        errorMessage: ""
      })
      this.getTeamPresidents()
      this.getCurrentTeamMembers()
    } catch (error) {
      const createTeamErrorMessage = error
      this.setState({
        createTeamErrorMessage
      })
    }
  }

  leaveTeam = async () => {
    const { currentTeam } = this.state
    if (window.confirm(`Leave ${currentTeam.teamname}?`)) {
      await removeUserFromTeam(currentTeam.id)
      this.setState({
        currentTeam: null,
        currentTeamMembers: []
      })
      this.props.history.push('/join-team')
    }
  }

  deleteTeam = async () => {
    const { currentTeam } = this.state
    if (window.confirm(`Delete ${currentTeam.teamname}? This will end this team and challenge for all team members.`)) {
      await removeTeam(currentTeam.id);
      this.setState({
        currentTeam: null,
        currentTeamMembers: []
      })
      this.props.history.push('/join-team')
    }
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

  // ================================
  // ========= MODAL LOGIC ==========
  // ================================

  handleCloseModal = () => {
    this.setState({ modal: false })
  }

  handleChallengeClick = async (id) => {
    const currentPresident = await getPresident(id);
    this.setState({
      challengeSpecifics: true,
      modal: true,
      currentPresident: currentPresident
    })
  }

  // ================================
  // ========== EDIT USER ===========
  // ================================

  handleEditProfile = async (formData) => {
    const { id } = this.state.currentUser
    const response = await api.patch(`users/${id}`, formData)
    console.log(response)
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
      currentPresident,
      registerErrorMessage,
      loginErrorMessage,
      joinTeamErrorMessage,
      createTeamErrorMessage
    } = this.state;

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

    const presidentsDefeated = (teamPresidents = []) => {
      teamPresidents.filter(president => (
        president.user_id === currentUser.id
      ))
    }

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
          <AnimatePresence>

            {challengeModal}
          </AnimatePresence>
          <Route path="/login" render={() => (
            <Login
              handleLogin={this.handleLogin}
              currentUser={currentUser}
              currentTeam={currentTeam}
              errorMessage={loginErrorMessage}
            />
          )} />
          <Route path="/register" render={() => (
            <Signup
              handleRegister={this.handleRegister}
              currentTeam={currentTeam}
              currentUser={currentUser}
              errorMessage={registerErrorMessage}
            />
          )} />

          <Route path="/create-team" render={() => (
            <TeamCreate
              createTeam={this.createTeam}
              currentTeam={currentTeam}
              currentUser={currentUser}
              errorMessage={createTeamErrorMessage} />
          )} />

          <Route path="/join-team" render={() => (
            <TeamJoin
              joinTeam={this.joinTeam}
              currentTeam={currentTeam}
              errorMessage={joinTeamErrorMessage} />
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
              teamname={currentTeam ? currentTeam.teamname : ''}
              creatorId={currentTeam ? currentTeam.creator_id : ''}
              userId={currentUser.user_id}
              currentTeamMembers={currentTeamMembers}
              teamPresidents={teamPresidents}
              leaveTeam={this.leaveTeam}
              deleteTeam={this.deleteTeam}
            />
          )} />

          < Route exact path="/users/:id" render={() => (
            <Profile
              id={currentUser ? currentUser.id : ''}
              username={currentUser ? currentUser.username : ''}
              email={currentUser ? currentUser.email : ''}
              teamname={currentTeam ? currentTeam.teamname : ''}
              presidentsDefeated={presidentsDefeated}
            />
          )} />

          < Route path="/users/:id/edit" render={() => (
            <ProfileEdit
              id={currentUser ? currentUser.id : ''}
              username={currentUser ? currentUser.username : ''}
              email={currentUser ? currentUser.email : ''}
              handleEditProfile={this.handleEditProfile}
            />
          )} />

          < Route exact path="/rules" render={() => (
            <Rules1 />
          )} />

          < Route exact path="/rules/2" render={() => (
            <Rules2 />
          )} />

          < Route exact path="/rules/3" render={() => (
            <Rules3 />
          )} />

          < Route exact path="/rules/4" render={() => (
            <Rules4 currentUser={currentUser} />
          )} />

          < Route exact path="/" render={() => (
            <Welcome
              currentUser={currentUser}
              currentTeam={currentTeam}
            />
          )} />
        </main>
        <footer>
          <small>&copy; 2020 &mdash; team dinos. Contact us <a href="mailto:info@presidentsdaychallenge.com">here</a>.</small>
        </footer>
      </>
    );
  }
}

export default withRouter(App);