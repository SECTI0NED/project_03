import React, {useState, useContext} from 'react'
import {MAX_HEIGHT, MAX_WIDTH, ORIGIN_X, ORIGIN_Y, TAKE_PHOTO, UP, DOWN, LEFT, RIGHT, START} from "../../../constants"
import { CurrentPositionProvider } from '../../../context/CurrentPositionContext'
import { getData } from '../../../services'

export const useApp = (setPosition) => {

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
    const [data, setData] = useState(initGridData)
    const [amountOfBillboards, setAmountOfBillboards] = useState(0)
    

    // Handling Input
    const [input, setInput] = useState("")
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }


    // Handle submitting and receiving data
    const sanitisedInput = (input) => {
        if(!input) return
        input = input.trim()
        for(const c of input){
            if(c !== UP && c !== DOWN && c !== RIGHT && c !== LEFT && c !== TAKE_PHOTO){
                setError({error: true, message: "Invalid input (^ v > < x)"})
                setInput("")
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


    // Handle submit
    const handleSubmit = async () => {
        const sanitised = sanitisedInput(input)
        if(!sanitised) return
        try{
            const res = await getData(sanitised)
            setData(res.data.grid)
            setAmountOfBillboards(res.data.amount)
            setPosition(res.data.currentPosition)
        } catch(e) {
            console.log(e)
        }
    }

    return {handleInputChange, handleSubmit, data, input, error, closeError, amountOfBillboards}
}
