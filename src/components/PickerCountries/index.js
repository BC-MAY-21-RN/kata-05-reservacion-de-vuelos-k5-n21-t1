import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { CountriesContainer } from "./styled";

export const PickerCountries = (props) => {

    return (
        <CountriesContainer>
            <Picker
                onValueChange={(itemValue, itemIndex) => 
                    props.setCountry(itemValue)
            }>
                <Picker.Item label="USA, Los Angeles" value="USA, Los Angeles"/>
                <Picker.Item label="MEX, Cancun" value="MEX, Cancun"/>
                <Picker.Item label="COL, Bogota" value="COL, Bogota"/>
                <Picker.Item label="CAN, Vancouver" value="CAN, Vancouver"/>
                <Picker.Item label="FRN, Paris" value="FRN, Paris"/>
                <Picker.Item label="SPN, Madrid" value="SPN, Madrid"/>
                <Picker.Item label="ARG, Buenos Aires" value="ARG, Buenos Aires"/>
            </Picker>
        </CountriesContainer>
    )
}