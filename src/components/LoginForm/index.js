import { Link } from '@react-navigation/native';
import React from 'react'
import { GoogleButton, LoginButton, TextInput } from '..';
import { PasswordInput } from '../PasswordInput';
import { GrayText, LinkStyle } from '../Styled/generals';
import { Container, InputContainer, InputTitle, TextContainer } from './styled';
import {LoginFormCustomHooks} from '../../library/CustomHooks/LoginFormCustomHooks'

export const LoginForm = (props) => {

    const { disable, emailText, setEmailText, passwordText, setPasswordText, handleText, handlePassword } = LoginFormCustomHooks();

    return (
        <Container>
            <InputContainer>
                <InputTitle>Email</InputTitle>
                <TextInput 
                    value={emailText}
                    handleText={handleText}
                />
                <InputTitle>Password</InputTitle>
                <PasswordInput 
                    value={passwordText}
                    handlePassword={handlePassword}
                />
            </InputContainer>
            <LoginButton
                text={'Login'}
                disabled={disable}
                onPress={'MyFlights'}
                navigation={props.navigation}
                email={emailText}
                setEmail={setEmailText}
                password={passwordText}
                setPassword={setPasswordText}
            />
            <GoogleButton navigation={props.navigation}/> 
            <TextContainer>          
                <GrayText>Don't have an account? </GrayText>
                <Link to ={{ screen: 'SignUp' }}>
                    <LinkStyle>Sign Up</LinkStyle> 
                </Link>
            </TextContainer>
        </Container>
    )
}

 