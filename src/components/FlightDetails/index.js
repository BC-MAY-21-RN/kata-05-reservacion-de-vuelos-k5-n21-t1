import React from 'react'
import {Plane} from '../../library/images'
import { DetailsContainer, TopContainer, PlaneImg, BoxLeft, BoxRight, City, Country, BottomContainer, Detail } from './styled'
import { Container } from '../Styled/generals'

export const FlightDetails = (props) => {
    return (
        <Container>

            <DetailsContainer>
                <TopContainer> 
                    <BoxLeft>
                        <City>{props.OriginCity}</City>
                        <Country>{props.OriginCountry}</Country>
                    </BoxLeft>
                    <PlaneImg source={Plane} />
                    <BoxRight>
                        <City>{props.DestinationCity}</City>
                        <Country>{props.DestinationCountry}</Country>
                    </BoxRight>
                </TopContainer>
                <BottomContainer>
                    <Detail>{props.Date}</Detail>
                    <Detail>{props.Passengers}</Detail>
                </BottomContainer>
            </DetailsContainer>

        </Container>
    )
}

