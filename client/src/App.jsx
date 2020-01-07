import React from 'react';
import './App.scss';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import { login, register, verifyToken, removeToken } from './services/auth';

class App extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.verifyUser();
  }


  // ================================
  // ============ AUTH ==============
  // ================================
  
  handleLogin = async (loginData) => {
    const currentUser = await login(loginData);
    this.setState({ currentUser });
  }
  
  handleRegister = async (registerData) => {
    const currentUser = await register(registerData);
    this.setState({ currentUser });
  }
  
  verifyUser = async () => {
    const currentUser = await verifyToken();
    if (currentUser) {
      this.setState({ currentUser })
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
        {/* <Route exact path="/" render={() => (
          <div>Yo Yo Yo!</div>
        )} /> */}
      </>
    );
  }
}

export default App;
