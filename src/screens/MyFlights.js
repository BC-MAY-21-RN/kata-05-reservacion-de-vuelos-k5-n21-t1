import React from 'react'
import { AddButton } from '../components/AddButton'
import { Flights, MyFlightsTitle, MyFlightsBlock, GlobalBlock } from '../components/Styled/generals'

export const MyFlights = () => {
    return (
        <GlobalBlock>

            <MyFlightsBlock>

                <MyFlightsTitle>MyFlights</MyFlightsTitle>

                <Flights>

                    <MyFlightsTitle>Hola</MyFlightsTitle>
                    
                </Flights>

            </MyFlightsBlock>

            <AddButton/>

        </GlobalBlock>
    )
}


