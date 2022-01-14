import React, { createContext, useState } from 'react'
import { ORIGIN_X, ORIGIN_Y, UP} from '../constants'


export const DroneContext = createContext(null)

export const DroneProvider = ({children}) => {

    //  Pose of drone, or pose of the first drone, if two drones are being used.
    const [firstPose, setFirstPose] = useState({position: {x: ORIGIN_X, y: ORIGIN_Y}, orientation: UP})

    // Pose fo the second drone.
    const [secondPose, setSecondPose] = useState({position: {x: ORIGIN_X, y: ORIGIN_Y}, orientation: UP})

    // Number of drones being used
    const [numberOfDrones, setNumberOfDrones] = useState(1)

    const [gridDataType, setGridDataType] = useState("both")
 
    return (
        <DroneContext.Provider value={{firstPose, setFirstPose, secondPose, setSecondPose, numberOfDrones, setNumberOfDrones, gridDataType, setGridDataType}}>
            {children}
        </DroneContext.Provider>
    )
}
