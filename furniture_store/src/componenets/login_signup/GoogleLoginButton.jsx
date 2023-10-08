import React from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { givePermmission } from '../../Redux/action';
import { useDispatch } from 'react-redux';



export const GoogleLoginButton = () => {
    const dispatch=useDispatch();
 const client_id=process.env.REACT_APP_GOOGLE_ID
    return (
        <GoogleOAuthProvider clientId={client_id}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    const decodeName=decoded.given_name
                    if(decodeName){
                        sessionStorage.setItem('userName',JSON.stringify(decodeName));
                        // console.log(decodeName)
                        dispatch(givePermmission(true))
                        window.location.href='/'
                    }
                  
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};
