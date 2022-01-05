import React from 'react'
import { Divider } from 'react-native-elements';
import { BoldText, GeneralButton, FlightDetails } from '../../components'
import { InputLocation, ContainerCenter } from '../../components/Styled/generals'

export const Destination = () => {
    return (
        <ContainerCenter>
            <FlightDetails
                OriginCity={"BEG"}
                OriginCountry={"Serbia"}
            />
            <BoldText text={'Where will you be flying to?'}/>
            <InputLocation placeholder="Select location"/>
            <Divider orientation="vertical" width={9} />
            <GeneralButton text={'Next'}/>
        </ContainerCenter>
    )
}