import React, { createContext, useState } from 'react'
import { ORIGIN_X, ORIGIN_Y, UP} from '../constants'


export const DroneContext = createContext(null)

export const DroneProvider = ({children}) => {
    const [firstPose, setFirstPose] = useState({position: {x: ORIGIN_X, y: ORIGIN_Y}, orientation: UP})
    const [secondPose, setSecondPose] = useState({position: {x: ORIGIN_X, y: ORIGIN_Y}, orientation: UP})
    const [numberOfDrones, setNumberOfDrones] = useState(1)

    return (
        <DroneContext.Provider value={{firstPose, setFirstPose, secondPose, setSecondPose, 
            numberOfDrones, setNumberOfDrones}}>
            {children}
        </DroneContext.Provider>
    )
}
