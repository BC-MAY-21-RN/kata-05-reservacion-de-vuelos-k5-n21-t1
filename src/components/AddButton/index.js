import React from 'react'
import { Plus } from '../../library/images'
import { AddImage, AddImageBlock } from './styled'

export const AddButton = (props) => {
    return (
        <AddImageBlock 
            onPress={() => {
                props.navigation.navigate(props.onPress)
            }}>
            <AddImage source={Plus}/>
        </AddImageBlock>
    )
}
