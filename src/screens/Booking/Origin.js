import React from 'react'
import { ArrowButton, BoldText, GeneralButton} from '../../components'
import { ContainerCenter, ContainerTop, InputLocation } from '../../components/Styled/generals'

export const Origin = () => {
    return (
        <ContainerTop>
            <ArrowButton />
            <ContainerCenter>
                <BoldText text={'Where are you now?'}/>
                <InputLocation placeholder="Select location"/>
            </ContainerCenter>
            <GeneralButton text={'Next'}/>
        </ContainerTop>      
    )
}

