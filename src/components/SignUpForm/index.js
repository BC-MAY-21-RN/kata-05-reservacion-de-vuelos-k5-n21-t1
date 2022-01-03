import React, {useState} from 'react';
import { Block,Block1, Block2, Block3, Block4, Titulo, Input, InputText, Instructions, InputPassword, PasswordView, Eye, CheckBoxView, CheckBoxText, RegisterButton, TextButton, SignUpButton, GoogleIcon, LoginText } from './styled';

import { TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';



export const SignUpForm = () => {

    //Inputs
    const [name, onChangeName] = useState("");
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    //CheckBoxes
    const [terms, setTerms] = useState(false);
    const [subscribe, setSubscribe] = useState(false);

    //Imgs
    const view = require('./imgs/view.png');
    const hidden = require('./imgs/hidden.png');

    //Pasword Input IMG
    const [secureTextEntry, onChangeSecureTextEntry] = useState({
        entry: true,
        icon: view,
    });

    //Change icon on password
    const onIconChange = ()=>{

        onChangeSecureTextEntry({
            entry: !secureTextEntry.entry,
            icon: (secureTextEntry.entry)?hidden:view,
        });

    }

    return (
        <Block>
            <Block1>
                <Titulo>Sign Up</Titulo>
            </Block1>
            <Block2>
                <InputText>First Name</InputText>
                <Input
                    onChangeText={onChangeName}
                    value={name}
                />

                <InputText>Email *</InputText>
                <Input
                    onChangeText={onChangeEmail}
                    value={email}
                />

                <InputText>Password</InputText>
                <PasswordView>
                    <InputPassword
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={secureTextEntry.entry}
                    />
                    <TouchableOpacity onPress={onIconChange}>
                        <Eye source={secureTextEntry.icon}/>
                    </TouchableOpacity>
                </PasswordView>
                <Instructions>Use 8 or more characters with a mix of letters, numbers and symbols.</Instructions>
                
                
            </Block2>
            <Block3>
                <CheckBoxView>
                    <CheckBox
                        disabled={false}
                        value={terms}
                        onValueChange={(newValue) => setTerms(newValue)}
                    />
                    <CheckBoxText>I agree to the Terms and Privacy Policy.</CheckBoxText>
                </CheckBoxView>
                <CheckBoxView>
                    <CheckBox
                        disabled={false}
                        value={subscribe}
                        onValueChange={(newValue) => setSubscribe(newValue)}
                    />
                    <CheckBoxText>Subscribe for select product updates.</CheckBoxText>
                </CheckBoxView>
                
            </Block3>
            <Block4>
                <SignUpButton>
                    <RegisterButton>
                        <TextButton>Sign Up</TextButton>
                    </RegisterButton>
                </SignUpButton>
                <CheckBoxText>Or</CheckBoxText>
                <SignUpButton>
                    <GoogleIcon source={require('./imgs/google.png')}/>
                    <RegisterButton>
                        <TextButton>Sign Up with Google</TextButton>
                    </RegisterButton>
                </SignUpButton>
                <LoginText>Already have an account? Log In</LoginText>
            </Block4>
        </Block>
    )
}

