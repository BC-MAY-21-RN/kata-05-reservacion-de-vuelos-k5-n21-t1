import React from 'react'
import {Plane} from '../../library/images'
import { DetailsContainer, TopContainer, PlaneImg, City, Country, BottomContainer, Detail, Box } from './styled'
import { Container } from '../Styled/generals'

export const FlightDetails = (props) => {
    return (
        <Container>

            <DetailsContainer>
                <TopContainer> 
                    <Box>
                        <City>{props.OriginCity}</City>
                        <Country>{props.OriginCountry}</Country>
                    </Box>
                    <PlaneImg source={Plane} />
                    <Box style={{alignItems: 'flex-end'}}>
                        <City>{props.DestinationCity}</City>
                        <Country>{props.DestinationCountry}</Country>
                    </Box>
                </TopContainer>
                <BottomContainer>
                    <Detail>{props.Date}</Detail>
                    <Detail>{props.Passengers}</Detail>
                </BottomContainer>
            </DetailsContainer>

        </Container>
    )
}

