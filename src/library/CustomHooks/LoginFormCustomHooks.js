import React, { useState } from 'react'

export const LoginFormCustomHooks = () => {
    const [disable, setDisable] = useState(true)
    const [email, setEmail] = useState(false)
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const handleText = text => {
        if(text.length >= 1){
            setEmail(true);
            setEmailText(text)
        } 
    }
    const handlePassword = text => {
        if(text.length >= 1 && email == true){
            setDisable(false);
            setPasswordText(text)
        } 
    }
return{ disable, setDisable, email, setEmail, emailText, setEmailText, passwordText, setPasswordText, handleText, handlePassword } 
}