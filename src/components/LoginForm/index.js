import React from 'react'
import { Container, Input, InputTitle } from './styled';

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

