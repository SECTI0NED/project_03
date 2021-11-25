import React, { createContext, useState } from 'react'
import { ORIGIN_X, ORIGIN_Y, UP} from '../constants'


export const CurrentPoseContext = createContext(null)

export const CurrentPoseProvider = ({children}) => {
    const [pose, setPose] = useState({position: {x: ORIGIN_X, y: ORIGIN_Y}, orientation: UP})
    return (
        <CurrentPoseContext.Provider value={{pose, setPose}}>
            {children}
        </CurrentPoseContext.Provider>
    )
}
