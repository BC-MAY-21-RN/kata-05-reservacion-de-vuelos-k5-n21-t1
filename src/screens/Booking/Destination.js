import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    <>
      <ContainerTop>
        <ArrowButton 
          navigation={props.navigation}
          />
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
          height
          onPress={'Date'}
          disabled={disable}
          text={'Next'} 
          navigation={props.navigation}
          />
      </ContainerTop>
    </>
  );
};
