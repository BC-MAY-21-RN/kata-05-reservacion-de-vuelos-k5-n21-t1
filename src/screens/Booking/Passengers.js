import React from 'react';
import {
  BoldText,
  GeneralButton,
  PickerPassengers,
  FlightDetails,
  ArrowButton,
} from '../../components';
import {ContainerTop} from '../../components/Styled/generals';
import {PickerContainer } from '../styled';

export const Passengers = (props) => {
  return (
    <ContainerTop>
      <ArrowButton />
      <FlightDetails
        OriginCity={'BEG'}
        OriginCountry={'Serbia'}
        DestinationCity={'AMS'}
        DestinationCountry={'Netherlands'}
        Date={'september 3, 2020'}
        noBorder
      />
      <PickerContainer>
        <BoldText text={'How many passengers?'} />
      </PickerContainer>
      <PickerPassengers />
      <GeneralButton
        style={{ marginTop: '60px'}}
        height         
        text={'Next'} 
        onPress={'FinalDetails'}
        navigation={props.navigation}
        />
    </ContainerTop>
  );
};
