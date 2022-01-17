import React from "react";
import { Input } from "./styled";

export const TextInput = (props) => {

    return(
        <Input 
            onChangeText={props.handleText}
            autoCapitalize={false}
        />
    )
}