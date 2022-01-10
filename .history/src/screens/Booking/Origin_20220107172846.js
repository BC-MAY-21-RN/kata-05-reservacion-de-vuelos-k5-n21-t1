import React from 'react'
import { SafeAreaView } from 'react-native'
import { ArrowButton, BoldText, GeneralButton} from '../../components'
import { ContainerArrow, ContainerButton, ContainerCenter, ContainerTop, InputLocation } from '../../components/Styled/generals'

export const Origin = () => {
    
    return (
        <>
            <SafeAreaView/>
            <ContainerTop>
                <ContainerArrow>
                    <ArrowButton />
                </ContainerArrow>
                <ContainerCenter>
                    <BoldText text={'Where are you now?'}/>
                    <InputLocation placeholder="Select location"/>
                </ContainerCenter>
                <GeneralButton text="hello" height ="30%"/>
            </ContainerTop>      
        </>
    )
}

