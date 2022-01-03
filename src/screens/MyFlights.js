import React from 'react'
import { FlightDetails } from '../components'
import { PurpleText } from '../components/Styled/generals'

export const MyFlights = () => {
    return (
        <>
            <PurpleText>My flights</PurpleText>
            <FlightDetails 
                OriginCity={"BEG"}
                OriginCountry={"Serbia"}
                DestinationCity={"AMS"}
                DestinationCountry={"Netherlands"}
                Date={"september 3, 2020"}
                Passengers={"2 passengers"}
            />
            
        </>
    )
}


