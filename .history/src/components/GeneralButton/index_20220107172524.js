import React from 'react'

import { ButtonGeneral, TextGeneral ,ContainerButton} from './styled'

export const GeneralButton = ({className,text}) => {
    return (
        <ContainerButton className={className}>
            <ButtonGeneral>
                <TextGeneral>{text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}
