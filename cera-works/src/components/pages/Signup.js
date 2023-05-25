import React from 'react';

class Signup extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('You have submitted the signup form');
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Signup</h2>
        <label>
          Email
          <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <br />
        <label>
          Password
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Signup;