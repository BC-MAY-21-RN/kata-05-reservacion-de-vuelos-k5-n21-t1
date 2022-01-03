import React from 'react'
import { AddImage, AddImageBlock } from './styled'

export const AddButton = () => {
    return (
        <AddImageBlock>
            <AddImage source={require('./imgs/circulo-plus.png')}/>
        </AddImageBlock>
    )
}
