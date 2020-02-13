import React from 'react';

export default class ProfileEdit extends React.Component {
  state = {
    username: this.props.username,
    email: this.props.email
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {


    return (
      <div className="form">
        <h2>Edit Account</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleEditProfile(this.state);
        }}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input type="submit" className="submit-button" value="Update" />
        </form>
      </div>
    )
  }
}
