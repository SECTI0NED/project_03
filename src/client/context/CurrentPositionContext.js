import React, { createContext, useState } from 'react'
import { ORIGIN_X, ORIGIN_Y } from '../constants'


export const CurrentPositionContext = createContext(null)

export const CurrentPositionProvider = ({children}) => {
    const [position, setPosition] = useState({x: ORIGIN_X, y: ORIGIN_Y})
    return (
        <CurrentPositionContext.Provider value={{position, setPosition}}>
            {children}
        </CurrentPositionContext.Provider>
    )
}
