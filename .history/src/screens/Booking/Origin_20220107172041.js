import React from 'react'
import { SafeAreaView } from 'react-native'
import { ArrowButton, BoldText, GeneralButton} from '../../components'
import { GeneralButtonStyle } from '../../components/Oringin/styled'
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
             <GeneralButtonStyle text = 
             "hello"/>
            </ContainerTop>      
        </>
    )
}

