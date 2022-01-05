import React from 'react'
import { ButtonGeneral, TextGeneral } from './styled'

export const GeneralButton = (props) => {
    return (
    <ButtonGeneral>
        <TextGeneral>{props.text}</TextGeneral>
    </ButtonGeneral>
    )
}
