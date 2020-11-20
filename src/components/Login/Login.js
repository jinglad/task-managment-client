import React, { useContext, useState } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { initializeLoginFramework, handleGoogleSignIn } from "./loginManager";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import './Login.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

initializeLoginFramework();

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    error: "",
    success: "",
  });

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  return (
    <div>
      <div className="text-center login-box">
        <div className="mt-5">
          <h3>Login With</h3>
          <button onClick={googleSignIn} className="google-sign-in-btn">
            {" "}
            <FontAwesomeIcon className="google-icon" icon={faGoogle} /> Continue
            With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
