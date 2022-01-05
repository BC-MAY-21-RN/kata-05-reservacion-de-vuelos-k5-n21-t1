import React from 'react'
import {View} from 'react-native'
import { Divider } from 'react-native-elements';
import { BoldText, GeneralButton, PickerPassengers, FlightDetails } from '../../components'
import { ContainerCenter } from '../../components/Styled/generals';

export const Passengers = () => {
    return (
    <>
        <FlightDetails 
                OriginCity={"BEG"}
                OriginCountry={"Serbia"}
                DestinationCity={"AMS"}
                DestinationCountry={"Netherlands"}
                Date={"september 3, 2020"}
        />
        <ContainerCenter>
            <BoldText text={'How many passengers'}/>
        </ContainerCenter>
        <PickerPassengers/>
        <ContainerCenter>
            <GeneralButton text={'Next'}/>
        </ContainerCenter>
    </>
    )
}
