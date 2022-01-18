import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FlightDetails, GeneralButton, BoldText} from '../../components';
import {ContainerCenter} from '../../components/Styled/generals';
import firestore from '@react-native-firebase/firestore';

export const FinalDetails = (props) => {

  const uploadFlight = () => {
    try {
      firestore().collection('Flights').add({
        date: props.route.params.date,
        destinationCity: props.route.params.destinationCity,
        destinationCountry: props.route.params.destinationCountry,
        originCity: props.route.params.originCity,
        originCountry: props.route.params.originCountry,
        passengers: props.route.params.passengers
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    uploadFlight()
  })
  

  return (
    <>
    <SafeAreaView/>
    <SafeAreaView/>
      <ContainerCenter>
      <SafeAreaView/>
        <FlightDetails
          OriginCity={props.route.params.originCity}
          OriginCountry={props.route.params.originCountry}
          DestinationCity={props.route.params.destinationCity}
          DestinationCountry={props.route.params.destinationCountry}
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
          origin={props.route.params.origin}
          destination={props.route.params.destination}
          date={props.route.params.date}
          passengers={props.route.params.passengers}
        />
        
    </>
  );
};
