import React, { useState } from 'react'
import { ButtonGeneral, TextGeneral ,ContainerButton} from './styled'

export const GeneralButton = (props) => {
    
    const originCity = props.origin.substring(0, 3);
    const originCountry = props.origin.substring(5);
    const destinationCity = props.destination.substring(0,3);
    const destinationCountry = props.destination.substring(5);

    return (
        <ContainerButton height={props.height}>
            <ButtonGeneral
                disabled={props.disabled}
                onPress={() => {
                    props.navigation.navigate(
                        props.onPress, {
                            origin: props.origin, 
                            originCity: originCity,
                            originCountry: originCountry,
                            destination: props.destination, 
                            destinationCity: destinationCity,
                            destinationCountry: destinationCountry,
                            date: props.date,
                            passengers: props.passengers
                    }) 
                }}
            >
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}
