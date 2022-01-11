import React, { useState } from 'react';
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

export const Destination = (props) => {

  const [disable, setDisable] = useState(true)

    const handleLocation = text => {
        if(text.length >= 1){
            setDisable(false);
        }    
    }

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
        <InputLocation 
          onChangeText={handleLocation}
          placeholder="Select location" />
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
