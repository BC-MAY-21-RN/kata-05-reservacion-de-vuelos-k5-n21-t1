import React, {useState} from 'react';
import { Block,Block1, Block2, Block3, Block4, Titulo, Input, InputText, Instructions, InputPassword, PasswordView, Eye, CheckBoxView, CheckBoxText, RegisterButton, TextButton, SignUpButton, GoogleIcon, LoginText, TextAlert, LinkStyle } from './styled';

import { TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { InputHook } from './InputHook';
import { Link } from '@react-navigation/native';



export const SignUpForm = () => {

    //Inputs
    const [name, onChangeName] = useState("");
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    //CheckBoxes
    const [terms, setTerms] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    
    //onBlur y onFocus de inputs
    const {
        iname,
        iEmail,
        iPassword,
        handleiNameFocus,
        handleIEmailFocus,
        handleIpasswordFocus,
        handleINameBlur,
        handleIEmailBlur,
        handleIPasswordBlur
    } = InputHook();
    
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
                <InputText>
                    First Name 
                    {(name.trim().length > 2) ? '' : <TextAlert>  please insert your first name</TextAlert>
                    }
                </InputText>
                
                <Input
                    onChangeText={onChangeName}
                    value={name}
                    onFocus={handleiNameFocus}
                    onBlur={handleINameBlur}
                    style={{borderColor: (iname)?'blue':'black'}}
                />

                <InputText>
                    Email *
                    {(email.trim().length > 4) ? ''  : <TextAlert>  please insert a valid email</TextAlert>
                    }
                </InputText>
                <Input
                    onChangeText={onChangeEmail}
                    value={email}
                    onFocus={handleIEmailFocus}
                    onBlur={handleIEmailBlur}
                    style={{borderColor: (iEmail)?'blue':'black'}}
                />

                <InputText>
                    Password
                    {(password.trim().length >= 8) ? ''  : <TextAlert>  password must be 8 or more characters</TextAlert>
                    }
                </InputText>
                <PasswordView 
                    onFocus={handleIpasswordFocus}
                    onBlur={handleIPasswordBlur}
                    style={{borderColor: (iPassword)?'blue':'black'}}>
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
                        tintColors={{ true: '#007EFF', false: '#CACACA' }}
                    />
                    <CheckBoxText>I agree to the Terms and Privacy Policy.</CheckBoxText>
                </CheckBoxView>
                <CheckBoxView>
                    <CheckBox
                        disabled={false}
                        value={subscribe}
                        onValueChange={(newValue) => setSubscribe(newValue)}
                        tintColors={{ true: '#007EFF', false: '#CACACA' }}
                    />
                    <CheckBoxText>Subscribe for select product updates.</CheckBoxText>
                </CheckBoxView>
                
            </Block3>
            <Block4>
                <SignUpButton>
                    <RegisterButton style={{backgroundColor:'gray'}}>
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
                <LoginText>Already have an account? 
                    <Link to ={{ screen: 'MyFlights' }} > <LinkStyle> Log In </LinkStyle> </Link>
                </LoginText>
            </Block4>
        </Block>
    )
}

