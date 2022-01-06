import React from "react";
import { Arrow } from "../../library/images";
import { ArrowContainer, ArrowImg } from "./styled";

export const ArrowButton = () => {
    return (
        <ArrowContainer>
            <ArrowImg source={ Arrow }/>
        </ArrowContainer>
    )
}