import React from 'react'
import { ButtonGeneral, TextGeneral ,ContainerButton} from './styled'

export const GeneralButton = ({height,text}) => {
    return (
        <ContainerButton height={height}>
            <ButtonGeneral>
                <TextGeneral>{text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}
