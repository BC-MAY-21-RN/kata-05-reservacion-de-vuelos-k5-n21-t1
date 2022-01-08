import React from "react";
import { Arrow } from "../../library/images";
import { ArrowContainer, ArrowImg, ContainerArrow } from "./styled";

export const ArrowButton = (props) => {
    const { navigation } = props;
    return (
        <ContainerArrow
            onPress={() => {
                navigation.goBack();
            }}
        >
            <ArrowImg source={ Arrow }/>
        </ContainerArrow>
    )
}