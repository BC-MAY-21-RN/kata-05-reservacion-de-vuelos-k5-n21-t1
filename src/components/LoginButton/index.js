import React from "react";
import { ButtonGeneral, ContainerButton, TextGeneral } from "../GeneralButton/styled";
import auth from '@react-native-firebase/auth';

export const LoginButton = (props) => {

    const { email, password } = props

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
                            console.log('That email address is invalid!');
                        }
                        alert('Wrong email or password, please try again')
                        console.error(error);
                    });
                }}
            >
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}