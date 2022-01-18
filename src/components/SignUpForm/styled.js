import styled from 'styled-components';
import { ContainerTop } from '../Styled/generals';

export const InputText = styled.Text`
    font-size: 18px;
    margin-top: 20px;
    color: #b6b7ba;
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
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 5px
`
export const Block2 = styled.View`
    display: flex;
    padding-top: 10%
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

export const CheckBoxView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const CheckBoxText = styled.Text`
    font-size: 18px;
    color:gray; 
    text-align: center;
`

export const TextButton = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
    text-align: center;
`

export const SignUpButton = styled.View`
    display: flex;
    flex-direction: row;
    border-width: 1px;
    background-color: #5974F5;
    border-radius: 10px;
    overflow: hidden;
    align-items: center
`
export const GoogleIcon = styled.Image`
    width: 20px;
    height: 20px;
    margin-left: 40px;
`

export const LoginText = styled.Text`
    font-size: 18px;
    color:gray; 
    text-align: center;
    margin-top: 20px;
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
    height: 10%;
`

export const CheckboxContainer = styled.View`

    align-self: center
    justify-content: center;
    height: 15%;
`

export const SignUpContainer = styled(ContainerTop)`
    padding: 20px;
`