import React from 'react'
import estrella from '../../library/images'
import { DetailsContainer, TopContainer, PlaneImg, BoxLeft, BoxRight, City, Country, BottomContainer, Detail } from './styled'
import { Container } from '../Styled/generals'

export const FlightDetails = (props) => {
    return (
        <Container>

            <DetailsContainer>
                <TopContainer> 
                    <BoxLeft>
                        <City>BEG</City>
                        <Country>Serbia</Country>
                    </BoxLeft>
                    <PlaneImg source={estrella} />
                    <BoxRight>
                        <City>AMS</City>
                        <Country>Netherlands</Country>
                    </BoxRight>
                </TopContainer>
                <BottomContainer>
                    <Detail>September 3, 2020</Detail>
                    <Detail>2 passengers</Detail>
                </BottomContainer>
            </DetailsContainer>

        </Container>
    )
}

