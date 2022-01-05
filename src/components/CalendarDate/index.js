import React from 'react'
import { View } from 'react-native'
import {Calendar} from 'react-native-calendars';

export const CalendarDate = () => {

    let today = new Date().toLocaleDateString()

    return (
        <View>
            <Calendar
                // Initially visible month. Default = now
                current={today}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={today}
                
            />
        </View>
    )
}

