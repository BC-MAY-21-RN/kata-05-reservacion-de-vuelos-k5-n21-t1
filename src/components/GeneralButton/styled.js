import styled from 'styled-components';

export const ButtonGeneral = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  background-color:  ${ (props) => props.disabled ? 'gray' : '#5b6df7' };
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
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: ${ ({height}) => height ? "3%" : '18%'} ;
  width: 270px;
`;
