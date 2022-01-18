import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../../navigation/AuthProvider'

export const LogOutButton = (props) => {
    const {logout} = useContext(AuthContext);
    return (
        <View>
            <Button title="LogOut" color="#5b6df7"
                onPress={() => {
                        props.navigation.navigate('Login') &&
                        logout()
                    }
                }
            />
        </View>
    )
}
