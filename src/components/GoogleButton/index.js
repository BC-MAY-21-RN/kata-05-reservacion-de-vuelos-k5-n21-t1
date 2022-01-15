import React from "react";
import { ButtonGeneral, ContainerButton, TextGeneral } from "../GeneralButton/styled";
import { Google } from "../../library/images";
import { GoogleIcon } from "./styled";

import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
    iosClientId: '92800743295-a9ndhjb4t8f3glso5kjk2idgj8tbpch7.apps.googleusercontent.com',
    webClientId: '92800743295-a9ndhjb4t8f3glso5kjk2idgj8tbpch7.apps.googleusercontent.com',
    });

export const GoogleButton = (props) =>{

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }



    const logOut = ()=>{
        auth().signOut().then(() => console.log('User signed out!'));

        console.log("Sesion Cerrada")
    }
    return (
        <ContainerButton height={props.height}>
            <ButtonGeneral
                disabled={props.disabled}
                onPress={() => onGoogleButtonPress().then(() => console.log("Sesion Iniciada")).catch(err=>console.log(err))}
            >
                <GoogleIcon source={Google}/>
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}