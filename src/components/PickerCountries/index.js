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
                <Picker.Item value="BEG, Serbia" label="BEG, Serbia"/>
                <Picker.Item value="AMS, Netherlands" label="AMS, Netherlands"/>
                <Picker.Item value="CUN, Mexico" label="CUN, Mexico"/>
                <Picker.Item value="NYC, United States" label="NYC, United States"/>
                <Picker.Item value="BER, Deutschland" label="BER, Deutschland"/>
                <Picker.Item value="MAD, Spain" label="MAD, Spain"/>
                <Picker.Item value="TOK, Japan" label="TOK, Japan"/>
            </Picker>
        </CountriesContainer>
    )
}