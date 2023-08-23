import {GoogleLogin} from 'react-google-login';

const CLIENT_ID = '759699375453-28fbvc7lhg4kfo39lf07uqrmvsrl2alb';


const Login = () => {

    const onSuccess = (res) => {
        console.log("Login successful. User is: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login failed. ", res);
    }
    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;