import React, { createContext, useState } from 'react'
import { ORIGIN_X, ORIGIN_Y, UP} from '../constants'


export const CurrentPoseContext = createContext(null)

export const CurrentPoseProvider = ({children}) => {
    const [firstPose, setFirstPose] = useState({position: {x: ORIGIN_X, y: ORIGIN_Y}, orientation: UP})
    const [secondPose, setSecondPose] = useState({position: {x: ORIGIN_X, y: ORIGIN_Y}, orientation: UP})
    return (
        <CurrentPoseContext.Provider value={{firstPose, setFirstPose, secondPose, setSecondPose}}>
            {children}
        </CurrentPoseContext.Provider>
    )
}
