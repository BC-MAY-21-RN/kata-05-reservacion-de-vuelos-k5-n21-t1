import React from "react";
import { ButtonGeneral, ContainerButton, TextGeneral } from "../GeneralButton/styled";
import auth from '@react-native-firebase/auth';

export const SignUpButton = (props) => {

    const { email, password } = props

    return(
        <ContainerButton height={props.height}>
            <ButtonGeneral
                disabled={props.disabled}
                onPress={() => {
                    props.navigation.navigate(props.onPress) 
                    auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log('User account created & signed in!');
                    })
                    .catch(error => {
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