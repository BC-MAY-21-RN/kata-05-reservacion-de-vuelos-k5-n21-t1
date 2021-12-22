import React, {useState} from 'react';

export const InputHook = () =>{
    //Input NAME
    const [iname, onChangeIname] = useState(false)

    const handleiNameFocus = ()=> onChangeIname(true); 
    const handleINameBlur = () => onChangeIname(false);

    //Input Email
    const [iEmail, onChangeIEmail] = useState(false)

    const handleIEmailFocus = ()=> onChangeIEmail(true); 
    const handleIEmailBlur = () => onChangeIEmail(false);
    //Input password
    const [iPassword, onChangeIPassword] = useState(false)

    const handleIpasswordFocus = ()=> onChangeIPassword(true); 
    const handleIPasswordBlur = () => onChangeIPassword(false);
    return{
        iname,
        iEmail,
        iPassword,
        handleiNameFocus,
        handleIEmailFocus,
        handleIpasswordFocus,
        handleINameBlur,
        handleIEmailBlur,
        handleIPasswordBlur
    }

}