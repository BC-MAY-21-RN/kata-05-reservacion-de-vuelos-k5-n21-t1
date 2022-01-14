import React from "react";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../library/images";
import { ArrowImg, ContainerArrow } from "./styled";

export const ArrowButton = (props) => {
    return (
        <ContainerArrow>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.goBack()
                }}
            >
                <ArrowImg source={ Arrow }/>
            </TouchableOpacity>
        </ContainerArrow>
    )
}