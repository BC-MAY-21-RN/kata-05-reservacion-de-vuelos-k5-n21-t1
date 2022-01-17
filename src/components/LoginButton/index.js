import React from "react";
import { ButtonGeneral, ContainerButton, TextGeneral } from "../GeneralButton/styled";
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

export const LoginButton = (props) => {

    const { email, password } = props
    const showToast = () => {
        ToastAndroid.show("INCORRECT USER OR PASSWORD, PLEASE CHECK!!!", ToastAndroid.LONG);
    };
    return(
        <ContainerButton height={props.height}>
            <ButtonGeneral
                disabled={props.disabled}
                onPress={() => {
                    
                    auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                        props.navigation.navigate(props.onPress)
                        console.log('User signed in!');
                    })
                    .catch(error => {
                        showToast()
                        if (error.code === 'auth/email-already-in-use') {
                            console.log('That email address is already in use!');
                        }
                        
                        if (error.code === 'auth/invalid-email') {
                            console.log('That email address is invalid!');
                            
                        }
                        
                        console.error(error);
                    });
                }}
            >
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}