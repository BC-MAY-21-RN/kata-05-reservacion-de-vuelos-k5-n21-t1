import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { GeneralButton, TextInput } from '..';
import { PasswordInput } from '../PasswordInput';
import { GrayText, LinkStyle } from '../Styled/generals';
import { Container, InputContainer, InputTitle, TextContainer } from './styled';
const Open = require('../../library/images/view.png')
const Hidden = require('../../library/images/hidden.png')


import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

import { Button } from 'react-native';

GoogleSignin.configure({
  webClientId: '92800743295-a9ndhjb4t8f3glso5kjk2idgj8tbpch7.apps.googleusercontent.com',
  });

export const LoginForm = (props) => {

    const [disable, setDisable] = useState(true)
    const [email, setEmail] = useState(false)


    const handlePassword = text => {
        if(text.length >= 1 && email == true){
            setDisable(false);
        } 
    }

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

    // const signInGoogle = async () => {
    //     // Get the users ID token
    //     const { idToken } = await GoogleSignin.signIn();
    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //     // Sign-in the user with the credential
    //     await auth().signInWithCredential(googleCredential).then((res)=>{
    //       navigation.navigate("My Flights", res.user.uid)
    //     })
    //   };

    // .then((res)=>{
    //     navigation.navigate("My Flights", res.user.uid)
    //   })

    return (
        <Container>

            <Button title='Log Out' onPress={logOut}/>

            <InputContainer>
            
                <InputTitle>Email</InputTitle>
                <TextInput 
                    setTextState={setEmail}
                />
                <InputTitle>Password</InputTitle>
                <PasswordInput 
                    handlePassword={handlePassword}
                />
            </InputContainer>
            <GeneralButton 
                text={'Login'}
                disabled={disable}
                onPress={'MyFlights'}
                navigation={props.navigation}
                />

            <GoogleSigninButton 
            style={{ width: 278, height: 45 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => onGoogleButtonPress().then(() => console.log("Sesion Iniciada")).catch(err=>console.log(err)) }/>

            <TextContainer>          
                <GrayText>Don't have an account? </GrayText>
                <Link to ={{ screen: 'SignUp' }}>
                    <LinkStyle>Sign Up</LinkStyle> 
                </Link>
            </TextContainer>
        </Container>
    )
}

