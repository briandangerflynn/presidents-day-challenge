import React from 'react';
import './App.scss';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import ChallengeMain from './components/ChallengeMain';
import { Route } from 'react-router-dom';
import { login, register, verifyToken, removeToken } from './services/auth';
import { api } from './services/api-helper';

class App extends React.Component {
  state = {
    currentUser: null,
    teams: [],
    teamPresidents: [],
    challengers: [],
    victories: [],
    challengeView: "challengers",
    user_id: 1,
    team_id: 1
  }

  async componentDidMount() {
    const challengers = []
    const victories = []
    const response = await api.get('/teams/1')
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
    this.verifyUser();
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
    const response = await api.put(`/teams/1/presidents/${id}/defeat`, { user_id: 1, team_id: 1, president_id: id })
    this.componentDidMount()
    console.log(response)
  }
  handleRevive = async (id) => {
    const response = await api.put(`/teams/1/presidents/${id}/revive`, { user_id: 1, team_id: 1, president_id: id })
    console.log(response)
    this.componentDidMount()
  }

  // ================================
  // ============ AUTH ==============
  // ================================

  handleLogin = async (loginData) => {
    const { user, teams } = await login(loginData);
    this.setState({
      currentUser: user,
      teams
    });
  }

  handleRegister = async (registerData) => {
    const { user, teams } = await register(registerData);
    this.setState({
      currentUser: user,
      teams
    });
  }

  verifyUser = async () => {
    const { user, teams } = await verifyToken();
    if (user) {
      this.setState({
        currentUser: user,
        teams
      });
    }
  }

  handleLogout = () => {
    removeToken();
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
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
      challengeView
    } = this.state;
    return (
      <>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Route exact path="/" render={() => (
          <Login
            handleLogin={this.handleLogin}
          />
        )} />
        <Route path="/register" render={() => (
          <Signup
            handleRegister={this.handleRegister}
          />
        )} />
        <Route exact path="/challenge" render={() => (
          <ChallengeMain
            teamPresidents={teamPresidents}
            challengers={challengers}
            victories={victories}
            challengeView={challengeView}
            handleViewClick={this.handleViewClick}
            handleDefeat={this.handleDefeat}
            handleRevive={this.handleRevive}
          />
        )} />
      </>
    );
  }
}

export default App;