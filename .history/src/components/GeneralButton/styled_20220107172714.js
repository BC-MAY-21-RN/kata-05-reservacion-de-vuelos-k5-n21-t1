import styled from 'styled-components';

export const ButtonGeneral = styled.TouchableOpacity`
    width: 80%;

    background-color: #b6b7ba;
    border-radius: 10px;
    height: 45px;
    padding: 10px;


    position: relative;
`;

export const TextGeneral = styled.Text`
    color: #ffffff;
    font-size: 18px;
`;
export const ContainerButton = styled.View`
background-color: green;
    display: flex;
    justify-content:center;
    align-items: center;
    height:${({height})=>height??'20%'};
`
