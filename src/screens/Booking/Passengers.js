import React from 'react'
import {View} from 'react-native'
import { Divider } from 'react-native-elements';
import { BoldText, GeneralButton, PickerPassengers, FlightDetails } from '../../components'
import { ContainerCenter, ContainerTop } from '../../components/Styled/generals';

export const Passengers = () => {
    return (
    <ContainerTop>
        <FlightDetails 
                OriginCity={"BEG"}
                OriginCountry={"Serbia"}
                DestinationCity={"AMS"}
                DestinationCountry={"Netherlands"}
                Date={"september 3, 2020"}
                noBorder
        />
        <ContainerCenter>
            <BoldText text={'How many passengers?'}/>
        </ContainerCenter>
        <PickerPassengers/>
        <GeneralButton text={'Next'}/>
    </ContainerTop>
    )
}
