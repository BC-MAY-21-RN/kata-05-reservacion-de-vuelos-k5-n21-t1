import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { GoogleButton, LoginButton, TextInput } from '..';
import { PasswordInput } from '../PasswordInput';
import { GrayText, LinkStyle } from '../Styled/generals';
import { Container, InputContainer, InputTitle, TextContainer } from './styled';

export const LoginForm = (props) => {

    const [disable, setDisable] = useState(true)
    const [email, setEmail] = useState(false)
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');


    const handleText = text => {
        if(text.length >= 1){
            setEmail(true);
            setEmailText(text)
        } 
    }
    const handlePassword = text => {
        if(text.length >= 1 && email == true){
            setDisable(false);
            setPasswordText(text)
        } 
    }

    return (
        <Container>
            <InputContainer>
                <InputTitle>Email</InputTitle>
                <TextInput 
                    handleText={handleText}
                />
                <InputTitle>Password</InputTitle>
                <PasswordInput 
                    handlePassword={handlePassword}
                />
            </InputContainer>
            <LoginButton
                text={'Login'}
                disabled={disable}
                onPress={'MyFlights'}
                navigation={props.navigation}
                email={emailText}
                password={passwordText}
            />


            <TextContainer>          
                <GrayText>Don't have an account? </GrayText>
                <Link to ={{ screen: 'SignUp' }}>
                    <LinkStyle>Sign Up</LinkStyle> 
                </Link>
            </TextContainer>
        </Container>
    )
}

