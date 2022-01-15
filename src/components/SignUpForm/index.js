import React, {useState} from 'react';
import { Block2, Input, InputText, Instructions, CheckBoxView, CheckBoxText, TextAlert, ButtonContainer, FooterContainer, CheckboxContainer, SignUpContainer } from './styled';
import { SafeAreaView, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Link } from '@react-navigation/native';
import { GrayText, LinkStyle } from '../Styled/generals';
import { GeneralButton, GoogleButton, PurpleText, TextInput } from '..';
import { PasswordInput } from '../PasswordInput';
const Open = require('../../library/images/view.png')
const Hidden = require('../../library/images/hidden.png')


export const SignUpForm = (props) => {

    const [disable, setDisable] = useState(true)
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [terms, setTerms] = useState(false);
    const [subscribe, setSubscribe] = useState(false);

    const handlePassword = text => {
        if(text.length >= 1){
            setPassword(true);
        }
    }

    const handleCheckbox = (newValue) => {
        setTerms(newValue)
        if(name == true && email == true && password == true){
            setDisable(false);
        }
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
                <TextInput 
                    setTextState={setName}
                />
                <InputText> Email </InputText>
                <TextInput
                    setTextState={setEmail}
                />
                <InputText> Password </InputText>
                <PasswordInput 
                   handlePassword={handlePassword} 
                />
                <Instructions>Use 8 or more characters with a mix of letters, numbers and symbols.</Instructions>
            </Block2>

            <CheckboxContainer>
                <CheckBoxView>
                    <CheckBox
                        disabled={false}
                        value={terms}
                        onValueChange={(newValue) => handleCheckbox(newValue)}
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
                        disabled={disable}
                        onPress={'MyFlights'}
                        navigation={props.navigation}
                    />
                    <CheckBoxText>Or</CheckBoxText>
                    <GoogleButton 
                        text={'Sign Up with Google'}
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

