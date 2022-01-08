import React from 'react'
import { Link } from '@react-navigation/native';
import { LoginForm, GeneralButton, PurpleText } from '../components'
import { GrayText, LinkStyle } from '../components/Styled/generals'
import { LoginContainer, TextContainer } from './styled'

export const Login = () => {

    return (
        <LoginContainer>
            <PurpleText
                text={'Login'}
            />
            <LoginForm />
            <GeneralButton 
                text={'Login'}/>
            <TextContainer>          
                <GrayText>Don't have an account? </GrayText>
                <Link to ={{ screen: 'SignUp' }}>
                    <LinkStyle>Sign Up</LinkStyle> 
                </Link>
            </TextContainer>
        </LoginContainer>
    )
}

