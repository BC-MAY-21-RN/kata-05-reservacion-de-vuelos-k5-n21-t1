import React, { useState } from 'react';
import {
  BoldText,
  GeneralButton,
  FlightDetails,
  ArrowButton,
} from '../../components';
import { PickerCountries } from '../../components/PickerCountries';
import {
  InputLocation,
  ContainerCenter,
  ContainerTop,
} from '../../components/Styled/generals';
import {BorderBottom} from '../styled';

export const Destination = (props) => {

  const [disable, setDisable] = useState(false)

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
        <PickerCountries />
      </ContainerCenter>
      <GeneralButton 
        onPress={'Date'}
        disabled={disable}
        text={'Next'} 
        navigation={props.navigation}
        />
    </ContainerTop>
  );
};
