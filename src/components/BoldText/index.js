import React from 'react'
import { View, Text } from 'react-native'
import { TextBold, TextContainer } from './styled'

export const BoldText = (props) => {
    return (
        <TextContainer>
            <TextBold>{props.text}</TextBold>
        </TextContainer>
    )
}

