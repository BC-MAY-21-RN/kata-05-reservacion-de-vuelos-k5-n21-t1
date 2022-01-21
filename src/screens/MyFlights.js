import React, { useEffect } from 'react'
import { FlatList  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlightDetails, AddButton, LogOutButton } from '../components'
import { PurpleText } from '../components/Styled/generals'
import auth from '@react-native-firebase/auth';
import { MyFlightsHooks } from '../library/CustomHooks/MyFlightsHooks'

export const MyFlights = (props) => {

    const { rtData,  loadData, loadRTData } = MyFlightsHooks();

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




