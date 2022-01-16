import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlightDetails, AddButton } from '../components'
import { PurpleText } from '../components/Styled/generals'
import firestore from '@react-native-firebase/firestore';

export const MyFlights = (props) => {

    const [data, setData] = useState()

    async function loadData () {
        try {
            const flights = await  firestore().collection('Flights').get()
            setData(flights.docs)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    const renderItem = ({ item }) => {
        return(
            <FlightDetails 
                OriginCity={item.data().originCity}
                OriginCountry={item.data().originCountry}
                DestinationCity={item.data().destinationCity}
                DestinationCountry={item.data().destinationCountry}
                Date={item.data().date}
                Passengers={item.data().passengers}
            />
        )
    }

    return (
        <>
            <ScrollView>
                <SafeAreaView />
                <PurpleText>My flights</PurpleText>
                <FlatList 
                    data={ data} 
                    renderItem={ renderItem }
                    keyExtractor={ item => item.id }
                />
            </ScrollView>
            <AddButton
                onPress={'Origin'}
                navigation={props.navigation}
            />
        </>
    )
}




