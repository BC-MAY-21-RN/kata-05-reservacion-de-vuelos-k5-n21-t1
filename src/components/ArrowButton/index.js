import React from "react";
import { Arrow } from "../../library/images";
import { ArrowContainer, ArrowImg } from "./styled";

export const ArrowButton = (props) => {
    const { navigation } = props;
    return (
        <ArrowContainer
            onPress={() => {
                navigation.goBack();
            }}
        >
            <ArrowImg source={ Arrow }/>
        </ArrowContainer>
    )
}