import React from 'react'
import { BoldText, GeneralButton, FlightDetails } from '../../components'
import { InputLocation, ContainerCenter, ContainerTop } from '../../components/Styled/generals'

export const Destination = () => {
    return (
        <ContainerTop>
            <FlightDetails 
                    OriginCity={"BEG"}
                    OriginCountry={"Serbia"}
                    style={{ alignSelf: "flex-start"}}
                    noBorder
                />
            <ContainerCenter>
                <BoldText text={'Where will you be flying to?'}/>
                <InputLocation placeholder="Select location"/>
            </ContainerCenter>
            <GeneralButton text={'Next'}/>
        </ContainerTop>
        
    )
}