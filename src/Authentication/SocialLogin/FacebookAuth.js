import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Config/Config.firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const FacebookAuth = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const handleFacebookAuth = () => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        // The signed-in user info.
        const user = result.user;
        setLoggedInUser(user);
        history.replace(from);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const accessToken = credential.accessToken;
        // ...
      })
      .catch(error => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        // // console.log("errorCode:", errorCode, "errorMessage", errorMessage, "email", email, "credential:", credential);
        // // ...
        alert(error);
      });
  };
  return (
    <div>
      <button onClick={handleFacebookAuth} type="button" className="btn btn-outline-primary form-control">
        <FontAwesomeIcon icon={faFacebook} /> Connect With Facebook
      </button>
    </div>
  );
};

export default FacebookAuth;
