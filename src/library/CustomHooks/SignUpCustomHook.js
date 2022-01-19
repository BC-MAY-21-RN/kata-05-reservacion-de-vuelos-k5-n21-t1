import React, { useState } from 'react';

export const SignUpCustomHook = () => {
    
    const [disable, setDisable] = useState(true);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [emailText, setEmailText] = useState('');
    const [password, setPassword] = useState(false);
    const [passwordText, setPasswordText] = useState('');
    const [terms, setTerms] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const handleText = text => {
        if(text.length >= 1){
            setEmail(true);
            setEmailText(text)
        }
    }
    const handlePassword = text => {
        if(text.length >= 1){
            setPassword(true);
            setPasswordText(text)
        }
    }
    const handleCheckbox = (newValue) => {
        setTerms(newValue)
        if(name == false && email == true && password == true){
            setDisable(false);
        }
    }
    return {
        disable,
        setDisable,
        name,
        setName,
        email,
        setEmail,
        emailText,
        setEmailText,
        password,
        setPassword,
        passwordText,
        setPasswordText,
        terms,
        setTerms,
        subscribe,
        setSubscribe,
        handleText,
        handlePassword,
        handleCheckbox
    }
}