import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { api } from '../services/api-helper';


export default class Login extends React.Component {
  state = {
    teamname: ""
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
      teamname: this.state.teamname
    }
    this.props.joinTeam(formData)
  }

  render() {
    if (this.props.currentTeam) {
      return <Redirect to='/challenge' />
    }
    return (
      <div className="form">
        <h2>Join Existing Team</h2>
        <p><small>Want to create a new team? <Link to="/create-team" className="underline red">Click here!</Link></small></p>
        <form onSubmit={this.handleJoinTeam}>
          <input
            type="text"
            placeholder="Enter Team Name (case sensitive)"
            name="teamname"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password (must be 5 characters)"
            name="password"
            autoComplete="new-password"
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