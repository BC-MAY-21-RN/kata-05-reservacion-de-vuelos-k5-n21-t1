//COMIENZA LO MIO -- HUGO
import styled from 'styled-components';
import { ContainerTop } from '../Styled/generals';

export const InputText = styled.Text`
    font-size: 18px;
    marginTop: 20px;
    Color: #b6b7ba;
`
export const Instructions = styled.Text`
    color:gray;     
    font-size: 14px;
    font-weight: bold;  
    margin-top: 10px;
`

export const Block = styled.View`
    display: flex;
    flex: 1;
    margin: 12px;
`
export const Block1 = styled.View`
    display: flex;
    justifyContent: center;
    marginTop: 25px
    marginBottom: 5px
`
export const Block2 = styled.View`
    display: flex;
    marginBottom: 30px;
`
export const Block3 = styled.View`
    display: flex;
`
export const Block4 = styled.View`
    border: 2px solid black;
    height: 180px;
    display: flex;
    margin: 30px;
`
export const PasswordView = styled.View`
    flex-direction: row;
    borderWidth: 1px;
    margin-top: 10px;
    alignItems: center;
`
export const Input = styled.TextInput`
    height: 40px;
    borderWidth: 1px;
    margin-top: 10px;
    padding: 10px;
`
export const InputPassword = styled.TextInput`
    height: 40px;
    padding: 10px;
    flex: 1;
`

export const Eye = styled.Image`
    width: 30px;
    height: 30px;
    marginRight: 10px;
`
export const CheckBoxView = styled.View`
    flex-direction: row;
    alignItems: center;
    justify-content: space-between;
`
export const CheckBoxText = styled.Text`
    font-size: 18px;
    color:gray; 
    textAlign: center;
`

export const TextButton = styled.Text`
    fontSize: 16px;
    fontWeight: bold;
    color: white;
    textAlign: center;
`

export const SignUpButton = styled.View`
    display: flex;
    flex-direction: row;
    borderWidth: 1px;
    backgroundColor: #5974F5;
    border-radius: 10px;
    overflow: hidden;
    alignItems: center
`
export const GoogleIcon = styled.Image`
    width: 20px;
    height: 20px;
    marginLeft: 40px;
`

export const LoginText = styled.Text`
    font-size: 18px;
    color:gray; 
    textAlign: center;
    marginTop: 20px;
`

export const TextAlert = styled.Text`
    font-size: 14px;
    color: red;
`

export const ButtonContainer = styled.View`
    align-items: center;
    height: 40%;
    justify-content: space-around;
    padding: 20px;
    width: 100%
`

export const FooterContainer = styled.View`
    align-self: center;
    justify-content: flex-end;
    height: 20%;
`

export const CheckboxContainer = styled.View`
    justify-content: space-between;
    height: 8%;
`

export const SignUpContainer = styled(ContainerTop)`
    padding: 20px;
`