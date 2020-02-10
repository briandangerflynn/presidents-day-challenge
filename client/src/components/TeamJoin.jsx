import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { api } from '../services/api-helper';


export default class Login extends React.Component {
  state = {
    teamname: "",
    password: ""
  }



  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleJoinTeam = async (e) => {
    e.preventDefault();
    const formData = {
      teamname: this.state.teamname,
      password: this.state.password
    }
    this.props.joinTeam(formData)
  }

  render() {
    const { errorMessage } = this.props
    const error = errorMessage ? <p className="error-message">{errorMessage}</p> : null;

    if (this.props.currentTeam) {
      return <Redirect to='/challenge' />
    }

    return (
      <div className="form">
        <h2>Join Existing Team</h2>
        <p><small>Want to create a new team? <Link to="/create-team" className="underline red">Click here!</Link></small></p>
        {error}
        <form onSubmit={this.handleJoinTeam}>
          <input
            type="text"
            placeholder="Enter Team Name (case sensitive)"
            name="teamname"
            required
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password (must be 5 characters)"
            name="password"
            autoComplete="new-password"
            required
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="submit-button"
            value="Join"
          />
        </form>
      </div>
    )
  }
}