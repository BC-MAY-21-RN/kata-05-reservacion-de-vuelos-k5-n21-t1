import React, { useState } from 'react';
import {
  BoldText,
  GeneralButton,
  CalendarDate,
  FlightDetails,
  ArrowButton,
} from '../../components';
import {ContainerCenter, ContainerTop} from '../../components/Styled/generals';

export const Date = (props) => {

  const [disable, setDisable] = useState(true)
  const [guardarFecha, setGuardarFecha] = useState({});


  return (
    <ContainerTop>
      <ArrowButton 
        navigation={props.navigation}
      />
      <FlightDetails
        OriginCity={props.route.params.originCity}
        OriginCountry={props.route.params.originCountry}
        DestinationCity={props.route.params.destinationCity}
        DestinationCountry={props.route.params.destinationCountry}
        noBorder
      />
      <ContainerCenter>
        <BoldText text={'Select date'} />
        <CalendarDate 
          setGuardarFecha = {setGuardarFecha}
          setDisable = {setDisable}
        />
      </ContainerCenter>
      <GeneralButton 
        height
        disabled={disable}
        text={'Next'} 
        onPress={'Passengers'}
        navigation={props.navigation}
        origin={props.route.params.origin}
        destination={props.route.params.destination}
        date={guardarFecha.dateString}
      />
    </ContainerTop>
  );
};
