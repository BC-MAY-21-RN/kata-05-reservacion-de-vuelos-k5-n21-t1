import React from 'react'
import { LoginForm, PurpleText } from '../components'
import { LoginContainer } from './styled'

export const Login = (props) => {

    return (
        <LoginContainer>
            <PurpleText
                text={'Login'}
            />
            <LoginForm 
                navigation={props.navigation}
            />
            
        </LoginContainer>
    )
}

