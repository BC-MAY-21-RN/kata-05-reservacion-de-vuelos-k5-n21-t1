import React from 'react'
import { Plus } from '../../library/images'
import { AddImage, AddImageBlock } from './styled'

export const AddButton = () => {
    return (
        <AddImageBlock onPress={()=>{alert("Hola", "xd")}}>
            <AddImage source={Plus}/>
        </AddImageBlock>
    )
}
