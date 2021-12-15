import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';
import {Input, Icon} from 'react-native-elements';

const SignUp = () => {
    return (
        <SafeAreaView>
            <Text>Sign Up</Text>
            <Text>First Name</Text>
            <Input placeholder='BASIC INPUT'/>
            <Text>Email *</Text>
            <Input />
            <Text>Password *</Text>
            <TextInput/>
            <Icon name='airplane-outline' size={30} color="red"/>
        </SafeAreaView>

    )
}

export default SignUp

const styles = StyleSheet.create({})
