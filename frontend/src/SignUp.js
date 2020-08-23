import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordRepeat = this.onChangePasswordRepeat.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {
      credentials: {
        id: "",
        username: "",
        password: "",
        password_repeat: "",
      },
    };
  }

  componentDidMount() {}
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangePasswordRepeat(e) {
    this.setState({
      password_repeat: e.target.value,
    });
  }
  handleSignUp() {
    //essen.preventDefault();
    fetch("http://localhost:9000/api/sign-up", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        password_repeat: this.state.password_repeat,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            required
            //value={this.state.name}
            onChange={this.onChangeUsername}
            name="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort</label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            //value={this.state.price}
            onChange={this.onChangePassword}
            name="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password_repeat">Passwort wiederholen</label>
          <input
            type="password"
            className="form-control"
            id="password_repeat"
            required
            //value={this.state.description}
            onChange={this.onChangePasswordRepeat}
            name="password_repeat"
          />
        </div>

        <button onClick={this.handleSignUp} className="btn btn-success">
          Sign up
        </button>
      </div>
    );
  }
}
