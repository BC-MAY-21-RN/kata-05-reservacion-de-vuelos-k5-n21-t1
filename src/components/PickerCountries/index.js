import React from "react";
import { Picker } from "@react-native-picker/picker";
import { CountriesContainer } from "./styled";

export const PickerCountries = (props) => {

    return (
        <CountriesContainer>
            <Picker
                selectedValue={props.selectedNation}
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