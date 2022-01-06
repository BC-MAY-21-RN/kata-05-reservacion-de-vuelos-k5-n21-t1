import React from 'react'
import { BoldText, GeneralButton, CalendarDate, FlightDetails } from '../../components'
import { ContainerCenter, ContainerTop } from '../../components/Styled/generals'

export const Date = () => {
    return (
        <ContainerTop>
            <FlightDetails
                OriginCity={"BEG"}
                OriginCountry={"Serbia"}
                DestinationCity={"AMS"}
                DestinationCountry={"Netherlands"}
                noBorder
            />
            <ContainerCenter>
                <BoldText text={'Select date'}/>
                <CalendarDate/>
            </ContainerCenter>
            <GeneralButton text={'Next'}/>
        </ContainerTop>
    )
}


