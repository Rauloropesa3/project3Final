import React, { useRef } from "react";
// import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import "bootstrap/dist/css/bootstrap.min.css";

// export default class Login extends Component {
//   constructor (props){
//           this.state = {
//               email : '',
//               password : '',
//               redirectToReferrer: true // when you're checking if the user is authenticated you have to keep this false
//           };

import "./Login.css";
const Login = (props) => {
  console.log(props);
  const username = useRef();
  const password = useRef();
  const [user, dispatch] = useUserContext();

  const tryLogin = () => {
    let loginObj = {
      email: username.current.value,
      password: password.current.value,
    };

    fetch("/auth/register_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "loggedInUser",
          payload: data,
        });

        props.history.push("/LandingPage");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="jumbotron jumbo_text">
      <h1 className="display-4">OuttaLine</h1>
      <p className="lead">Get out of line and into the aisles.</p>
      <p>Schedule your reservation today. Sign up and save some time!</p>
      <div className="text-center">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Sign up
        </a>
        <div className="separator">Or</div>
        <input ref={username} type="text" placeholder="email" />
        <input ref={password} type="password" placeholder="password" />
        <button className="btn btn-secondary btn-lg" onClick={tryLogin}>
          login
        </button>
      </div>
    </section>
  );
};
//   return (
//     <div>
//       <input ref={username} type="text" placeholder="email" />
//       <input ref={password} type="password" placeholder="password" />
//       <button onClick={tryLogin}>login</button>
//     </div>
//   );
// };
export default Login;
