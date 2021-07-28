import React, { useState } from "react";
import UserForm from "./UserForm";
//a functional component
const LoginForm2 = (props) => {
  //use state to hold the variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //this handles the actual login
  const handleLogin = (e) => {
    e.preventDefault();

    //do form validation
    if (!email || !password) {
      alert("All fields are require");
      return;
    }
    //do a fetch or something to send the information to the backend
    fetch(
      "some url",
      {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
      }
        .then((response) => response.json)
        .then((data) => {
          //do something with the response???
        })
    );
  };
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  return (
    <UserForm
      email={email}
      password={password}
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      buttonText="Log In"
    />
  );
};

export default LoginForm2;
