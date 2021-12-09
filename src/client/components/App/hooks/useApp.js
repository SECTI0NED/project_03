import React, {useState, useContext} from 'react'
import {MAX_HEIGHT, MAX_WIDTH, ORIGIN_X, ORIGIN_Y, TAKE_PHOTO, UP, DOWN, LEFT, RIGHT, START} from "../../../constants"
import { getData } from '../../../services'

export const useApp = (setFirstPose) => {

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

    const handleClear = () => {
        // Rest the input field and grid
        setInput("")
        setGridData(initGridData)
        setFirstPose({position: {x: ORIGIN_X, y: ORIGIN_Y}, orientation: UP})
    }

    // Handle submit
    const handleSubmit = async () => {
        const sanitised = sanitisedInput(input)
        if(!sanitised) return
        setGridData(initGridData)
        try{
            const res = await getData(sanitised)
            setGridData(res.data.grid)
            setAmountOfBillboards(res.data.amount)
            setFirstPose({position: res.data.currentPosition, orientation: res.data.orientation})
        } catch(e) {
            console.log(e)
            if(e.response.status === 400){
                setError({error: true, message: "Error: Input extends boundaries of the grid."})
            }
        }
    }

    return {handleInputChange, handleSubmit, gridData, input, error, closeError, amountOfBillboards, handleButtonInput, handleClear}
}
