import styled from 'styled-components';

export const ButtonGeneral = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  background-color:  ${(disabled) => disabled ? 'gray' : '#5b6df7'};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-around;
  height: 45px;
  padding: 10px;
`;

export const TextGeneral = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
export const ContainerButton = styled.View`
  display: flex;
  align-items: center;
  height: ${({height}) => height ?? '45px'};
  width: 270px;
`;
