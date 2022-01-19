import React from 'react';
import { Block2, InputText, Instructions, CheckBoxView, CheckBoxText, ButtonContainer, FooterContainer, CheckboxContainer, SignUpContainer } from './styled';
import { SafeAreaView, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Link } from '@react-navigation/native';
import { GrayText, LinkStyle } from '../Styled/generals';
import { GoogleButton, PurpleText, TextInput, PasswordInput, SignUpButton} from '..';
import { SignUpCustomHook } from '../../library/CustomHooks/SignUpCustomHook';

export const SignUpForm = (props) => {

    const {
        disable, 
        setName,
        emailText, 
        passwordText, 
        terms, 
        subscribe, 
        setSubscribe,
        handleText,
        handlePassword,
        handleCheckbox
    } = SignUpCustomHook();

    return (
          <SignUpContainer >
            <SafeAreaView />
            <PurpleText text={'Sign Up'}/>

            <Block2>
                <InputText>First Name </InputText>
                <TextInput setTextState={setName}/>
                <InputText> Email </InputText>
                <TextInput handleText={handleText}/>
                <InputText> Password </InputText>
                <PasswordInput handlePassword={handlePassword}/>
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
                    <SignUpButton 
                        text={'Sign Up'} 
                        disabled={disable}
                        onPress={'MyFlights'}
                        navigation={props.navigation}
                        email={emailText}
                        password={passwordText}
                    />
                    <CheckBoxText>Or</CheckBoxText>
                    <GoogleButton navigation={props.navigation}/> 
                </ButtonContainer>
                <FooterContainer> 
                    <GrayText>Already have an account? <Link to ={{ screen: 'Login' }} > <LinkStyle> Log In </LinkStyle> </Link></GrayText>
                </FooterContainer>
            </View>
        </SignUpContainer>
    )
}

