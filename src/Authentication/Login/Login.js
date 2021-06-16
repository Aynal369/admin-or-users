import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Config/Config.firebase";
import { UserContext } from "../../App";
import FacebookAuth from "../SocialLogin/FacebookAuth";
import GoogleAuth from "../SocialLogin/GoogleAuth";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const { from } = { from: { pathname: "/" } };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch(error => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(error);
      });

    alert("Congratulations! Your Are Login Successfully.");
  };
  return (
    <section id="login">
      <div className="card my_card">
        <div className="card-body">
          <div className="text-center">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <h2 className="card-title text-uppercase text-center mt-3 mb-5">Log in</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="name@example.com"
                className="form-control"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                type="email"
              />
              {errors.email && (
                <span style={{ color: "red", fontSize: "12px" }} role="alert">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                placeholder="H2Gi)mRp*vg^"
                className="form-control"
                {...register("password", {
                  required: "required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                    message:
                      "Password must be 8-30 characters. example:- number, uppercase, lowercase, special character)",
                  },
                })}
                type="password"
              />
              {errors.password && (
                <span style={{ color: "red", fontSize: "12px" }} role="alert">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-success form-control text-uppercase">
                Submit
              </button>
            </div>
          </form>
          <div className="text-center">
            <p>
              don't have an account
              <button type="button" className="btn btn-light">
                <Link style={{ textDecoration: "none" }} to="/signup">
                  Sign up
                </Link>
              </button>
            </p>
          </div>
          <hr />
          <div className="social_login">
            <p>Or connect with social media</p>
            <div className="mb-2">
              <GoogleAuth />
            </div>
            <div>
              <FacebookAuth />
            </div>
          </div>
        </div>
      </div>
      <div style={{ color: "gray" }}>
        <small> &copy; Copyright {new Date().getFullYear()} Aynal Hossain. All rights reserved.</small>
      </div>
    </section>
  );
};

export default Login;
