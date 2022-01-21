import React from 'react'
import { ButtonGeneral, TextGeneral ,ContainerButton} from './styled'

export const GeneralButton = (props) => {

    const substringFunc = (parameter, first, last) => parameter.substring(first, last)

    return (
        <ContainerButton height={props.height}>
            <ButtonGeneral
                disabled={props.disabled}
                onPress={() => {
                    props.navigation.navigate(
                        props.onPress, {
                            origin: props.origin, 
                            originCity: substringFunc(props.origin, 0, 3),
                            originCountry: substringFunc(props.origin, 5),
                            destination: props.destination, 
                            destinationCity: substringFunc(props.destination, 0, 3),
                            destinationCountry: substringFunc(props.destination, 5),
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
