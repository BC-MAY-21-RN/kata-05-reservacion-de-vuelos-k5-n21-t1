import React from "react";
import { ButtonGeneral, ContainerButton, TextGeneral } from "../GeneralButton/styled";
import { Google } from "../../library/images";
import { GoogleIcon } from "./styled";

export const GoogleButton = ({height, text}) =>{
    return (
        <ContainerButton height={height}>
            <ButtonGeneral>
                <GoogleIcon source={Google}/>
                <TextGeneral>{text}</TextGeneral>
            </ButtonGeneral>
        </ContainerButton>
    )
}