import {GoogleLogout} from 'react-google-login';

const CLIENT_ID = '759699375453-28fbvc7lhg4kfo39lf07uqrmvsrl2alb';

const Logout = () => {
    const onSuccess = () => {
        console.log("Logout successful.");
    }

    return (
        <div id="signoutButton">
            <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;