import { ToastAndroid } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

export const loginAuth = async (navigation, email, pwd) =>{
    try{
      await auth().signInWithEmailAndPassword(email, pwd)
      .then((res)=>{
        navigation.navigate("My Flights", res.user.uid)
      })
      .catch((e)=>{
        console.log(e.code)

        switch(e.code){
          case 'auth/wrong-password': 
            ToastAndroid.show("Invalid Password", 3)
            break;
          case 'auth/invalid-email':  
            ToastAndroid.show("Invalid Email", 3)
            break;
          case 'auth/too-many-requests':  
            ToastAndroid.show("Please wait 5 seconds before press the button again", 5)
            break;
        }
      })
    }
    catch (e){
      console.log(e)
    }
}