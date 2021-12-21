import React from 'react'
import { View, Text } from 'react-native'
import { LoginForm, GeneralButton } from '../components'
import { PurpleText  } from '../components/Styled/generals'
import { LoginContainer } from './styled'

export const Login = () => {

    return (
        <LoginContainer>
            <PurpleText>Login</PurpleText>
            <LoginForm />
            <GeneralButton text={'Login'}/>
        </LoginContainer>
    )
}

