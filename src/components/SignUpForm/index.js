import React, {useState} from 'react';
import { Block2, Block3, Input, InputText, Instructions, InputPassword, PasswordView, Eye, CheckBoxView, CheckBoxText, TextAlert, ButtonContainer, FooterContainer, CheckboxContainer, SignUpContainer } from './styled';
import { SafeAreaView, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { InputHook } from './InputHook';
import { Link } from '@react-navigation/native';
import { ContainerTop, GrayText, LinkStyle } from '../Styled/generals';
import { GeneralButton, GoogleButton, PurpleText } from '..';



export const SignUpForm = () => {

    const [disable, setDisable] = useState(true)

    const handleName = text => {
        if(text.length >= 1){
            setDisable(false);
        }
    }

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
        <SignUpContainer >
            <SafeAreaView />
            <PurpleText 
                text={'Sign Up'}
            />
            <Block2>
                <InputText style={{ marginTop: 40 }}>
                    First Name 
                </InputText>
                
                <Input
                    onChangeText={handleName}
                    value={name}
                    onFocus={handleiNameFocus}
                    onBlur={handleINameBlur}
                    style={{borderColor: (iname)?'blue':'black'}}
                />

                <InputText>
                    Email *
                    {(email.trim().length > 4) ? ''  : <TextAlert> Email in use. Use a different email</TextAlert>
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
                    {(password.trim().length >= 8) ? ''  : <TextAlert> Incorrect email and/or password</TextAlert>
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
            <CheckboxContainer>
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
                
            </CheckboxContainer>
            <View>
                <ButtonContainer>
                    <GeneralButton 
                        text={'Sign Up'} 
                        style={{ position: 'relative'}}
                        disabled={disable}
                        />
                    <CheckBoxText>Or</CheckBoxText>
                    <GoogleButton 
                        text={'Sign Up with Google'}
                        disabled
                    />
                </ButtonContainer>
                <FooterContainer> 
                    <GrayText>Already have an account? 
                        <Link to ={{ screen: 'Login' }} > <LinkStyle> Log In </LinkStyle> </Link>
                    </GrayText>
                </FooterContainer>
            </View>
        </SignUpContainer>
    )
}

