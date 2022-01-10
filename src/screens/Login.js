import React from 'react'
import { LoginForm, PurpleText } from '../components'
import { LoginContainer } from './styled'

export const Login = () => {

    return (
        <LoginContainer>
            <PurpleText
                text={'Login'}
            />
            <LoginForm />
            
        </LoginContainer>
    )
}

