import React, { useContext } from "react";
import { UserContext } from "../../../App";

const WelcomeMessage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section id="welcome_message">
      <div className="welcome_title welcome">
        <p>Email:- {loggedInUser.email}</p>
      </div>
      <div className="welcome_body welcome">
        <h2>Welcome to my world!</h2>
      </div>
    </section>
  );
};

export default WelcomeMessage;
