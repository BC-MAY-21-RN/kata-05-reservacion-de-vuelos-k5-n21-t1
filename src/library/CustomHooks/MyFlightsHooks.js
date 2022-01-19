import React, { useState } from "react";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const MyFlightsHooks = () => {
    const [data, setData] = useState()
    const [rtData, setRTData] = useState([])
    const [user, setUser] = useState([])


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

    return{
        data,
        setData,
        rtData,
        setRTData,
        user,
        setUser,
        loadData,
        loadRTData
    }
    
}