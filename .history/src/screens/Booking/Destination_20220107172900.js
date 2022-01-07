import React from 'react';
import {
  BoldText,
  GeneralButton,
  FlightDetails,
  ArrowButton,
} from '../../components';
import {
  InputLocation,
  ContainerCenter,
  ContainerTop,
} from '../../components/Styled/generals';
import {BorderBottom} from '../styled';

export const Destination = () => {
  return (
    <ContainerTop>
      <ArrowButton />
      <FlightDetails
        OriginCity={'BEG'}
        OriginCountry={'Serbia'}
        style={{alignSelf: 'flex-start'}}
        noBorder
      />
      <BorderBottom />
      <ContainerCenter>
        <BoldText text={'Where will you be flying to?'} />
        <InputLocation placeholder="Select location" />
      </ContainerCenter>
      <GeneralButton text={'Next'} />
    </ContainerTop>
  );
};
