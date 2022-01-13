import React from "react";
import { Input } from "./styled";

export const TextInput = (props) => {

    const handleFunction = text => {
        if(text.length >= 1){
            props.setTextState(true);
        }    
    }
    
    return(
        <Input 
            onChangeText={handleFunction}
            setTextState={props.setTextState}
        />
    )
}