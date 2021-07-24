import React from "react";

class RegisterForm2 extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  };

  handleLogin = (e) => {
    e.preventDefault();

    //do form validation
    if (!this.state.email || !this.state.password) {
      alert("All fields are require");
      return;
    }
    //do a fetch or something to send the information to the backend
    fetch(
      "some url",
      {
        method: "post",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }
        .then((response) => response.json)
        .then((data) => {
          //do something with the response???
        })
    );
  };

  render() {
    //any special variables

    return (
      <>
        <form onSubmit={this.handleLogin}>
          <div>
            <label for="email">Email</label>
            <input
              placeholder="Email Address"
              id="email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}

export default RegisterForm2;
