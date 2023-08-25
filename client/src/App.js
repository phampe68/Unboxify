import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
    },
    header: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    content: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      textAlign: "center",
    },
    profile: {
      textAlign: "center",
    },
    profileImage: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      marginBottom: "10px",
    },
    heading: {
      fontSize: "18px",
    },
    paragraph: {
      fontSize: "14px",
      margin: "5px 0",
    },
    loginButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
    logoutButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
  };

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>React Google Login</h2>
      <div style={styles.content}>
        {profile ? (
          <div style={styles.profile}>
            <img style={styles.profileImage} src={profile.picture} alt="user" />
            <h3 style={styles.heading}>User Logged in</h3>
            <p style={styles.paragraph}>Name: {profile.name}</p>
            <p style={styles.paragraph}>Email Address: {profile.email}</p>
            <button style={styles.logoutButton} onClick={logOut}>
              Log out
            </button>
          </div>
        ) : (
          <button style={styles.loginButton} onClick={login}>
            Sign in with Google 🚀
          </button>
        )}
      </div>
    </div>
  );
}
export default App;
