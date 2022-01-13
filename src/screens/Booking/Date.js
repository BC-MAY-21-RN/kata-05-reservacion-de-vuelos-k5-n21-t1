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

  console.log(guardarFecha);

  return (
    <ContainerTop>
      <ArrowButton 
        navigation={props.navigation}
      />
      <FlightDetails
        OriginCity={'BEG'}
        OriginCountry={'Serbia'}
        DestinationCity={'AMS'}
        DestinationCountry={'Netherlands'}
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
      />
    </ContainerTop>
  );
};
