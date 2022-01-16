import React from "react";
import { ButtonGeneral, ContainerButton, TextGeneral } from "../GeneralButton/styled";


export const UploadButton = (props) => {

    return(
        <ContainerButton>
            <ButtonGeneral
                onPress={() => {
                    props.uploadFlight
                }}
            >
                <TextGeneral></TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}