import React from "react";
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
    webClientId: '92800743295-a9ndhjb4t8f3glso5kjk2idgj8tbpch7.apps.googleusercontent.com',
    });

export const GoogleButton = (props) => {

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
     }

    return (
        <>
            <GoogleSigninButton 
                style={{ 
                    width: 278, 
                    height: 45,
                    borderRadius: 20,
                    fontSize: 18
                }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => 
                    onGoogleButtonPress().then(() => 
                    props.navigation.navigate('MyFlights'))
                    .catch(err=>console.log(err)) 
                }
            />
        </>
    )
}