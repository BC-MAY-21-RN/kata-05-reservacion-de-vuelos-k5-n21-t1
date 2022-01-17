import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlightDetails, AddButton } from '../components'
import { PurpleText } from '../components/Styled/generals'
import firestore from '@react-native-firebase/firestore';

export const MyFlights = (props) => {

    const [data, setData] = useState()
    const [rtData, setRTData] = useState([])

    async function loadData () {
        try {
            const flights = await  firestore().collection('Flights').get()
            setData(flights.docs)
        } catch (error) {
            console.log(error);
        }
    }

    async function loadRTData() {
        const subscriber = firestore().collection('Flights').onSnapshot(querySnapshot => {
            const flights = []
            querySnapshot.forEach(documentSnapshot => {
                flights.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id
                })
            })
            setRTData(flights)
        })
    }

    useEffect(() => {
        loadData()
        loadRTData()
    }, [])

    const renderRTItem = ({ item }) => {
        return(
            <>
                <FlightDetails 
                    OriginCity={item.originCity}
                    OriginCountry={item.originCountry}
                    DestinationCity={item.destinationCity}
                    DestinationCountry={item.destinationCountry}
                    Date={item.date}
                    Passengers={item.passengers}
                />
            </>
        )
    }

    return (
        <>
            <SafeAreaView />
            <PurpleText>My flights</PurpleText>
            <FlatList 
                data={ rtData} 
                renderItem={ renderRTItem }
                keyExtractor={ item => item.key }
            />
            <AddButton
                onPress={'Origin'}
                navigation={props.navigation}
            />
        </>
    )
}




