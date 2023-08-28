import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { fetchEmails, retrieveAccessToken } from "./api";
import './App.css';
import Lottie from "lottie-react";
import unsubscribeAnimation from './unsubscribe.json';
import Profile from './components/profile';

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [emails, setEmails] = useState([]);
  const [tabSelection, setTabSelection] = useState("inbox");

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    retrieveAccessToken(user, setProfile, setEmails);
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className="login-container">
      <div className="title-container">
        <p className="login-text login-header">Unboxify</p>
        <Lottie animationData={unsubscribeAnimation} loop={true} className="unsubscribe-animation" />
      </div>
      <p className="login-text login-subtitle">A Simple Email Unsubscriber</p>
      <div className="profile-emails">
        <div className="emails">
          <div className="email-options">
            <div class={tabSelection === "inbox" ? "tab-button-selected" : "tab-button-unselected"} onClick={() => setTabSelection("inbox")}>Inbox</div>
            <div class={tabSelection === "accounts" ? "tab-button-selected" : "tab-button-unselected"} onClick={() => setTabSelection("accounts")}>Accounts</div>
          </div>
          <div className="emails-list"></div>
        </div>
        <Profile profile={profile} login={login} logOut={logOut} />
      </div>
    </div>
  );
}
export default App;
