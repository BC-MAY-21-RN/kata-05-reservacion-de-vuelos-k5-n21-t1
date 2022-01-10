import React from 'react';
import {
  BoldText,
  GeneralButton,
  PickerPassengers,
  FlightDetails,
  ArrowButton,
} from '../../components';
import {ContainerCenter, ContainerTop} from '../../components/Styled/generals';
import { ButtonPassenger, PickerContainer } from '../styled';

export const Passengers = () => {
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
        text={'Next'} />
    </ContainerTop>
  );
};
