import React, { useEffect, useState } from 'react';


import LoginButton from "../Components/login";
import LogoutButton from "../Components/logout";
import {gapi} from 'gapi-script';

const CLIENT_ID = '759699375453-28fbvc7lhg4kfo39lf07uqrmvsrl2alb';
const API_KEY = 'AIzaSyC1G9NQJBsF_buTovepP5bBSF7NKOUFbac'; // Replace with your API key
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

const Main = () => {
    const [credentials, setCredentials] = useState('');
    const gmailEndpoint = "https://gmail.googleapis.com";
    const fetchMessages = () => {
        
    }



    return (

        <GoogleOAuthProvider clientId="759699375453-28fbvc7lhg4kfo39lf07uqrmvsrl2alb">
                <h2>React Google Login</h2>
                <br />
                <br />
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        setCredentials(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />

        </GoogleOAuthProvider>
    )
}

export default Main;
