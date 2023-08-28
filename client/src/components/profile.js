import React from "react";
import '../App.css';

function Profile(props) {

  return (
    <div className="profile">
      {props.profile ? (
        <div className="login-status">
            <div className="profile-name">
                <img className="gmail-avatar" src={props.profile.picture} alt="user image" onClick={props.logOut} />
                <p className="login-text user-text name-text" >{props.profile.name}</p>
            </div>
            <p className="login-text user-text email-text">{props.profile.email}</p>
        </div>
      ) : (
        <div className="login-prompt-container">
          <button className="login-button" onClick={props.login}>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 51 51" fill="none">
              <rect width="50.3924" height="50.3924" transform="translate(0.49527 0.495239)" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M48.8721 26.2398C48.8721 24.5276 48.7184 22.8813 48.433 21.3008H25.6916V30.641H38.6867C38.1269 33.6593 36.4257 36.2166 33.8684 37.9288V43.9874H41.6721C46.2379 39.7837 48.8721 33.5935 48.8721 26.2398Z" fill="#4285F4"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6913 49.837C32.2108 49.837 37.6767 47.6748 41.6718 43.987L33.8681 37.9285C31.7059 39.3773 28.9401 40.2334 25.6913 40.2334C19.4023 40.2334 14.0791 35.9858 12.1803 30.2785H4.11322V36.5346C8.08639 44.4261 16.2523 49.837 25.6913 49.837Z" fill="#34A853"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1806 30.2792C11.6976 28.8304 11.4233 27.2828 11.4233 25.6914C11.4233 24.0999 11.6976 22.5523 12.1806 21.1035V14.8474H4.11349C2.47812 18.1072 1.5452 21.795 1.5452 25.6914C1.5452 29.5877 2.47812 33.2755 4.11349 36.5353L12.1806 30.2792Z" fill="#FBBC05"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6913 11.1484C29.2364 11.1484 32.4193 12.3667 34.9218 14.7594L41.8474 7.83377C37.6657 3.93742 32.1998 1.54473 25.6913 1.54473C16.2523 1.54473 8.0864 6.95572 4.11322 14.8472L12.1803 21.1033C14.0791 15.396 19.4023 11.1484 25.6913 11.1484Z" fill="#EA4335"/>
            </svg>
            <p>Get Started</p>
          </button>
          <p className="instructions">Login to your Gmail account to view & manage subscriptions</p>
        </div>
      )}
    </div>
  );
}
export default Profile;
