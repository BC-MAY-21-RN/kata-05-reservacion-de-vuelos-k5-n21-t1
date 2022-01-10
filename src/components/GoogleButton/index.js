import React from "react";
import { ButtonGeneral, ContainerButton, TextGeneral } from "../GeneralButton/styled";
import { Google } from "../../library/images";
import { GoogleIcon } from "./styled";

export const GoogleButton = (props) =>{
    return (
        <ContainerButton height={props.height}>
            <ButtonGeneral
                disabled={props.disabled}
            >
                <GoogleIcon source={Google}/>
                <TextGeneral>{props.text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}