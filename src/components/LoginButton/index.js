import React from "react";
import { ButtonGeneral, ContainerButton, TextGeneral } from "../GeneralButton/styled";
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

export const LoginButton = (props) => {

    const { email, password } = props

    const showToast = (text) => {
        ToastAndroid.show(text, ToastAndroid.LONG);
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
                        
                        if (error.code === 'auth/invalid-email') {
                            showToast('Invalid email or password, please try again')
                            alert('Invalid email, please try again')
                            
                        }

                    });
                }}
            >
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}