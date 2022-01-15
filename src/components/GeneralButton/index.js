import React, { useState } from 'react'
import { ButtonGeneral, TextGeneral ,ContainerButton} from './styled'
import auth from '@react-native-firebase/auth';

export const GeneralButton = (props) => {
    

    return (
        <ContainerButton height={props.height}>
            <ButtonGeneral
                disabled={props.disabled}
                onPress={() => {
                    props.navigation.navigate(props.onPress) 
                }}
            >
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}
