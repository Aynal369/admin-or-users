import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";

const GoogleAuth = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const { from } = { from: { pathname: "/" } };
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleAuthLogin = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        // const credential = result.credential;
        // console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch(error => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        // // console.log("errorCode:", errorCode, "errorMessage:", errorMessage, "email:", email, "credential:", credential);
        alert(error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleAuthLogin} type="button" className="btn btn-outline-danger form-control">
        <FontAwesomeIcon icon={faGoogle} /> Connect With Google
      </button>
    </div>
  );
};

export default GoogleAuth;
