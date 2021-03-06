import React from "react";
import { Input } from "./styled";

export const TextInput = (props) => {

    return(
        <Input
            value={props.value} 
            onChangeText={props.handleText}
            autoCapitalize={false}
        />
    )
}