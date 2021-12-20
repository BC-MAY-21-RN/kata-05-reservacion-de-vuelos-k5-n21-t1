import React from 'react'
import { View, Text } from 'react-native'
import { LoginForm } from '../components'
import { PurpleText  } from '../components/Styled/generals'

export const Login = () => {
    return (
        <View>
            <PurpleText>Login</PurpleText>
            <LoginForm />
        </View>
    )
}

