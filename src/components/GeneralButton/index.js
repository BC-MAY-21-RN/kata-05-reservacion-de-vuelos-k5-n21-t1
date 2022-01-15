import React, { useState } from 'react'
import { ButtonGeneral, TextGeneral ,ContainerButton} from './styled'

export const GeneralButton = (props) => {
    

    return (
        <ContainerButton height={props.height}>
            <ButtonGeneral
                disabled={props.disabled}
                onPress={() => {
                    props.navigation.navigate(
                        props.onPress, {
                            origin: props.origin, 
                            destination: props.destination, 
                            date: props.date,
                            passengers: props.passengers
                    }) 
                    console.log(props.origin);
                    console.log(props.destination);
                    console.log(props.date);
                    console.log(props.passengers);
                }}
            >
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}
