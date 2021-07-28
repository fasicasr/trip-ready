import React from "react";
import UserForm from "./UserForm";

class RegisterForm2 extends React.Component {
  state = {
    email: "",
    password: "",
    showInput: false,
  };

  handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  };

  handleLogin = (e) => {
    if (this.state.showInput) {
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
    } else {
      e.preventDefault();
      this.setState({ showInput: true });
    }
  };

  render() {
    //any special variables
    return (
      <UserForm
        email={this.state.email}
        password={this.state.password}
        handleLogin={this.handleLogin}
        handleEmailChange={this.handleChange}
        handlePasswordChange={this.handleChange}
        buttonText="Create Account"
        showInput={this.state.showInput}
        // setEmail={setEmail}
        // setPassword={setPassword}
      />
    );

    // return (
    //   <>
    //     <form onSubmit={this.handleLogin}>
    //       <div>
    //         <label for="email">Email</label>
    //         <input
    //           placeholder="Email Address"
    //           id="email"
    //           type="text"
    //           name="email"
    //           value={this.state.email}
    //           onChange={this.handleChange}
    //         />
    //       </div>
    //       <div>
    //         <label for="password">Password</label>
    //         <input
    //           placeholder="Password"
    //           id="password"
    //           name="password"
    //           type="password"
    //           value={this.state.password}
    //           onChange={this.handleChange}
    //         />
    //       </div>
    //       <Button variant="dark" type="submit">
    //         Create
    //       </Button>
    //     </form>
    //   </>
    // );
  }
}

export default RegisterForm2;
