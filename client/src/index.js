
import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

ReactDOM.render(
    <GoogleOAuthProvider clientId="759699375453-3i3t7pt8nvs86a0cvh18nn1t7c6vi1o7.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);