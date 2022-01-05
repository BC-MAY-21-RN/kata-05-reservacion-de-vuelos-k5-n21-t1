import React from 'react'
import { InputTitle, Input } from '../Styled/generals';
import { Container } from './styled';

export const LoginForm = () => {

    const handleEmail = () => {
        
    }

    const handlePassword = () => {
        
    }

    return (
        <Container>
            <InputTitle>Email</InputTitle>
            <Input 
                onChangeText={handleEmail}
            />
            <InputTitle>Password</InputTitle>
            <Input
                onChangeText={handlePassword}
            />
        </Container>
    )
}

