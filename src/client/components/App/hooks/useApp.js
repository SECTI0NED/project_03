import { useState } from 'react'
import { DOWN, LEFT, MAX_HEIGHT, MAX_WIDTH, ORIGIN_X, ORIGIN_Y, RIGHT, START, TAKE_PHOTO, UP } from "../../../constants"
import { getDataSingleDrone, getDataTwoDrones } from '../../../services'

export const useApp = (setFirstPose, setSecondPose, setNumberOfDrones, numberOfDrones) => {

    // Grid Data
    const initGridData = () => {
        let grid = new Array(MAX_HEIGHT)
        for(let i = 0; i < grid.length; i++){
            grid[i] = new Array(MAX_WIDTH)
        }

        for(let row = 0; row < grid.length; row++){
            for(let col = 0; col < grid[row].length; col++){
                grid[row][col] = {key: {x: col, y: row}, item: ""}
            }
        }
        // Set the starting point
        grid[ORIGIN_Y][ORIGIN_X].item = START
        return grid
    }

    // Data
    const [gridData, setGridData] = useState(initGridData)
    const [amountOfBillboards, setAmountOfBillboards] = useState(0)
    

    // Handling Input
    const [input, setInput] = useState("")

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    const handleButtonInput = (event) => {
        setInput(input + event.currentTarget.value)
    }


    // Handle submitting and receiving data
    const sanitisedInput = (input) => {
        if(!input) return
        input = input.trim()
        for(const c of input){
            if(c !== UP && c !== DOWN && c !== RIGHT && c !== LEFT && c !== TAKE_PHOTO){
                setError({error: true, message: "Error: Invalid input"})
                return
            }
        }
        return input
    }

    // Error display
    const [error, setError] = useState({error: false, message: ""})
    const closeError = () => {
        setError({error: false, message: ""})
    }

    // For error handling - this variable keeps the most recent valid input
    const [inputCopy, setInputCopy] = useState("")
    const [gridDataCopy, setGridDataCopy] = useState(initGridData)

    const handleClear = () => {
        // Reset the input field, grid and number of billboards photographed
        setInput("")
        setGridData(initGridData)
        setFirstPose({position: {x: ORIGIN_X, y: ORIGIN_Y}, orientation: UP})
        setAmountOfBillboards(0)
    }

    // Handle submit
    const handleSubmit = async () => {
        const sanitised = sanitisedInput(input)
        if(!sanitised) return
       
        try{
            console.log("Number of drones", numberOfDrones)
            // return
            let res
            if(numberOfDrones === 1) {
                res = await getDataSingleDrone(sanitised)
            } else if(numberOfDrones === 2) {
                res = await getDataTwoDrones(sanitised)
            }
        
            // Reset the grid before drawing the path
            setGridData(initGridData)

            // Draw the path
            setGridData(res.data.grid)

            // Get the amount of billboards photographed
            setAmountOfBillboards(res.data.amount)

            // Set the pose
            if(numberOfDrones === 1){
                setFirstPose({position: res.data.pose.position, orientation: res.data.pose.orientation})
            } else if(numberOfDrones === 2){
                setFirstPose({position: res.data.firstDronePose.position, orientation: res.data.firstDronePose.orientation})
                setSecondPose({position: res.data.secondDronePose.position, orientation: res.data.secondDronePose.orientation})
                // console.log(res.data)
            }

            // Create a copy of the grid and input data for error handling
            setGridDataCopy(res.data.grid)
            setInputCopy(input)

        } catch(e) {
            console.log(e)
            if(e.response.status === 400){
                setGridData(gridDataCopy)
                setInput(inputCopy)
                setError({error: true, message: "Error: Input extends boundaries of the grid."})
            }
        }
    }

    const toggleNumberOfDrones = (event, value) => {
        setNumberOfDrones(value)
    }

    return {handleInputChange, handleSubmit, gridData, input, error, closeError, amountOfBillboards, handleButtonInput, handleClear, toggleNumberOfDrones}
}
