import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { api } from '../services/api-helper';

export default class Signup extends React.Component {
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

  handleCreateTeam = async (e) => {
    e.preventDefault();
    const formData = {
      teamname: this.state.teamname,
      creator_id: this.props.currentUser.id,
      password: this.state.password
    }
    this.props.createTeam(formData)
  }

  render() {
    if (this.props.currentTeam) {
      return <Redirect to='/challenge' />
    }

    return (
      <div className="form">
        <h2>Create Team</h2>
        <p><small>Already got a team? <Link to="/join-team" className="underline red">Join here!</Link></small></p>
        <form onSubmit={this.handleCreateTeam}>
          <input
            type="text"
            placeholder="Team Name"
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
          <input type="submit" className="submit-button" value="Create" />
        </form>
      </div>
    )
  }
}
