import React from 'react'
import { View, Text } from 'react-native'
import { TextBold } from './styled'

export const BoldText = (props) => {
    return (
        <View>
            <TextBold>{props.text}</TextBold>
        </View>
    )
}

