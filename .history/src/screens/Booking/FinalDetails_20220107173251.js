import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FlightDetails, GeneralButton, BoldText} from '../../components';
import {ContainerCenter} from '../../components/Styled/generals';

export const FinalDetails = () => {
  return (
    <>
    <SafeAreaView/>

    
      <ContainerCenter>
        <FlightDetails
          OriginCity={'BEG'}
          OriginCountry={'Serbia'}
          DestinationCity={'AMS'}
          DestinationCountry={'Netherlands'}
          Date={'september 3, 2020'}
          Passengers={'2 passengers'}
          noBorder
        />
        <BoldText text={'Your request was received.'} />
      </ContainerCenter>
        <GeneralButton text="hello" height="10%" />
    </>
  );
};
