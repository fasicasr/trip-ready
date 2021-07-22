import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import SignInSide from "./LogIn/login";
import LoginForm2 from "./LogIn/login-example";
import RegisterForm2 from "./LogIn/register";
// import TopNav from "./TopNav/";
// import Profile from "./Profile/";

function App() {
  return (
    <div className="App">
      <LogIn />
      <SignUp />
      <SignInSide />
      <LoginForm2 />
      <RegisterForm2 />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <TopNav />
//       <Profile />
//       {/* <Trips />
//       <Footer />  */}
//     </div>
//   );
// }

export default App;
