import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { GeneralButton } from '..';
import { PasswordInput } from '../PasswordInput';
import { GrayText, LinkStyle } from '../Styled/generals';
import { Container, Input, InputContainer, InputTitle, TextContainer } from './styled';


export const LoginForm = (props) => {

    const [disable, setDisable] = useState(true)
    const [email, setEmail] = useState(false)

    const handleEmail = text => {
        if(text.length >= 1){
            setEmail(true);
        }    
    }

    const handlePassword = text => {
        if(text.length >= 1 && email == true){
            setDisable(false);
        } 
    }

    const Open = require('../../library/images/view.png')
    const Hidden = require('../../library/images/hidden.png')

    const [secureTextEntry, onChangeSecureTextEntry] = useState({
        entry: true,
        icon: Open,
    });
    

    //Change icon on password
    const onIconChange = () => {
        onChangeSecureTextEntry({
            entry: !secureTextEntry.entry,
            icon: (secureTextEntry.entry) ? Hidden : Open,
        });

    }

    return (
        <Container>
            <InputContainer>
            
                <InputTitle>Email</InputTitle>
                <Input 
                    onChangeText={handleEmail}
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

