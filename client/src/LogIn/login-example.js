import React, { useState } from "react";

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

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label for="email">Email</label>
          <input
            placeholder="Email Address"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            placeholder="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm2;
