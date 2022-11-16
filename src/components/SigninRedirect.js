import React, { useEffect } from 'react';
import { AuthenticationComponent } from './Context'
import { GoogleButton } from 'react-google-button';
import { useNavigate } from 'react-router-dom';

//component - contains the google button

const SigninRedirect = () => {

    const { googleSignIn, user } = AuthenticationComponent;

    const doSignin = async()=>{
        try {
            await googleSignIn();}
    }
    catch{}
}

    <GoogleButton>Sign in with Google</GoogleButton>
}

export default SigninRedirect;