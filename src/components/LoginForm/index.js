import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { GeneralButton, TextInput } from '..';
import { PasswordInput } from '../PasswordInput';
import { GrayText, LinkStyle } from '../Styled/generals';
import { Container, InputContainer, InputTitle, TextContainer } from './styled';
const Open = require('../../library/images/view.png')
const Hidden = require('../../library/images/hidden.png')


export const LoginForm = (props) => {

    const [disable, setDisable] = useState(true)
    const [email, setEmail] = useState(false)


    const handlePassword = text => {
        if(text.length >= 1 && email == true){
            setDisable(false);
        } 
    }

    return (
        <Container>
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
            <TextContainer>          
                <GrayText>Don't have an account? </GrayText>
                <Link to ={{ screen: 'SignUp' }}>
                    <LinkStyle>Sign Up</LinkStyle> 
                </Link>
            </TextContainer>
        </Container>
    )
}

