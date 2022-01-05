import React from 'react'
import { ContainerCenter } from '../../components/Styled/generals'
import { FlightDetails, GeneralButton, BoldText } from '../../components'

export const FinalDetails = () => {
    return (
        <>
            <FlightDetails 
                    OriginCity={"BEG"}
                    OriginCountry={"Serbia"}
                    DestinationCity={"AMS"}
                    DestinationCountry={"Netherlands"}
                    Date={"september 3, 2020"}
                    Passengers={"2 passengers"}
            />
            <ContainerCenter>
                <BoldText text={'Your request was recived'}/>
                <GeneralButton text={'Finish'}/>
            </ContainerCenter>
        </>
    )
}

