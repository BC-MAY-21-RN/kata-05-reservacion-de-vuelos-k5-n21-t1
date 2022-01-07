import React from 'react';
import {
  BoldText,
  GeneralButton,
  PickerPassengers,
  FlightDetails,
  ArrowButton,
} from '../../components';
import {ContainerCenter, ContainerTop} from '../../components/Styled/generals';

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
      <ContainerCenter>
        <BoldText text={'How many passengers?'} />
      </ContainerCenter>
      <PickerPassengers />
      <GeneralButton text={'Next'} />
    </ContainerTop>
  );
};
