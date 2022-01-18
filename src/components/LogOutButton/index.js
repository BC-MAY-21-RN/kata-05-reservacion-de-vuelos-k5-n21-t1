import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth';
import { LogOut, TextLog } from './styled';

export const LogOutButton = (props) => {

    return (
        <>
            <LogOut color="#5b6df7"
                onPress={() => {
                        props.navigation.navigate('Login') &&
                        auth.signOut();
                    }
                }
            >
                <TextLog>Log Out</TextLog>
            </LogOut>
        </>
    )
}
