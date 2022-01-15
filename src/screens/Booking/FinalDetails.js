import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FlightDetails, GeneralButton, BoldText} from '../../components';
import {ContainerCenter} from '../../components/Styled/generals';

export const FinalDetails = (props) => {
  return (
    <>
    <SafeAreaView/>
    <SafeAreaView/>
      <ContainerCenter>
      <SafeAreaView/>
        <FlightDetails
          OriginCity={props.route.params.origin}
          OriginCountry={'Serbia'}
          DestinationCity={props.route.params.destination}
          DestinationCountry={'Netherlands'}
          Date={props.route.params.date}
          Passengers={props.route.params.passengers}
          noBorder
          />
        <BoldText text={'Your request was received.'} />
      </ContainerCenter>
        <SafeAreaView/>
        <GeneralButton 
          height={'3%'}
          text="Next"
          onPress={'MyFlights'}
          navigation={props.navigation}
        />
    </>
  );
};
