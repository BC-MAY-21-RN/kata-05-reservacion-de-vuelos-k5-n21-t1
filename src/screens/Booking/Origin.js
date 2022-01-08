import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import {ArrowButton, BoldText, GeneralButton} from '../../components';
import {
  ContainerCenter,
  ContainerTop,
  InputLocation,
} from '../../components/Styled/generals';

export const Origin = () => {

  const [disable, setDisable] = useState(true)

    const handleLocation = text => {
        if(text.length >= 1){
            setDisable(false);
        }    
    }

  return (
    <>
      <SafeAreaView />
      <ContainerTop>
        <ArrowButton />
        <ContainerCenter>
          <BoldText text={'Where are you now?'} />
          <InputLocation 
            placeholder="Select location" 
            onChangeText={handleLocation}
            />
        </ContainerCenter>
        <GeneralButton 
          disabled={disable}
          text="Next"
        />
      </ContainerTop>
    </>
  );
};
