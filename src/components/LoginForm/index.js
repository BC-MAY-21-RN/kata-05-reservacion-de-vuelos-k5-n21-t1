import { Link, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { GeneralButton } from '..';
import { GrayText, LinkStyle } from '../Styled/generals';
import { Container, Input, InputContainer, InputTitle, TextContainer } from './styled';

export const LoginForm = (props) => {

    const [disable, setDisable] = useState(true)

    const handleEmail = text => {
        if(text.length >= 1){
            setDisable(false);
        }    
    }

    const handlePassword = text => {
        if(text.length >= 1){
            setDisable(false);
        } 
    }

    return (
        <Container>
            <InputContainer>
            
                <InputTitle>Email</InputTitle>
                <Input 
                    onChangeText={handleEmail}
                />
                <InputTitle>Password</InputTitle>
                <Input
                    onChangeText={handlePassword}
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

