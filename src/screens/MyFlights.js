import React, { useEffect, useState, useContext } from 'react'
import { FlatList, ScrollView, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlightDetails, AddButton, LogOutButton } from '../components'
import { PurpleText } from '../components/Styled/generals'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { MyFlightsHooks } from '../library/CustomHooks/MyFlightsHooks'

export const MyFlights = (props) => {

    const {
        data,
        setData,
        rtData,
        setRTData,
        user,
        setUser,
        loadData,
        loadRTData
    } = MyFlightsHooks();

    useEffect(() => {
        loadData()
        loadRTData()
    }, [])

    const renderRTItem = ({ item }) => {
        if (auth().currentUser.uid == item.userId){
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
        } else{
            <>
            </>
        }
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
            <LogOutButton navigation={props.navigation}/>
            <AddButton
                onPress={'Origin'}
                navigation={props.navigation}
            />
        </>
    )
}




