import styled  from "styled-components";

export const DetailsContainer = styled.View`
    border-bottom-color: black;
    border-bottom-width: ${(props) => props.noBorder ? '0px': '1.5px'}};
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding-bottom: 20px;
`

export const TopContainer = styled.View`
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
`

export const Box = styled.View`
    height: 70px;
    width: 150px;
`

export const PlaneImg = styled.Image`
    align-self: center;
    height: 30px;
    width: 30px;
`

export const City = styled.Text`
    font-size: 27px;
    font-weight: bold;
`

export const Country = styled.Text`
    color: gray;
    font-size: 16px;
    margin-top: 10px;
`

export const BottomContainer = styled.View`
    border-top-color: gray;
    border-top-width: 1px; 
    flex-direction: row;
    justify-content: space-between;
`

export const Detail = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
`