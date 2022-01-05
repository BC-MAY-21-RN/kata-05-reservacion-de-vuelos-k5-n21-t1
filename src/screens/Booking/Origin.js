import React from 'react'
import {BoldText, GeneralButton} from '../../components'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { ContainerCenter, InputLocation } from '../../components/Styled/generals'

export const Origin = () => {
    return (
        <>
            <ContainerCenter>
                <BoldText text={'Where are you now?'}/>
                <InputLocation placeholder="Select location"/>
            </ContainerCenter>
            <GeneralButton text={'Next'}/>
        </>      
    )
}

