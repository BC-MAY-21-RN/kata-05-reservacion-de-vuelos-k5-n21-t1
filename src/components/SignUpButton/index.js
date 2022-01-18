import React from "react";
import { ButtonGeneral, ContainerButton, TextGeneral } from "../GeneralButton/styled";
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

export const SignUpButton = (props) => {

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
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        props.navigation.navigate(props.onPress) 
                        firestore().collection('users').doc(auth().currentUser.uid)
                        .set({
                            name: '',
                            email: email,
                            password: password,
                        })
                        console.log('User account created & signed in!');
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            showToast('That email address is already in use!')
                            alert('That email address is already in use!')
                        }
                        if (error.code === 'auth/invalid-email') {
                            showToast('That email address is invalid!')
                            alert('That email address is invalid!')

                        }
                    });
                }}
            >
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}