import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { CountriesContainer } from "./styled";

export const PickerCountries = () => {
    const [selectedValue, setSelectedValue] = useState("USA")

    return (
        <CountriesContainer>
            <Picker>
                <Picker.Item label="United States" value="USA, Los Angeles"/>
                <Picker.Item label="Mexico" value="MX, Cancun"/>
                <Picker.Item label="Colombia" value="COL, Bogota"/>
                <Picker.Item label="Canada" value="CAN, Vancouver"/>
                <Picker.Item label="France" value="FRN, Paris"/>
                <Picker.Item label="Spain" value="SPN, Madrid"/>
                <Picker.Item label="Argentina" value="ARG, Buenos Aires"/>
            </Picker>
        </CountriesContainer>
    )
}