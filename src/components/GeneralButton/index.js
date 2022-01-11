import React from 'react'
import { ButtonGeneral, TextGeneral ,ContainerButton} from './styled'

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
