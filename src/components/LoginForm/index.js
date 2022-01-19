import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { LoginButton, TextInput } from '..';
import { PasswordInput } from '../PasswordInput';
import { GrayText, LinkStyle } from '../Styled/generals';
import { Container, InputContainer, InputTitle, TextContainer } from './styled';
import {LoginFormCustomHooks} from '../../library/CustomHooks/LoginFormCustomHooks'

export const LoginForm = (props) => {

    const { disable, setDisable, email, setEmail, emailText, setEmailText, passwordText, setPasswordText, handleText, handlePassword } = LoginFormCustomHooks();

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

 