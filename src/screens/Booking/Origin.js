import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import {ArrowButton, BoldText, GeneralButton} from '../../components';
import { PickerCountries } from '../../components/PickerCountries';
import {
  ContainerCenter,
  ContainerTop,
  InputLocation,
} from '../../components/Styled/generals';

export const Origin = (props) => {

  const [disable, setDisable] = useState(false)


  return (
    <>
      <ContainerTop>
        <ArrowButton 
          navigation={props.navigation}
        />
        <ContainerCenter>
          <BoldText text={'Where are you now?'} />
          <PickerCountries />
        </ContainerCenter>
        <SafeAreaView/>
        <SafeAreaView/>
        <GeneralButton 
          disabled={disable}
          text="Next"
          onPress={'Destination'}
          navigation={props.navigation}
        />
      </ContainerTop>
    </>
  );
};
