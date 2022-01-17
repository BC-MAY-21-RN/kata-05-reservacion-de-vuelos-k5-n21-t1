import React from 'react'
import {Picker} from '@react-native-picker/picker';
import { PassengersContainer } from './styled';

export const PickerPassengers = (props) => {
    return (
      <PassengersContainer>
        <Picker
          onValueChange={(itemValue, itemIndex) => 
            props.setPassengers(itemValue)
        }>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
        </Picker>
      </PassengersContainer>
    )
}

