import styled from 'styled-components';
import { Input } from '../LoginForm/styled';



export const PurpleText = styled.Text`
    align-self : flex-start;
    color: #5c6ef8;
    font-size: 34px;
    font-weight: bold;
    margin-left: 10px;
`;

export const GlobalBlock = styled.View`
    position:absolute;
    bottom: 15px;
    height: 65px;
    alignItems: center;
    alignSelf: center;
    padding: 10px;
`;

export const MyFlightsBlock = styled.View`
    display: flex;
    margin: 30px 0 20px 30px; 
`;

export const MyFlightsTitle = styled.Text`
    color: #5974F5;
    font-size: 40px;
    font-weight: bold;
`;
export const Flights = styled.View`
    display: flex;
    margin: 20px;
`;

export const GrayText = styled.Text`
    color: gray;
    font-size: 18px;

`;

export const BoldTitle = styled.Text`
    font-size: 28px;
    font-weight: bold;
`;

export const Container = styled.View`
    align-items: center;
    display: flex;
    width: 100%
`;

export const InputLocation = styled(Input)`
    border-bottom-color: gray;
    border-bottom-width: 1px;
    border-color: #EEEEEE;
    margin-top: 60px;
    width: 80%;
`;


export const ContainerCenter = styled.View`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start ;
    margin-top: 10px;
    height:70%;
`;

export const ContainerTop = styled.View`
    height: 100%;

`

export const LinkStyle = styled.Text`
    color: #5b6df7;
    font-size: 16px;
    text-decoration: underline
`