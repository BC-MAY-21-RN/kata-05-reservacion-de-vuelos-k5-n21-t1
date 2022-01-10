import React from 'react'

import { ButtonGeneral, TextGeneral ,ContainerButton} from './styled'

export const GeneralButton = (props) => {
    return (
        <ContainerButton>
            <ButtonGeneral>
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}
