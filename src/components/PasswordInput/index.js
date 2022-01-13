import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Eye, InputPassword, PasswordView } from "./styled";
const Open = require('../../library/images/view.png')
const Hidden = require('../../library/images/hidden.png')

export const PasswordInput = (props) => {

    const [secureTextEntry, onChangeSecureTextEntry] = useState({
        entry: true,
        icon: Open,
    });

    const onIconChange = ()=>{
        onChangeSecureTextEntry({
            entry: !secureTextEntry.entry,
            icon: (secureTextEntry.entry)?Hidden:Open,
        });

    }
    return(
        <PasswordView
        >
            <InputPassword
                onChangeText={props.handlePassword}
                secureTextEntry={secureTextEntry.entry}
            />
            <TouchableOpacity onPress={onIconChange}>
                <Eye source={secureTextEntry.icon}/>
            </TouchableOpacity>
        </PasswordView>
    )
}